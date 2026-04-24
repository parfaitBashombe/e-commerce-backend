import BaseControlller from "@src/core/base/base-controller";
import { Request, Response } from "express";

class DeleteUserController extends BaseControlller {
  protected async module(
    req: Request,
    res: Response
  ): Promise<void | Response> {
    const { id } = req.params;

    // Check if user exists first to provide a 404 if not found
    const userExists = await this.Service.UserServices.GetUserById.call(id);
    if (!userExists) {
      return this.responseHandler(
        res,
        this.NOT_FOUND_CODE,
        "User not found"
      );
    }

    await this.Service.UserServices.DeleteUser.call(id);

    return this.responseHandler(
      res,
      this.SUCCESS_CODE,
      "User deleted successfully"
    );
  }
}

export default DeleteUserController;
