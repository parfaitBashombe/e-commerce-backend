import { Request, Response, NextFunction, Router } from "express";
import { IRoute } from "@src/types/app";
import Controllers from "@src/app/controllers";
import MiddleWares from "@src/app/middlewares";

class OrderRoute implements IRoute {
  path: string;
  router;

  constructor(path: string) {
    this.path = path;
    this.router = Router();
    this.initRoute();
  }

  private initRoute(): void {
    // POST /order/checkout -> Convert cart to order
    this.router.route(`${this.path}checkout`).post(
      (req: Request, res: Response, next: NextFunction) =>
        MiddleWares.UserMiddleWares.UserAuth.run(req, res, next),
      (req: Request, res: Response) =>
        Controllers.OrderControllers.Checkout.execute(req, res)
    );
  }
}

export default OrderRoute;
