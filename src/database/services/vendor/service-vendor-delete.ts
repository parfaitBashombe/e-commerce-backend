import BaseService from "@src/database/system/base-service";
import { Vendor } from "@src/generated/prisma";

class DeleteVendorService extends BaseService {
  protected async transaction(vendor_id: string): Promise<Vendor> {
    const result = await this.database.vendor.delete({
      where: { vendor_id },
    });

    return result;
  }
}

export default DeleteVendorService;
