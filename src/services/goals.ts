import { Goal } from "@entities";
import { apiErrors } from "@helpers";
import container from "@helpers/container";

export async function listGoals(): Promise<Goal[]> {
  console.info(`🔧 Getting list of goals`);
  const goals = await container.db.goals.find();

  return goals;
}

export async function getGoal(id: string): Promise<Goal> {
  console.info(`🔧 Getting goal from db`);
  const goal = await container.db.goals.findById(id);

  if (!goal) {
    throw apiErrors.goalNotFound(id);
  }

  return goal;
}

export async function updateGoal(id: string, fields: Partial<Goal>) {
  return container.db.goals.updateGoalById(id, { $set: fields });
}

export async function createGoal(fields: Partial<Goal>): Promise<Goal> {
  const { name, points_necessary, target_date } = fields;

  return container.db.goals.insertOne({
    name,
    points_necessary,
    target_date,
  });
}
