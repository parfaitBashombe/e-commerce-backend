import BaseControlller from "@src/core/base/base-controller";
import { Product, Vendor } from "@src/generated/prisma";
import { Request, Response } from "express";

class DeleteProductController extends BaseControlller {
  protected async module(
    req: Request | any,
    res: Response
  ): Promise<void | Response> {
    const { id } = req.params;

    const product = await this.Service.ProductServices.GetById.call(id);

    if (!product) {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        this.BAD_REQUEST_MSG
      );
    }

    const result = await this.Service.ProductServices.Delete.call(id);

    return this.responseHandler(res, this.SUCCESS_CODE, this.SUCCESS_MSG);
  }
}

export default DeleteProductController;
