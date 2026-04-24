import BaseService from "@src/database/system/base-service";
import { User } from "@src/generated/prisma";

class DeleteUserService extends BaseService {
  protected async transaction(user_id: string): Promise<User> {
    const result = await this.database.user.delete({
      where: { user_id },
    });

    return result;
  }
}

export default DeleteUserService;
