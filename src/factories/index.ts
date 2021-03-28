import NodeCache from "node-cache";

import { Database } from "@helpers";

export function cache(): NodeCache {
  return new NodeCache();
}

export async function database(url: string): Promise<Database> {
  const db = new Database(url);
  await db.connect();
  return db;
}
