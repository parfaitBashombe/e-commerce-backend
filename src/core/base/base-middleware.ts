import { NextFunction, Request, Response } from "express";
import joi, { Schema } from "joi";

import Base from "@src/core/base/base";
import { JoiError } from "../interface/validator";

abstract class BaseMiddleWare extends Base implements JoiError {
  protected joi = joi;
  private options: any = { language: { key: "{{key}}" } };

  protected bodyHandler(
    req: Request,
    res: Response,
    next: NextFunction,
    schema: Schema
  ): Response | void {
    const { error } = schema.validate(req.body, this.options);

    if (error) {
      return this.joiError(res, error);
    }
    return next();
  }

  protected paramHandler(
    req: Request,
    res: Response,
    next: NextFunction,
    schema: Schema
  ): Response | void {
    const { error } = schema.validate(req.params, this.options);

    if (error) {
      return this.joiError(res, error);
    }
    return next();
  }

  protected queryHandler(
    req: Request,
    res: Response,
    next: NextFunction,
    schema: Schema
  ): Response | void {
    const { error } = schema.validate(req.query, this.options);

    if (error) {
      return this.joiError(res, error);
    }
    return next();
  }

  joiError(res: Response, error: any): Response {
    return this.responseHandler(
      res,
      this.BAD_REQUEST_CODE,
      error.details[0].message.replace(/[^a-zA-Z0-9 ]/g, "")
    );
  }

  protected abstract middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): void;

  public async run(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | any> {
    try {
      await this.middleware(req, res, next);
    } catch (error) {
      return this.responseHandler(
        res,
        this.SERVER_ERROR_CODE,
        this.SERVER_ERROR_MSG
      );
    }
  }
}

export default BaseMiddleWare;
