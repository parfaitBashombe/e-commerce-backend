import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request } from "express";

dotenv.config();

const { JWT_SECRET_KEY } = process.env;

export default class TokenUtils {
  protected secret_key = JWT_SECRET_KEY;

  generate(payload: any): string | null {
    let isValidPayload = true;
    if (typeof payload === "number") {
      isValidPayload = false;
    } else if (payload === null) {
      isValidPayload = false;
    } else if (typeof payload === "object" && !Object.keys(payload).length) {
      isValidPayload = false;
    }

    return isValidPayload
      ? jwt.sign({ payload }, this.secret_key as string, { expiresIn: "1d" })
      : null;
  }

  decode(token: string) {
    try {
      return jwt.verify(token, this.secret_key as string);
    } catch (error) {
      return null;
    }
  }

  extract(req: Request): string {
    const { authorization = "" } = req.headers;

    const token: string = authorization.slice(7);
    return token;
  }
}
