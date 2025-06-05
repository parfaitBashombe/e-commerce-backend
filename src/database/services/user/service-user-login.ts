import BaseService from "@src/database/system/base-service";
import { User } from "@src/generated/prisma";
import { LogIn } from "@src/types/user";

import Services from "@src/database/services";

class SiginUserService extends BaseService {
  protected async transaction(data: LogIn): Promise<null | User> {
    const result = await Services.UserServices.GetUserByEmail.call(data.email);

    if (!result) return null;

    const isPassword = this.Password.compare(
      data.password,
      result.password,
      result.salt as string
    );

    if (!isPassword) return null;
    return result;
  }
}

export default SiginUserService;
