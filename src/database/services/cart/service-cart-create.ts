import BaseService from "@src/database/system/base-service";
import { Cart } from "@src/generated/prisma";

class CreateCartService extends BaseService {
  protected async transaction(data: any): Promise<null | Cart> {
    const cart = await this.database.cart.create({
      data: data,
    });

    if (!cart) return null;
    return cart;
  }
}

export default CreateCartService;
