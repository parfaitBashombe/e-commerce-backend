import BaseControlller from "@src/core/base/base-controller";
import { User } from "@src/generated/prisma";
import { Request, Response } from "express";

class CreateUserController extends BaseControlller {
  protected async module(
    req: Request,
    res: Response
  ): Promise<void | Response> {
    const result: User = await this.Service.UserServices.CreateUser.call(
      req.body
    );
    if (!result) {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        this.BAD_REQUEST_MSG
      );
    }

    const user = await this.Service.UserServices.GetUserByEmail.call(
      result.email
    );

    const userData = this.Utils.omitProperty(user as User, [
      "password",
      "salt",
      "status",
    ]);
    const token = this.Utils.Token.generate(userData);

    return this.responseHandler(
      res,
      this.CREATED_CODE,
      this.CREATED_MSG,
      token
    );
  }
}

export default CreateUserController;
