import SignupUserValidator from "@src/app/validators/user/validator-user-signup";
import SignInUserValidator from "@src/app/validators/user/validator-user-signin";
import UpdateUserValidator from "@src/app/validators/user/validator-user-signin";

const Signup = new SignupUserValidator();
const SignIn = new SignInUserValidator();
const Update = new UpdateUserValidator();
const UserValidators = { Signup, SignIn };

export default UserValidators;
