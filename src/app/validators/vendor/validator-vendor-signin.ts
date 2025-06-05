import BaseMiddleWare from "@src/core/base/base-middleware";
import { Request, Response, NextFunction } from "express";

class SignInVendorValidator extends BaseMiddleWare {
  protected async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = this.joi
      .object({
        fullname: this.joi.string(),
        email: this.joi.string().email().required(),
        password: this.joi.string().min(6).required(),
      })
      .required();

    this.bodyHandler(req, res, next, schema);
  }
}

export default SignInVendorValidator;
