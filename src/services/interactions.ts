import { Interaction } from "@entities";
import { apiErrors } from "@helpers";
import container from "@helpers/container";

export async function listInteractions(): Promise<Interaction[]> {
  console.info(`🔧 Getting list of Interactions`);
  const interactions = await container.db.interactions.find();

  return interactions;
}

export async function getInteraction(id: string): Promise<Interaction> {
  console.info(`🔧 Getting Interaction from db`);
  const interaction = await container.db.interactions.findById(id);

  if (!interaction) {
    throw apiErrors.interactionNotFound(id);
  }

  return interaction;
}

export async function updateInteraction(
  id: string,
  fields: Partial<Interaction>
) {
  return container.db.interactions.updateInteractionById(id, { $set: fields });
}

export async function createInteraction(
  fields: Omit<Interaction, "_id">
): Promise<Interaction> {
  const { id_action, id_user, id_spot } = fields;

  const { points } = await container.db.actions.findByIdOrFail(id_action);
  const account = await container.db.accounts.findOne({ id_user });

  const session = container.db.startSession();

  let interaction: Interaction;

  await session.withTransaction(async () => {
    console.info(
      `🔧 Creating new interaction for action ${id_action} and user ${id_user} on spot ${id_spot}`
    );
    interaction = await container.db.interactions.insertOne(fields, {
      session,
    });

    console.info(`🔧 Adding ${points} points to user ${id_user} accounst`);

    let { balance } = account;
    balance += points;

    await container.db.accounts.updateAccountById(
      account._id,
      {
        $set: { balance },
      },
      { session }
    );
  });

  session.endSession();

  return interaction;
}
