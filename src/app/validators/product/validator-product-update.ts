import BaseMiddleWare from "@src/core/base/base-middleware";
import { Request, Response, NextFunction } from "express";

class UpdateProductValidator extends BaseMiddleWare {
  protected async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = this.zod.object({
      title: this.zod.string().optional(),
      description: this.zod.string().optional(),
    });

    this.bodyHandler(req, res, next, schema);
  }
}

export default UpdateProductValidator;
