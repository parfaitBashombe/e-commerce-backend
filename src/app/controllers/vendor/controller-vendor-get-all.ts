import BaseControlller from "@src/core/base/base-controller";
import { Request, Response } from "express";

class GetAllVendorsController extends BaseControlller {
  protected async module(
    req: Request,
    res: Response
  ): Promise<void | Response> {
    const vendors = await this.Service.VendorServices.GetAllVendors.call({});

    return this.responseHandler(
      res,
      this.SUCCESS_CODE,
      this.SUCCESS_MSG,
      vendors
    );
  }
}

export default GetAllVendorsController;
