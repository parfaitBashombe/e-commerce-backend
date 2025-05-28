import BaseService from "@src/database/system/base-service";
import { User } from "@src/generated/prisma";
import { Signup } from "@src/types/user";

class CreateUserService extends BaseService {
  protected async transaction(data: Signup): Promise<null | User> {
    const salt = this.Password.salt();
    const password = this.Password.hash(data.password, salt);

    const result = await this.database.user.create({
      data: {
        ...data,
        password,
        salt,
      },
    });

    if (!result) return null;
    return result;
  }
}

export default CreateUserService;
