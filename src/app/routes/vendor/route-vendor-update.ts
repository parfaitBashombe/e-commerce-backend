import { Request, Response, NextFunction, Router } from "express";
import { IRoute } from "@src/types/app";
import Controllers from "@src/app/controllers";
import Validators from "@src/app/validators";
import MiddleWares from "@src/app/middlewares";

class UpdateUserRoute implements IRoute {
  path: string;
  router;

  constructor(path: string) {
    this.path = path;
    this.router = Router();
    this.initRoute();
  }

  private initRoute(): void {
    this.router.route(`${this.path}update/:id`).put(
      (req: Request, res: Response, next: NextFunction) =>
        Validators.VendorValidators.Update.run(req, res, next),
      // (req: Request, res: Response, next: NextFunction) =>
      //   MiddleWares.UserMiddleWares.CheckEmail.run(req, res, next),

      (req: Request, res: Response, next: NextFunction) =>
        MiddleWares.VendorMiddleWares.VendorAuth.run(req, res, next),

      (req: Request, res: Response) =>
        Controllers.VendorControllers.Update.execute(req, res)
    );
  }
}

export default UpdateUserRoute;
