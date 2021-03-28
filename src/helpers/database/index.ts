import { MongoClient, Db, ClientSession } from "mongodb";

export class Database {
  private client: MongoClient;
  private db: Db;

  constructor(private url: string) {
    this.client = new MongoClient(this.url, { useUnifiedTopology: true });
  }

  async connect(): Promise<void> {
    console.debug("🔧 Connecting to the database");

    await this.client.connect();
    this.db = this.client.db("smiles_discover");

    console.debug("🔧 DB Connection:", this.isConnected);
  }

  close(): Promise<void> {
    return this.client.close();
  }

  startSession(): ClientSession {
    return this.client.startSession();
  }

  get isConnected(): boolean {
    return this.client?.isConnected();
  }
}
