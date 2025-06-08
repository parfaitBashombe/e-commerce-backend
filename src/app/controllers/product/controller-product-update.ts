import BaseControlller from "@src/core/base/base-controller";
import { Product, Vendor } from "@src/generated/prisma";
import { Request, Response } from "express";

class UpdateProductController extends BaseControlller {
  protected async module(
    req: Request | any,
    res: Response
  ): Promise<void | Response> {
    const data: Product = req.body;
    const { id } = req.params;

    const vendor: Vendor = req.currentUser;

    const updateData: Product = {
      ...data,
      vendor_id: vendor.vendor_id,
      product_id: id,
    };

    const result: Product =
      await this.Service.ProductServices.Update.call(updateData);

    if (!result) {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        this.BAD_REQUEST_MSG
      );
    }

    return this.responseHandler(res, this.SUCCESS_CODE, this.SUCCESS_MSG);
  }
}

export default UpdateProductController;
