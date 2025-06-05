import BaseControlller from "@src/core/base/base-controller";
import { Vendor } from "@src/generated/prisma";
import { Request, Response } from "express";

class CreateVendorController extends BaseControlller {
  protected async module(
    req: Request,
    res: Response
  ): Promise<void | Response> {
    const result: Vendor = await this.Service.VendorServices.CreateVendor.call(
      req.body
    );
    if (!result) {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        this.BAD_REQUEST_MSG
      );
    }

    const vendor = await this.Service.VendorServices.GetVendorByEmail.call(
      result.email
    );

    const vendorData = this.Utils.omitProperty(vendor as Vendor, [
      "password",
      "salt",
      "status",
    ]);
    const token = this.Utils.Token.generate(vendorData);

    return this.responseHandler(
      res,
      this.CREATED_CODE,
      this.CREATED_MSG,
      token
    );
  }
}

export default CreateVendorController;
