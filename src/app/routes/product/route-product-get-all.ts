import Controllers from "@src/app/controllers";
import { IRoute } from "@src/types/app";
import { NextFunction, Router } from "express";

class GetAllProductsRoute implements IRoute {
  path: string;
  router: Router;

  constructor(path: string) {
    this.path = path;
    this.router = Router();
    this.initRoute();
  }

  private initRoute(): void {
    this.router
      .route(`${this.path}`)
      .get((req: Request | any, res: Response | any) =>
        Controllers.ProductControllers.GetAll.execute(req, res)
      );
  }
}

export default GetAllProductsRoute;
