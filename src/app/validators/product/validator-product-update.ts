import BaseMiddleWare from "@src/core/base/base-middleware";
import { Request, Response, NextFunction } from "express";

class UpdateProductValidator extends BaseMiddleWare {
  protected async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = this.joi
      .object({
        title: this.joi.string(),
        description: this.joi.string(),
      })
      .required();

    this.bodyHandler(req, res, next, schema);
  }
}

export default UpdateProductValidator;
