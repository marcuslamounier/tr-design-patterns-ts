import IDbProduct from "./IDbProduct";

export default class MongoDbProduct implements IDbProduct {
  getProductById(productId: number): string {
    return `MongoDB: showing data for product ${productId}`;
  }
}
