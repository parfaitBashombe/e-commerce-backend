import BaseService from "@src/database/system/base-service";
import { Product } from "@src/generated/prisma";

class GetByIdProductService extends BaseService {
  protected async transaction(id: string): Promise<null | Product> {
    const result = await this.database.product.findUnique({
      where: { product_id: id },
    });

    if (!result) return null;
    return result;
  }
}

export default GetByIdProductService;
