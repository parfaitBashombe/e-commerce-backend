import { Request, Response, NextFunction, Router } from "express";
import { IRoute } from "@src/types/app";
import Controllers from "@src/app/controllers";
import Validators from "@src/app/validators";
import MiddleWares from "@src/app/middlewares";

class CreateProductRoute implements IRoute {
  path: string;
  router;

  constructor(path: string) {
    this.path = path;
    this.router = Router();
    this.initRoute();
  }

  private initRoute(): void {
    this.router.route(`${this.path}create`).post(
      (req: Request, res: Response, next: NextFunction) =>
        Validators.ProductValidators.CreateProduct.run(req, res, next),
      (req: Request, res: Response, next: NextFunction) =>
        MiddleWares.VendorMiddleWares.VendorAuth.run(req, res, next),
      (req: Request, res: Response) =>
        Controllers.ProductControllers.CreateProduct.execute(req, res)
    );
  }
}

export default CreateProductRoute;
