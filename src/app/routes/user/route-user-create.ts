import { Request, Response, NextFunction, Router } from "express";
import { IRoute } from "@src/types/app";
import Controllers from "@src/app/controllers";
import Validators from "@src/app/validators";
import MiddleWares from "@src/app/middlewares";

class CreateUserRoute implements IRoute {
  path: string;
  router;

  constructor(path: string) {
    this.path = path;
    this.router = Router();
    this.initRoute();
  }

  private initRoute(): void {
    this.router.route(`${this.path}signup`).post(
      (req: Request, res: Response, next: NextFunction) =>
        Validators.UserValidators.Signup.run(req, res, next),
      (req: Request, res: Response, next: NextFunction) =>
        MiddleWares.UserMiddleWares.CheckEmail.run(req, res, next),
      (req: Request, res: Response) =>
        Controllers.UserControllers.CreateUser.execute(req, res)
    );
  }
}

export default CreateUserRoute;
