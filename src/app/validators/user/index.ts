import SignupValidator from "@src/app/validators/user/validator-user-signup";

const Signup = new SignupValidator();
const UserValidators = { Signup };

export default UserValidators;
