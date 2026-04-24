import BaseControlller from "@src/core/base/base-controller";
import { Request, Response } from "express";

class DeleteCartItemController extends BaseControlller {
  protected async module(
    req: Request,
    res: Response
  ): Promise<void | Response> {
    const { id } = req.params;

    try {
      await this.Service.CartItemServices.DeleteCartItem.call(id);
    } catch (error) {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        "Failed to delete cart item. It may not exist."
      );
    }

    return this.responseHandler(
      res,
      this.SUCCESS_CODE,
      "Cart item removed successfully"
    );
  }
}

export default DeleteCartItemController;
