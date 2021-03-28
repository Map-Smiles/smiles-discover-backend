import {
  Collection,
  CollectionInsertOneOptions,
  Db,
  FilterQuery,
  ObjectId,
  OptionalId,
  UpdateOneOptions,
  UpdateQuery,
} from "mongodb";

export class AbstractRepository<T> {
  protected collection: Collection<T>;

  constructor(db: Db, collectionName: string) {
    this.collection = db.collection<T>(collectionName);
  }

  find(query?: FilterQuery<T>): Promise<T[]> {
    return this.collection.find(query).toArray();
  }

  findOne(query: FilterQuery<T>): Promise<T> {
    return this.collection.findOne(query);
  }

  findById(id: ObjectId | string): Promise<T> {
    const _id = typeof id === "string" ? new ObjectId(id) : id;
    return this.collection.findOne({
      _id,
    } as any);
  }

  async findByIdOrFail(id: ObjectId | string): Promise<T> {
    const result = await this.findById(id);

    if (!result) {
      throw new Error(
        `cannot find document with id ${id} in the collection ${this.collection.collectionName}`
      );
    }

    return result;
  }

  async insertOne(query: OptionalId<T>, options?: CollectionInsertOneOptions) {
    const result = await this.collection.insertOne(query, options);
    return {
      _id: result.insertedId,
      ...result.ops[0],
    };
  }

  updateOne(
    filter: FilterQuery<T>,
    update: UpdateQuery<T> | Partial<T>,
    options?: UpdateOneOptions
  ) {
    return this.collection.updateOne(filter, update, options);
  }

  protected normalizeId(id: ObjectId | string): ObjectId {
    return typeof id === "string" ? new ObjectId(id) : id;
  }
}
