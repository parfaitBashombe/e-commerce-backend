import CreateUserController from "@src/app/controllers/user/controller-user-create";
import LogInUserController from "@src/app/controllers/user/controller-user-login";

const CreateUser = new CreateUserController();
const SignIn = new LogInUserController();

const UserControllers = {
  CreateUser,
  SignIn,
};

export default UserControllers;
