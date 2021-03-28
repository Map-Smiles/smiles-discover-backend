import { MongoClient, Db, ClientSession } from "mongodb";

import { AccountRepository } from "./AccountRepository";
import { ActionRepository } from "./ActionRepository";
import { GoalRepository } from "./GoalRepository";
import { InteractionRepository } from "./InteractionRepository";
import { PocketRepository } from "./PocketRepository";
import { SpotActionRepository } from "./SpotActionRepository";
import { SpotRepository } from "./SpotRepository";
import { SpotTypeRepository } from "./SpotTypeRepository";
import { UserRepository } from "./UserRepository";

export class Database {
  private client: MongoClient;
  private db: Db;

  private accountsRepository: AccountRepository;
  private actionsRepository: ActionRepository;
  private goalsRepository: GoalRepository;
  private interactionsRepository: InteractionRepository;
  private pocketsRepository: PocketRepository;
  private spotsRepository: SpotRepository;
  private spotsActionsRepository: SpotActionRepository;
  private spotsTypesRepository: SpotTypeRepository;
  private usersRepository: UserRepository;

  constructor(private url: string) {
    this.client = new MongoClient(this.url, { useUnifiedTopology: true });
  }

  async connect(): Promise<void> {
    console.debug("🔧 Connecting to the database");

    await this.client.connect();
    this.db = this.client.db("smiles_discover");

    this.accountsRepository = new AccountRepository(this.db);
    this.actionsRepository = new ActionRepository(this.db);
    this.goalsRepository = new GoalRepository(this.db);
    this.interactionsRepository = new InteractionRepository(this.db);
    this.pocketsRepository = new PocketRepository(this.db);
    this.spotsRepository = new SpotRepository(this.db);
    this.spotsActionsRepository = new SpotActionRepository(this.db);
    this.spotsTypesRepository = new SpotTypeRepository(this.db);
    this.usersRepository = new UserRepository(this.db);

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

  get accounts(): AccountRepository {
    return this.accountsRepository;
  }

  get actions(): ActionRepository {
    return this.actionsRepository;
  }

  get goals(): GoalRepository {
    return this.goalsRepository;
  }

  get interactions(): InteractionRepository {
    return this.interactionsRepository;
  }

  get pockets(): PocketRepository {
    return this.pocketsRepository;
  }

  get spots(): SpotRepository {
    return this.spotsRepository;
  }

  get spotsActions(): SpotActionRepository {
    return this.spotsActionsRepository;
  }

  get spotsTypes(): SpotTypeRepository {
    return this.spotsTypesRepository;
  }

  get users(): UserRepository {
    return this.usersRepository;
  }
}
