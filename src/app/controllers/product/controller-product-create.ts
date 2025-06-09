import BaseControlller from "@src/core/base/base-controller";
import { Product, User, Vendor } from "@src/generated/prisma";
import { Request, Response } from "express";

class CreateProductController extends BaseControlller {
  protected async module(
    req: Request | any,
    res: Response
  ): Promise<void | Response> {
    const data: Product = req.body;

    const vendor: Vendor = req.currentUser;

    const productData = {
      ...data,
      vendor_id: vendor.vendor_id,
    };

    const result: Product =
      await this.Service.ProductServices.Create.call(productData);
    if (!result) {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        this.BAD_REQUEST_MSG
      );
    }

    return this.responseHandler(res, this.CREATED_CODE, this.CREATED_MSG);
  }
}

export default CreateProductController;
