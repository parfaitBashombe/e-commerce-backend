import BaseControlller from "@src/core/base/base-controller";
import { User } from "@src/generated/prisma";
import { Request, Response } from "express";

class CheckoutOrderController extends BaseControlller {
  protected async module(
    req: Request | any,
    res: Response
  ): Promise<void | Response> {
    const current_user: User = req.currentUser;

    try {
      const order = await this.Service.OrderServices.Checkout.call(
        current_user.user_id
      );

      return this.responseHandler(
        res,
        this.CREATED_CODE,
        "Checkout successful. Order has been placed.",
        order
      );
    } catch (error: any) {
      if (
        error.message === "Cart is empty" ||
        error.message.includes("Insufficient stock")
      ) {
        return this.responseHandler(
          res,
          this.BAD_REQUEST_CODE,
          error.message
        );
      }

      // Re-throw if it's an unexpected database error, allowing the central error handler to catch it
      throw error;
    }
  }
}

export default CheckoutOrderController;
