import BaseMiddleWare from "@src/core/base/base-middleware";
import { Request, Response, NextFunction } from "express";

class SignInUserValidator extends BaseMiddleWare {
  protected async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = this.zod.object({
      fullname: this.zod.string().optional(),
      email: this.zod.string().email(),
      password: this.zod.string().min(6),
    });

    this.bodyHandler(req, res, next, schema);
  }
}

export default SignInUserValidator;
