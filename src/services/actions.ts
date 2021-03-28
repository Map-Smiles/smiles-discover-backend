import { Action } from "@entities";
import { apiErrors } from "@helpers";
import container from "@helpers/container";

export async function listActions(): Promise<Action[]> {
  console.info(`🔧 Getting list of actions`);
  const actions = await container.db.actions.find();

  return actions;
}

export async function getAction(id: string): Promise<Action> {
  console.info(`🔧 Getting action from db`);
  const action = await container.db.actions.findById(id);

  if (!action) {
    throw apiErrors.actionNotFound(id);
  }

  return action;
}
