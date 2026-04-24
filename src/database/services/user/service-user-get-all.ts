import BaseService from "@src/database/system/base-service";
import { User } from "@src/generated/prisma";

class GetAllUsersService extends BaseService {
  protected async transaction(): Promise<User[]> {
    const result = await this.database.user.findMany({
      select: {
        user_id: true,
        email: true,
        fullname: true,
        status: true,
        createdAt: true,
        // excluding password and salt for security
        password: false,
        salt: false,
      }
    });

    return result as unknown as User[];
  }
}

export default GetAllUsersService;
