import BaseService from "@src/database/system/base-service";
import { Vendor } from "@src/generated/prisma";

class GetVendorByIdService extends BaseService {
  protected async transaction(vendor_id: string): Promise<null | Vendor> {
    const result = await this.database.vendor.findUnique({
      where: { vendor_id },
      select: {
        vendor_id: true,
        email: true,
        fullname: true,
        status: true,
        createdAt: true,
        password: false,
        salt: false,
      }
    });

    if (!result) return null;

    return result as unknown as Vendor;
  }
}

export default GetVendorByIdService;
