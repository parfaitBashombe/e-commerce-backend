import CreateVendorService from "@src/database/services/vendor/service-vendor-signup";
import GetOneVendorByEmailService from "@src/database/services/vendor/service-vendor-get-one-by-email";
import SigninVendorService from "@src/database/services/vendor/service-vendor-login";
import UpdateVendorService from "@src/database/services/vendor/service-vendor-update";
import GetAllVendorsService from "@src/database/services/vendor/service-vendor-get-all";
import GetVendorByIdService from "@src/database/services/vendor/service-vendor-get-by-id";
import DeleteVendorService from "@src/database/services/vendor/service-vendor-delete";

const CreateVendor = new CreateVendorService();
const GetVendorByEmail = new GetOneVendorByEmailService();
const SignInVendor = new SigninVendorService();
const UpdateVendor = new UpdateVendorService();
const GetAllVendors = new GetAllVendorsService();
const GetVendorById = new GetVendorByIdService();
const DeleteVendor = new DeleteVendorService();

const VendorServices = {
  CreateVendor,
  GetVendorByEmail,
  SignInVendor,
  UpdateVendor,
  GetAllVendors,
  GetVendorById,
  DeleteVendor,
};

export default VendorServices;
