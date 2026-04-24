import BaseControlller from "@src/core/base/base-controller";
import { User } from "@src/generated/prisma";
import { Request, Response } from "express";

class AddCartItemController extends BaseControlller {
  protected async module(
    req: Request | any,
    res: Response
  ): Promise<void | Response> {
    const current_user: User = req.currentUser;
    const { product_id, quantity } = req.body;

    const cartItem = await this.Service.CartItemServices.AddCartItem.call({
      userId: current_user.user_id,
      productId: product_id,
      quantity,
    });

    return this.responseHandler(
      res,
      this.CREATED_CODE,
      "Item added to cart successfully",
      cartItem
    );
  }
}

export default AddCartItemController;
