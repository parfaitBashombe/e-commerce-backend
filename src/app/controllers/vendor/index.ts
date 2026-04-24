import CreatevendorController from "@src/app/controllers/vendor/controller-vendor-create";
import LogInVendorController from "@src/app/controllers/vendor/controller-vendor-login";
import UpdateVendorController from "@src/app/controllers/vendor/controller-vendor-update";
import GetAllVendorsController from "@src/app/controllers/vendor/controller-vendor-get-all";
import GetVendorByIdController from "@src/app/controllers/vendor/controller-vendor-get-by-id";
import DeleteVendorController from "@src/app/controllers/vendor/controller-vendor-delete";

const CreateVendor = new CreatevendorController();
const SignIn = new LogInVendorController();
const Update = new UpdateVendorController();
const GetAllVendors = new GetAllVendorsController();
const GetVendorById = new GetVendorByIdController();
const DeleteVendor = new DeleteVendorController();

const VendorControllers = {
  CreateVendor,
  SignIn,
  Update,
  GetAllVendors,
  GetVendorById,
  DeleteVendor,
};

export default VendorControllers;
