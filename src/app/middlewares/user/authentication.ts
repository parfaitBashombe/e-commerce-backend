import BaseMiddleWare from "@src/core/base/base-middleware";
import { JwtPayload } from "@src/types/user";
import { Request, Response, NextFunction } from "express";

class UserAuthentication extends BaseMiddleWare {
  protected async middleware(
    req: Request | any,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const token = this.Utils.Token.extract(req);

    if (!token || token === "") {
      this.responseHandler(res, this.UNAUTHORIZED_CODE, this.UNAUTHORIZED_MSG);
      return;
    }
    const decoded = this.Utils.Token.decode(token) as JwtPayload;

    if (!decoded) {
      this.responseHandler(res, this.UNAUTHORIZED_CODE, this.UNAUTHORIZED_MSG);
      return;
    }

    const user = await this.Service.UserServices.GetUserByEmail.call(
      decoded?.payload?.email
    );

    if (!user) {
      this.responseHandler(res, this.UNAUTHORIZED_CODE, this.UNAUTHORIZED_MSG);
      return;
    }

    req.currentUser = user;

    return next();
  }
}

export default UserAuthentication;
