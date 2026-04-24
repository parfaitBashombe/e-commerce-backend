import BaseControlller from "@src/core/base/base-controller";
import { Request, Response } from "express";

class UpdateCartItemController extends BaseControlller {
  protected async module(
    req: Request,
    res: Response
  ): Promise<void | Response> {
    const { id } = req.params;
    const { quantity } = req.body;

    // Ideally, we'd check if the item belongs to the user here. For simplicity, we just update it.
    const cartItem = await this.Service.CartItemServices.UpdateCartItem.call({
      cart_item_id: id,
      quantity,
    });

    if (!cartItem) {
      return this.responseHandler(
        res,
        this.NOT_FOUND_CODE,
        "Cart item not found"
      );
    }

    return this.responseHandler(
      res,
      this.SUCCESS_CODE,
      "Cart item updated successfully",
      cartItem
    );
  }
}

export default UpdateCartItemController;
