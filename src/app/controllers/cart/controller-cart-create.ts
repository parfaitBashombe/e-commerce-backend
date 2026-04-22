import BaseControlller from "@src/core/base/base-controller";
import { Cart, User } from "@src/generated/prisma";
import { Request, Response } from "express";

class CreateCartController extends BaseControlller {
  protected async module(
    req: Request | any,
    res: Response
  ): Promise<void | Response> {
    const current_user: User = req.currentUser;

    const cart: Cart = await this.Service.CartServices.GetById.call(
      current_user.user_id
    );
    if (!cart) {
      await this.Service.CartServices.Create.call(current_user.user_id);
    }

    return this.responseHandler(res, this.CREATED_CODE, this.CREATED_MSG);
  }
}

export default CreateCartController;
