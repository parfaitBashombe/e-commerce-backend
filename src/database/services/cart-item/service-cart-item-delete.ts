import BaseService from "@src/database/system/base-service";
import { CartItem } from "@src/generated/prisma";

class DeleteCartItemService extends BaseService {
  protected async transaction(cart_item_id: string): Promise<CartItem> {
    const cartItem = await this.database.cartItem.delete({
      where: { cart_item_id },
    });

    return cartItem;
  }
}

export default DeleteCartItemService;
