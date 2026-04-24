import BaseService from "@src/database/system/base-service";
import { Vendor } from "@src/generated/prisma";

class GetAllVendorsService extends BaseService {
  protected async transaction(): Promise<Vendor[]> {
    const result = await this.database.vendor.findMany({
      select: {
        vendor_id: true,
        email: true,
        fullname: true,
        status: true,
        createdAt: true,
        // excluding password and salt
        password: false,
        salt: false,
      }
    });

    return result as unknown as Vendor[];
  }
}

export default GetAllVendorsService;
