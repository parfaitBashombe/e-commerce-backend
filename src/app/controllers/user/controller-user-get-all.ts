import BaseControlller from "@src/core/base/base-controller";
import { Request, Response } from "express";

class GetAllUsersController extends BaseControlller {
  protected async module(
    req: Request,
    res: Response
  ): Promise<void | Response> {
    const users = await this.Service.UserServices.GetAllUsers.call({});

    return this.responseHandler(
      res,
      this.SUCCESS_CODE,
      this.SUCCESS_MSG,
      users
    );
  }
}

export default GetAllUsersController;
