import { User } from "@entities";
import { apiErrors } from "@helpers";
import container from "@helpers/container";

export async function getUser(id: string): Promise<User> {
  console.info(`🔧 Getting user from db`);
  const user = await container.db.users.findById(id);

  if (!user) {
    throw apiErrors.userNotFound(id);
  }

  return user;
}
