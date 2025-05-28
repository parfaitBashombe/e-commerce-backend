import { Request, Response } from "express";

import BaseControlller from "@src/core/base/base-controller";
import { Product } from "@src/generated/prisma";

class GetAllProductsController extends BaseControlller {
  protected async module(
    req: Request,
    res: Response
  ): Promise<void | Response> {
    const products: Product[] =
      await this.Service.ProductServices.GetAll.call();

    if (!products) {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        this.BAD_REQUEST_MSG
      );
    }

    return this.responseHandler(
      res,
      this.SUCCESS_CODE,
      this.SUCCESS_MSG,
      products
    );
  }
}

export default GetAllProductsController;
