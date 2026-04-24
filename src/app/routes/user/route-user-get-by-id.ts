import { Request, Response, NextFunction, Router } from "express";
import { IRoute } from "@src/types/app";
import Controllers from "@src/app/controllers";
import Validators from "@src/app/validators";

class GetUserByIdRoute implements IRoute {
  path: string;
  router;

  constructor(path: string) {
    this.path = path;
    this.router = Router();
    this.initRoute();
  }

  private initRoute(): void {
    this.router.route(`${this.path}:id`).get(
      (req: Request, res: Response, next: NextFunction) =>
        Validators.Id.run(req, res, next),
      (req: Request, res: Response) =>
        Controllers.UserControllers.GetUserById.execute(req, res)
    );
  }
}

export default GetUserByIdRoute;
