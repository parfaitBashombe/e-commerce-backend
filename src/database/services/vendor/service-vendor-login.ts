import BaseService from "@src/database/system/base-service";
import { Vendor } from "@src/generated/prisma";
import { LogIn } from "@src/types/vendor";

import Services from "@src/database/services";

class SiginVendorService extends BaseService {
  protected async transaction(data: LogIn): Promise<null | Vendor> {
    const result = await Services.VendorServices.GetVendorByEmail.call(
      data.email
    );

    if (!result) return null;

    const isPassword = this.Password.compare(
      data.password,
      result.password,
      result.salt as string
    );

    if (!isPassword) return null;
    return result;
  }
}

export default SiginVendorService;
