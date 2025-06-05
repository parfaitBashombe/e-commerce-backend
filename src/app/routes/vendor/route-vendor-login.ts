import { Request, Response, NextFunction, Router } from "express";
import { IRoute } from "@src/types/app";
import Controllers from "@src/app/controllers";
import Validators from "@src/app/validators";

class SignInUserRoute implements IRoute {
  path: string;
  router;

  constructor(path: string) {
    this.path = path;
    this.router = Router();
    this.initRoute();
  }

  private initRoute(): void {
    this.router.route(`${this.path}signin`).post(
      (req: Request, res: Response, next: NextFunction) =>
        Validators.VendorValidators.SignIn.run(req, res, next),
      (req: Request, res: Response) =>
        Controllers.VendorControllers.SignIn.execute(req, res)
    );
  }
}

export default SignInUserRoute;
