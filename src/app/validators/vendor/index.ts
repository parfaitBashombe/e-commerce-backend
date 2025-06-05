import SignupVendorValidator from "@src/app/validators/user/validator-user-signup";
import SignInVendorValidator from "@src/app/validators/user/validator-user-signin";
import UpdateVendorValidator from "@src/app/validators/user/validator-user-signin";

const Signup = new SignupVendorValidator();
const SignIn = new SignInVendorValidator();
const Update = new UpdateVendorValidator();
const VendorValidators = { Signup, SignIn, Update };

export default VendorValidators;
