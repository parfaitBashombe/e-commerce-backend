import CreateUserRoute from "@src/app/routes/user/route-user-create";
import SignInUserRoute from "./route-user-login";
import UpdateUserRoute from "./route-user-update";

const PATH = "/user/";

const CreateUser = new CreateUserRoute(PATH);
const SignInUser = new SignInUserRoute(PATH);
const UpdateUser = new UpdateUserRoute(PATH);

const UserRoutes = {
  CreateUser,
  SignInUser,
  UpdateUser,
};

export default UserRoutes;
