import BaseMiddleWare from "@src/core/base/base-middleware";
import { Request, Response, NextFunction } from "express";

class IdValidator extends BaseMiddleWare {
  protected async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = this.joi.object({
      id: this.joi.string().uuid().required(),
    });

    this.paramHandler(req, res, next, schema);
  }
}

export default IdValidator;
