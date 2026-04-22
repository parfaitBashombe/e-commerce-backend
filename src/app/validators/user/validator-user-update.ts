import BaseMiddleWare from "@src/core/base/base-middleware";
import { Request, Response, NextFunction } from "express";

class UpdateUserValidator extends BaseMiddleWare {
  protected async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = this.zod.object({
      fullname: this.zod.string().optional(),
      email: this.zod.string().email().optional(),
      password: this.zod.string().min(6).optional(),
    });

    this.bodyHandler(req, res, next, schema);
  }
}

export default UpdateUserValidator;
