import BaseControlller from "@src/core/base/base-controller";
import { Request, Response } from "express";

class GetUserByIdController extends BaseControlller {
  protected async module(
    req: Request,
    res: Response
  ): Promise<void | Response> {
    const { id } = req.params;

    const user = await this.Service.UserServices.GetUserById.call(id);

    if (!user) {
      return this.responseHandler(
        res,
        this.NOT_FOUND_CODE,
        "User not found"
      );
    }

    return this.responseHandler(
      res,
      this.SUCCESS_CODE,
      this.SUCCESS_MSG,
      user
    );
  }
}

export default GetUserByIdController;
