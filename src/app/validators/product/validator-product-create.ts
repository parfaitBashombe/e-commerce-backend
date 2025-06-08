import BaseMiddleWare from "@src/core/base/base-middleware";
import { Request, Response, NextFunction } from "express";

class CreateProductValidator extends BaseMiddleWare {
  protected async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = this.joi
      .object({
        title: this.joi.string().required(),
        description: this.joi.string().required(),
      })
      .required();

    this.bodyHandler(req, res, next, schema);
  }
}

export default CreateProductValidator;
