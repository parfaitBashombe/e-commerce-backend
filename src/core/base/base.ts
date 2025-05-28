import { Response } from "express";
import Util from "@src/core/utils";
import Services from "@src/database/services";

class Base {
  protected Utils;
  protected Service = Services;

  constructor() {
    this.Utils = Util;
    // this.Service = Services;
  }

  protected readonly SERVER_ERROR_CODE = 500;
  protected readonly NOT_FOUND_CODE = 404;
  protected readonly SUCCESS_CODE = 200;
  protected readonly CREATED_CODE = 201;
  protected readonly BAD_REQUEST_CODE = 400;
  protected readonly UNAUTHORIZED_CODE = 401;
  protected readonly CONFLICT_CODE = 409;

  protected readonly SERVER_ERROR_MSG = "server error";
  protected readonly NOT_FOUND_MSG = "not found";
  protected readonly SUCCESS_MSG = "success";
  protected readonly CREATED_MSG = "created succefully";
  protected readonly BAD_REQUEST_MSG = "bad request";
  protected readonly UNAUTHORIZED_MSG = "unauthorized";
  protected readonly CONFLICT_MSG = "conflict";
  protected readonly WELCOME_MSG = "welcome to the API";
  protected readonly INVALID_ROUTE_MSG = "invalid route";
  protected readonly INVALID_METHOD_MSG = "invalid method";
  protected readonly ALREAD_EXISTS_MSG = "already exists";

  protected listening(port: number | boolean): string {
    return `App listening on port ${port}`;
  }

  protected welcome(req: Request, res: Response) {
    return this.responseHandler(res, this.SUCCESS_CODE, this.WELCOME_MSG);
  }

  protected responseHandler(
    res: Response,
    httpCode: number,
    message: string,
    data?: any
  ): Response {
    return res.status(httpCode).json({
      status: httpCode,
      message,
      data,
    });
  }
}

export default Base;
