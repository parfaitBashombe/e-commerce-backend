import BaseService from "@src/database/system/base-service";
import { CartItem } from "@src/generated/prisma";

class UpdateCartItemService extends BaseService {
  protected async transaction(data: {
    cart_item_id: string;
    quantity: number;
  }): Promise<null | CartItem> {
    const { cart_item_id, quantity } = data;

    const cartItem = await this.database.cartItem.update({
      where: { cart_item_id },
      data: { quantity },
    });

    return cartItem;
  }
}

export default UpdateCartItemService;
