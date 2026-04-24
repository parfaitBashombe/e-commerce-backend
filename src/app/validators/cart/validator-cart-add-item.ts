import BaseMiddleWare from "@src/core/base/base-middleware";
import { Request, Response, NextFunction } from "express";

class AddCartItemValidator extends BaseMiddleWare {
  protected async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = this.zod.object({
      product_id: this.zod.string().uuid(),
      quantity: this.zod.number().int().min(1),
    });

    this.bodyHandler(req, res, next, schema);
  }
}

export default AddCartItemValidator;
