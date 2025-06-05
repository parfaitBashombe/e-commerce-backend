import BaseControlller from "@src/core/base/base-controller";
import { User } from "@src/generated/prisma";
import { Request, Response } from "express";

class LogInUserController extends BaseControlller {
  protected async module(
    req: Request,
    res: Response
  ): Promise<void | Response> {
    const result: User = await this.Service.UserServices.SignInUser.call(
      req.body
    );
    if (!result) {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        this.BAD_REQUEST_MSG
      );
    }

    const userData = this.Utils.omitProperty(result as User, [
      "salt",
      "password",
      "status",
    ]);

    const token = this.Utils.Token.generate(userData);

    return this.responseHandler(
      res,
      this.SUCCESS_CODE,
      this.SUCCESS_MSG,
      token
    );
  }
}

export default LogInUserController;
