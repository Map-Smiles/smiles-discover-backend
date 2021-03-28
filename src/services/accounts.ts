import { Account } from "@entities";
import { apiErrors } from "@helpers";
import container from "@helpers/container";

export async function getAccount(id: string): Promise<Account> {
  console.info(`🔧 Getting Account from db`);
  const account = await container.db.accounts.findById(id);

  if (!account) {
    throw apiErrors.accountNotFound(id);
  }

  return account;
}
