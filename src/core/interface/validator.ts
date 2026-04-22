import { Response } from "express";

export interface ValidationError {
  validationError(res: Response, error: any): Response;
}
