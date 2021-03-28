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
  return container.db.interactions.insertOne(fields);
}
