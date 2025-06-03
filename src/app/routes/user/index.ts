import CreateUserRoute from "@src/app/routes/user/route-user-create";
import SignInUserRoute from "./route-user-login";

const PATH = "/user/";

const CreateUser = new CreateUserRoute(PATH);
const SignInUser = new SignInUserRoute(PATH);

const UserRoutes = {
  CreateUser,
  SignInUser,
};

export default UserRoutes;
