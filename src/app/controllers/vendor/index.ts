import CreatevendorController from "@src/app/controllers/vendor/controller-vendor-create";
import LogInVendorController from "@src/app/controllers/vendor/controller-vendor-login";
import UpdateVendorController from "@src/app/controllers/vendor/controller-vendor-update";

const CreateVendor = new CreatevendorController();
const SignIn = new LogInVendorController();
const Update = new UpdateVendorController();

const VendorControllers = {
  CreateVendor,
  SignIn,
  Update,
};

export default VendorControllers;
