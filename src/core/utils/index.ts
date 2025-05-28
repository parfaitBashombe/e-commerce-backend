import PasswordUtils from "@src/core/utils/password-utils";
import omitProperty from "@src/core/utils/omit-property";
import TokenUtils from "@src/core/utils/token";
import port from "@src/core/utils/port";
import logger, { httpLogStream } from "@src/core/utils/logger";

const Password = new PasswordUtils();
const Token = new TokenUtils();

const Util = {
  port,
  omitProperty,
  Password,
  Token,
  logger,
  httpLogStream,
};

export default Util;
