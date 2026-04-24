import { Request, Response, Router } from "express";
import { IRoute } from "@src/types/app";
import Controllers from "@src/app/controllers";

class GetAllUsersRoute implements IRoute {
  path: string;
  router;

  constructor(path: string) {
    this.path = path;
    this.router = Router();
    this.initRoute();
  }

  private initRoute(): void {
    this.router.route(`${this.path}`).get(
      (req: Request, res: Response) =>
        Controllers.UserControllers.GetAllUsers.execute(req, res)
    );
  }
}

export default GetAllUsersRoute;
