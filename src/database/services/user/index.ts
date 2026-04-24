import CreateUserService from "@src/database/services/user/service-user-signup";
import GetOneUserByEmailService from "@src/database/services/user/service-user-get-one-by-email";
import SiginUserService from "@src/database/services/user/service-user-login";
import UpdateUserService from "@src/database/services/user/service-user-update";
import GetAllUsersService from "@src/database/services/user/service-user-get-all";
import GetUserByIdService from "@src/database/services/user/service-user-get-by-id";
import DeleteUserService from "@src/database/services/user/service-user-delete";

const CreateUser = new CreateUserService();
const GetUserByEmail = new GetOneUserByEmailService();
const SignInUser = new SiginUserService();
const UpdateUser = new UpdateUserService();
const GetAllUsers = new GetAllUsersService();
const GetUserById = new GetUserByIdService();
const DeleteUser = new DeleteUserService();

const UserServices = {
  CreateUser,
  GetUserByEmail,
  SignInUser,
  UpdateUser,
  GetAllUsers,
  GetUserById,
  DeleteUser,
};

export default UserServices;
