import { Pocket } from "@entities";
import { apiErrors } from "@helpers";
import container from "@helpers/container";

interface IPocketUpdate extends Partial<Pocket> {
  update_amount?: number;
}

export async function listPockets(id_user: string): Promise<Pocket[]> {
  console.info(`🔧 Getting list of Pockets`);
  const pockets = await container.db.pockets.find({
    id_user,
  });

  return pockets;
}

export async function getPocket(id: string): Promise<Pocket> {
  console.info(`🔧 Getting Pocket from db`);
  const interaction = await container.db.pockets.findById(id);

  if (!interaction) {
    throw apiErrors.interactionNotFound(id);
  }

  return interaction;
}

export async function updatePocket(
  id: string,
  fields: IPocketUpdate,
  id_user: string
) {
  const { update_amount } = fields;

  if (update_amount) {
    const { balance: account_balance } = await container.db.accounts.findOne({
      id_user,
    });

    if (update_amount > account_balance) {
      throw apiErrors.insufficientFunds(update_amount);
    }
    const session = container.db.startSession();

    await session.withTransaction(async () => {
      console.info(
        `🔧 Removing amount ${update_amount} from user account balance`
      );

      await container.db.accounts.updateOne(
        { id_user },
        { $inc: { balance: -update_amount } },
        { session }
      );

      console.info(`🔧 Adding amount ${update_amount} to pocket ${id}`);

      await container.db.pockets.updatePocketById(
        id,
        {
          $inc: { balance: update_amount },
        },
        { session }
      );
    });

    session.endSession();

    return;
  }

  return container.db.pockets.updatePocketById(id, { $set: fields });
}

export async function createPocket(
  fields: Omit<Pocket, "_id">
): Promise<Pocket> {
  return container.db.pockets.insertOne(fields);
}
