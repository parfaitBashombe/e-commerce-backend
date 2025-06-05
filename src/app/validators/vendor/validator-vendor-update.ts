import BaseMiddleWare from "@src/core/base/base-middleware";
import { Request, Response, NextFunction } from "express";

class UpdateVendorValidator extends BaseMiddleWare {
  protected async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = this.joi
      .object({
        fullname: this.joi.string(),
        email: this.joi.string().email(),
        password: this.joi.string().min(6),
      })
      .required();

    this.bodyHandler(req, res, next, schema);
  }
}

export default UpdateVendorValidator;
