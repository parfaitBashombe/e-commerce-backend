import * as dotenv from "dotenv";
import { PORT } from "@src/core/utils/contants";

dotenv.config();

const normalizePort = (val: string): number | boolean => {
  const port: number = parseInt(val, 10);
  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(process.env.PORT || PORT);

export default port;
