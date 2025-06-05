import BaseControlller from "@src/core/base/base-controller";
import { Vendor } from "@src/generated/prisma";
import { Request, Response } from "express";

class UpdateVendorController extends BaseControlller {
  protected async module(
    req: Request | any,
    res: Response
  ): Promise<void | Response> {
    const data: Vendor = req.body;

    const user: Vendor = req.currentUser;

    const updateData = {
      ...data,
      vendor_id: user.vendor_id,
    };

    const result: Vendor =
      await this.Service.VendorServices.UpdateVendor.call(updateData);

    if (!result) {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        this.BAD_REQUEST_MSG
      );
    }

    const userData = this.Utils.omitProperty(result as Vendor, [
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

export default UpdateVendorController;
