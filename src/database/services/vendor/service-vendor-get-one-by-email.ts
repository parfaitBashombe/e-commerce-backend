import BaseService from "@src/database/system/base-service";
import { Vendor } from "@src/generated/prisma";

class GetOneVendorByEmailService extends BaseService {
  protected async transaction(email: string): Promise<null | Vendor> {
    const result = await this.database.vendor.findUnique({
      where: { email },
    });

    if (!result) return null;

    return result;
  }
}

export default GetOneVendorByEmailService;
