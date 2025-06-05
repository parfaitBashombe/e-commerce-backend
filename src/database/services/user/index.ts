import CreateUserService from "@src/database/services/user/service-user-signup";
import GetOneUserByEmailService from "@src/database/services/user/service-user-get-one-by-email";
import SiginUserService from "@src/database/services/user/service-user-login";
import UpdateUserService from "@src/database/services/user/service-user-update";

const CreateUser = new CreateUserService();
const GetUserByEmail = new GetOneUserByEmailService();
const SignInUser = new SiginUserService();
const UpdateUser = new UpdateUserService();

const UserServices = {
  CreateUser,
  GetUserByEmail,
  SignInUser,
  UpdateUser,
};

export default UserServices;
