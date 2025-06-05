import CreateUserController from "@src/app/controllers/user/controller-user-create";
import LogInUserController from "@src/app/controllers/user/controller-user-login";
import UpdateUserController from "@src/app/controllers/user/controller-user-update";

const CreateUser = new CreateUserController();
const SignIn = new LogInUserController();
const Update = new UpdateUserController();

const UserControllers = {
  CreateUser,
  SignIn,
  Update,
};

export default UserControllers;
