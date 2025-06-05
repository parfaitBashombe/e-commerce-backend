import BaseControlller from "@src/core/base/base-controller";
import { Vendor } from "@src/generated/prisma";
import { Request, Response } from "express";

class LogInVendorController extends BaseControlller {
  protected async module(
    req: Request,
    res: Response
  ): Promise<void | Response> {
    const result: Vendor = await this.Service.VendorServices.SignInVendor.call(
      req.body
    );
    if (!result) {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        this.BAD_REQUEST_MSG
      );
    }

    const vendorData = this.Utils.omitProperty(result as Vendor, [
      "salt",
      "password",
      "status",
    ]);

    const token = this.Utils.Token.generate(vendorData);

    return this.responseHandler(
      res,
      this.SUCCESS_CODE,
      this.SUCCESS_MSG,
      token
    );
  }
}

export default LogInVendorController;
