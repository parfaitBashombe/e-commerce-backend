import BaseService from "@src/database/system/base-service";
import { Product } from "@src/generated/prisma";

class UpdateProductService extends BaseService {
  protected async transaction(data: Product): Promise<null | Product> {
    const result = await this.database.product.update({
      where: { product_id: data.product_id },
      data: {
        ...data,
      },
    });

    if (!result) return null;
    return result;
  }
}

export default UpdateProductService;
