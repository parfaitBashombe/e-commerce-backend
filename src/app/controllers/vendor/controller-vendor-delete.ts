import BaseControlller from "@src/core/base/base-controller";
import { Request, Response } from "express";

class DeleteVendorController extends BaseControlller {
  protected async module(
    req: Request,
    res: Response
  ): Promise<void | Response> {
    const { id } = req.params;

    // Check if vendor exists first
    const vendorExists = await this.Service.VendorServices.GetVendorById.call(id);
    if (!vendorExists) {
      return this.responseHandler(
        res,
        this.NOT_FOUND_CODE,
        "Vendor not found"
      );
    }

    await this.Service.VendorServices.DeleteVendor.call(id);

    return this.responseHandler(
      res,
      this.SUCCESS_CODE,
      "Vendor deleted successfully"
    );
  }
}

export default DeleteVendorController;
