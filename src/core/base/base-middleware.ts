import { NextFunction, Request, Response } from "express";
import { z, ZodSchema, ZodError } from "zod";

import Base from "@src/core/base/base";
import { ValidationError } from "../interface/validator";

abstract class BaseMiddleWare extends Base implements ValidationError {
  protected zod = z;

  protected bodyHandler(
    req: Request,
    res: Response,
    next: NextFunction,
    schema: ZodSchema
  ): Response | void {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return this.validationError(res, result.error);
    }
    req.body = result.data;
    return next();
  }

  protected paramHandler(
    req: Request,
    res: Response,
    next: NextFunction,
    schema: ZodSchema
  ): Response | void {
    const result = schema.safeParse(req.params);

    if (!result.success) {
      return this.validationError(res, result.error);
    }
    req.params = result.data as any;
    return next();
  }

  protected queryHandler(
    req: Request,
    res: Response,
    next: NextFunction,
    schema: ZodSchema
  ): Response | void {
    const result = schema.safeParse(req.query);

    if (!result.success) {
      return this.validationError(res, result.error);
    }
    req.query = result.data as any;
    return next();
  }

  validationError(res: Response, error: any): Response {
    if (error instanceof ZodError) {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        "Validation Error",
        error.flatten()
      );
    }
    
    // Fallback for non-Zod errors
    const fallbackMessage = error?.details?.[0]?.message || "Validation Error";
    return this.responseHandler(
      res,
      this.BAD_REQUEST_CODE,
      fallbackMessage.replace(/[^a-zA-Z0-9 ._-]/g, "")
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
