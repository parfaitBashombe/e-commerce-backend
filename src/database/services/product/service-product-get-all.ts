import BaseService from "@src/database/system/base-service";
import { Product } from "@src/generated/prisma";

class GetAllProductService extends BaseService {
  protected async transaction(data?: any): Promise<null | Product[]> {
    const products = await this.database.product.findMany();

    if (!products) return null;
    return products;
  }
}

export default GetAllProductService;
