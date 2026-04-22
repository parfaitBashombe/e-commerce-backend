import BaseMiddleWare from "@src/core/base/base-middleware";
import { Request, Response, NextFunction } from "express";

class IdValidator extends BaseMiddleWare {
  protected async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = this.zod.object({
      id: this.zod.string().uuid(),
    });

    this.paramHandler(req, res, next, schema);
  }
}

export default IdValidator;
