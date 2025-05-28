import { Response } from "express";

export interface JoiError {
  joiError(res: Response, error: any): Response;
}
