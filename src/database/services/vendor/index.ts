import CreateVendorService from "@src/database/services/vendor/service-vendor-signup";
import GetOneVendorByEmailService from "@src/database/services/vendor/service-vendor-get-one-by-email";
import SigninVendorService from "@src/database/services/vendor/service-vendor-login";
import UpdateVendorService from "@src/database/services/vendor/service-vendor-update";

const CreateVendor = new CreateVendorService();
const GetVendorByEmail = new GetOneVendorByEmailService();
const SignInVendor = new SigninVendorService();
const UpdateVendor = new UpdateVendorService();

const VendorServices = {
  CreateVendor,
  GetVendorByEmail,
  SignInVendor,
  UpdateVendor,
};

export default VendorServices;
