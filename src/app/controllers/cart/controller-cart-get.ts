import BaseControlller from "@src/core/base/base-controller";
import { User } from "@src/generated/prisma";
import { Request, Response } from "express";

class GetCartController extends BaseControlller {
  protected async module(
    req: Request | any,
    res: Response
  ): Promise<void | Response> {
    const current_user: User = req.currentUser;

    // Use the GetById service which we updated to include CartItem and Product
    const cart = await this.Service.CartServices.GetById.call(
      current_user.user_id
    );

    if (!cart) {
      // Return empty format if cart doesn't exist yet
      return this.responseHandler(res, this.SUCCESS_CODE, this.SUCCESS_MSG, {
        user_id: current_user.user_id,
        CartItem: [],
      });
    }

    return this.responseHandler(res, this.SUCCESS_CODE, this.SUCCESS_MSG, cart);
  }
}

export default GetCartController;
