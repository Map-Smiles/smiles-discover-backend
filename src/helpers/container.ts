import NodeCache from "node-cache";

import { Database } from "@helpers";

interface IContainer {
  db: Database;
  cache: NodeCache;
}

const container: IContainer = {} as IContainer;

export default container;
