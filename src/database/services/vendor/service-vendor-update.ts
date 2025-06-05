import BaseService from "@src/database/system/base-service";
import { Vendor } from "@src/generated/prisma";

class UpdateVendorService extends BaseService {
  protected async transaction(data: Vendor): Promise<null | Vendor> {
    const salt = this.Password.salt();
    const password = this.Password.hash(data.password, salt);

    const result = await this.database.vendor.update({
      where: { vendor_id: data.vendor_id },
      data: { email: data.email, fullname: data.fullname, salt, password },
    });

    if (!result) return null;
    return result;
  }
}

export default UpdateVendorService;
