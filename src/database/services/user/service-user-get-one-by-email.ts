import BaseService from "@src/database/system/base-service";
import { User } from "@src/generated/prisma";

class GetOneUserByEmailService extends BaseService {
  protected async transaction(email: string): Promise<null | User> {
    const result = await this.database.user.findUnique({
      where: { email },
    });

    if (!result) return null;

    return result;
  }
}

export default GetOneUserByEmailService;
