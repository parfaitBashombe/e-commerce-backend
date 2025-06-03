import BaseService from "@src/database/system/base-service";
import { User } from "@src/generated/prisma";
import { Signup } from "@src/types/user";

class UpdateUserService extends BaseService {
  protected async transaction(data: User): Promise<null | User> {
    const salt = this.Password.salt();
    const password = this.Password.hash(data.password, salt);

    const result = await this.database.user.update({
      where: { email: data.email },
      data: data,
    });

    if (!result) return null;
    return result;
  }
}

export default UpdateUserService;
