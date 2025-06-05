import BaseControlller from "@src/core/base/base-controller";
import { User } from "@src/generated/prisma";
import { Request, Response } from "express";

class UpdateUserController extends BaseControlller {
  protected async module(
    req: Request | any,
    res: Response
  ): Promise<void | Response> {
    const data: User = req.body;

    const user: User = req.currentUser;

    const updateData = {
      ...data,
      user_id: user.user_id,
    };

    const result: User =
      await this.Service.UserServices.UpdateUser.call(updateData);

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

export default UpdateUserController;
