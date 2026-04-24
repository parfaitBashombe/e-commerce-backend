import CreateUserController from "@src/app/controllers/user/controller-user-create";
import LogInUserController from "@src/app/controllers/user/controller-user-login";
import UpdateUserController from "@src/app/controllers/user/controller-user-update";
import GetAllUsersController from "@src/app/controllers/user/controller-user-get-all";
import GetUserByIdController from "@src/app/controllers/user/controller-user-get-by-id";
import DeleteUserController from "@src/app/controllers/user/controller-user-delete";

const CreateUser = new CreateUserController();
const SignIn = new LogInUserController();
const Update = new UpdateUserController();
const GetAllUsers = new GetAllUsersController();
const GetUserById = new GetUserByIdController();
const DeleteUser = new DeleteUserController();

const UserControllers = {
  CreateUser,
  SignIn,
  Update,
  GetAllUsers,
  GetUserById,
  DeleteUser,
};

export default UserControllers;
