import BaseService from "@src/database/system/base-service";
import { User } from "@src/generated/prisma";

class GetUserByIdService extends BaseService {
  protected async transaction(user_id: string): Promise<null | User> {
    const result = await this.database.user.findUnique({
      where: { user_id },
      select: {
        user_id: true,
        email: true,
        fullname: true,
        status: true,
        createdAt: true,
        password: false,
        salt: false,
      }
    });

    if (!result) return null;

    return result as unknown as User;
  }
}

export default GetUserByIdService;
