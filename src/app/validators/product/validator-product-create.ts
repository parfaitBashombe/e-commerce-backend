import BaseMiddleWare from "@src/core/base/base-middleware";
import { Request, Response, NextFunction } from "express";

class CreateProductValidator extends BaseMiddleWare {
  protected async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = this.zod.object({
      title: this.zod.string(),
      description: this.zod.string(),
      price: this.zod.number().positive(),
      stock: this.zod.number().int().nonnegative().optional(),
    });

    this.bodyHandler(req, res, next, schema);
  }
}

export default CreateProductValidator;
