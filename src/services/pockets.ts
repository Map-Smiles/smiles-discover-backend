import { Pocket } from "@entities";
import { apiErrors } from "@helpers";
import container from "@helpers/container";

interface IPocketUpdate extends Partial<Pocket> {
  update_amount?: number;
}

export async function listPockets(): Promise<Pocket[]> {
  console.info(`🔧 Getting list of Pockets`);
  const pockets = await container.db.pockets.find();

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

// export async function updatePocket(id: string, fields: IPocketUpdate) {
//   const { update_amount } = fields;

//   if (update_amount) {
//     const session = container.db.startSession();

//     try {
//       await session.withTransaction(async () => {
//         console.info(`🔧 Updating amount ${update_amount} from user account`);
//         await container.db
//       });
//     } catch (err) {}
//   }

//   return container.db.pockets.updatePocketById(id, { $set: fields });
// }

export async function createPocket(
  fields: Omit<Pocket, "_id">
): Promise<Pocket> {
  return container.db.pockets.insertOne(fields);
}
