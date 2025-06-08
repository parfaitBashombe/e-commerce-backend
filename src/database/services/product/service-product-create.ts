import BaseService from "@src/database/system/base-service";
import { Product } from "@src/generated/prisma";

class CreateProductService extends BaseService {
  protected async transaction(data?: any): Promise<null | Product> {
    const product = await this.database.product.create({
      data: {
        ...data,
      },
    });

    if (!product) return null;
    return product;
  }
}

export default CreateProductService;
