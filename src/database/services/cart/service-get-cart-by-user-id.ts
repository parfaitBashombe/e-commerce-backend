import BaseService from "@src/database/system/base-service";
import { Cart } from "@src/generated/prisma";

class GetCartByUserIdService extends BaseService {
  protected async transaction(id: string): Promise<null | Cart> {
    const cart = await this.database.cart.findUnique({
      where: { user_id: id },
      include: {
        CartItem: {
          include: {
            Product: true,
          },
        },
      },
    });

    if (!cart) return null;
    return cart;
  }
}

export default GetCartByUserIdService;
