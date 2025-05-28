import express, { Response, Request, Application } from "express";
import morgan from "morgan";

import Base from "@src/core/base/base";
import { IRoute } from "@src/types/app";

class App extends Base {
  private app: Application;

  constructor(routes: IRoute[]) {
    super();
    this.app = express();
    this.initMiddlewares();
    this.initRoutes(routes);
    this.initDefaultRoute();
  }

  private initMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    this.app.use(morgan("combined", { stream: this.Utils.httpLogStream }));
  }

  private initRoutes(routes: IRoute[]): void {
    routes.forEach(route => {
      this.app.use("/api", route.router);
    });
  }

  private initDefaultRoute(): void {
    this.app.get("/", (req: Request, res: Response) => {
      this.responseHandler(res, this.SUCCESS_CODE, this.WELCOME_MSG);
      return;
    });

    this.app.all("/", (req: Request, res: Response) => {
      this.responseHandler(res, this.BAD_REQUEST_CODE, this.INVALID_METHOD_MSG);
      return;
    });

    this.app.use("*", (req: Request, res: Response) => {
      this.responseHandler(res, this.NOT_FOUND_CODE, this.INVALID_ROUTE_MSG);
    });
    return;
  }

  public listen(): void {
    this.app.listen(this.Utils.port, () => {
      this.Utils.logger.info(this.listening(this.Utils.port));
    });
  }
}

export default App;
