import BaseControlller from "@src/core/base/base-controller";
import { Request, Response } from "express";

class GetVendorByIdController extends BaseControlller {
  protected async module(
    req: Request,
    res: Response
  ): Promise<void | Response> {
    const { id } = req.params;

    const vendor = await this.Service.VendorServices.GetVendorById.call(id);

    if (!vendor) {
      return this.responseHandler(
        res,
        this.NOT_FOUND_CODE,
        "Vendor not found"
      );
    }

    return this.responseHandler(
      res,
      this.SUCCESS_CODE,
      this.SUCCESS_MSG,
      vendor
    );
  }
}

export default GetVendorByIdController;
