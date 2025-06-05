import CreateVendorRoute from "@src/app/routes/vendor/route-vendor-create";
import SignInVendorRoute from "@src/app/routes/vendor/route-vendor-login";
import UpdateVendorRoute from "@src/app/routes/vendor/route-vendor-update";

const PATH = "/vendor/";

const CreateVendor = new CreateVendorRoute(PATH);
const SignInVendor = new SignInVendorRoute(PATH);
const UpdateVendor = new UpdateVendorRoute(PATH);

const VendorRoutes = {
  CreateVendor,
  SignInVendor,
  UpdateVendor,
};

export default VendorRoutes;
