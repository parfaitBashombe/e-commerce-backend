import BaseService from "@src/database/system/base-service";
import { Vendor } from "@src/generated/prisma";
import { Signup } from "@src/types/vendor";

class CreateVendorService extends BaseService {
  protected async transaction(data: Signup): Promise<null | Vendor> {
    const salt = this.Password.salt();
    const password = this.Password.hash(data.password, salt);

    const result = await this.database.vendor.create({
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

export default CreateVendorService;
