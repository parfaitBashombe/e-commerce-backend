import { Request, Response, NextFunction, Router } from "express";
import { IRoute } from "@src/types/app";
import Controllers from "@src/app/controllers";
import Validators from "@src/app/validators";
import MiddleWares from "@src/app/middlewares";

class CartRoute implements IRoute {
  path: string;
  router;

  constructor(path: string) {
    this.path = path;
    this.router = Router();
    this.initRoute();
  }

  private initRoute(): void {
    // GET /cart -> get current user's cart
    this.router.route(`${this.path}`).get(
      (req: Request, res: Response, next: NextFunction) =>
        MiddleWares.UserMiddleWares.UserAuth.run(req, res, next),
      (req: Request, res: Response) =>
        Controllers.CartControllers.Get.execute(req, res)
    );

    // POST /cart/items -> Add item to cart
    this.router.route(`${this.path}items`).post(
      (req: Request, res: Response, next: NextFunction) =>
        MiddleWares.UserMiddleWares.UserAuth.run(req, res, next),
      (req: Request, res: Response, next: NextFunction) =>
        Validators.CartValidators.AddItem.run(req, res, next),
      (req: Request, res: Response) =>
        Controllers.CartControllers.AddItem.execute(req, res)
    );

    // PATCH /cart/items/:id -> Update cart item quantity
    this.router.route(`${this.path}items/:id`).patch(
      (req: Request, res: Response, next: NextFunction) =>
        MiddleWares.UserMiddleWares.UserAuth.run(req, res, next),
      (req: Request, res: Response, next: NextFunction) =>
        Validators.Id.run(req, res, next),
      (req: Request, res: Response, next: NextFunction) =>
        Validators.CartValidators.UpdateItem.run(req, res, next),
      (req: Request, res: Response) =>
        Controllers.CartControllers.UpdateItem.execute(req, res)
    );

    // DELETE /cart/items/:id -> Delete cart item
    this.router.route(`${this.path}items/:id`).delete(
      (req: Request, res: Response, next: NextFunction) =>
        MiddleWares.UserMiddleWares.UserAuth.run(req, res, next),
      (req: Request, res: Response, next: NextFunction) =>
        Validators.Id.run(req, res, next),
      (req: Request, res: Response) =>
        Controllers.CartControllers.DeleteItem.execute(req, res)
    );
  }
}

export default CartRoute;
