import CreateVendorRoute from "@src/app/routes/vendor/route-vendor-create";
import SignInVendorRoute from "@src/app/routes/vendor/route-vendor-login";
import UpdateVendorRoute from "@src/app/routes/vendor/route-vendor-update";
import GetAllVendorsRoute from "@src/app/routes/vendor/route-vendor-get-all";
import GetVendorByIdRoute from "@src/app/routes/vendor/route-vendor-get-by-id";
import DeleteVendorRoute from "@src/app/routes/vendor/route-vendor-delete";

const PATH = "/vendor/";

const CreateVendor = new CreateVendorRoute(PATH);
const SignInVendor = new SignInVendorRoute(PATH);
const UpdateVendor = new UpdateVendorRoute(PATH);
const GetAllVendors = new GetAllVendorsRoute(PATH);
const GetVendorById = new GetVendorByIdRoute(PATH);
const DeleteVendor = new DeleteVendorRoute(PATH);

const VendorRoutes = {
  CreateVendor,
  SignInVendor,
  UpdateVendor,
  GetAllVendors,
  GetVendorById,
  DeleteVendor,
};

export default VendorRoutes;
