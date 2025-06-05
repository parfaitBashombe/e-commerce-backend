import CreateUserRoute from "@src/app/routes/user/route-user-create";
import SignInUserRoute from "@src/app/routes/user/route-user-login";
import UpdateUserRoute from "@src/app/routes/user/route-user-update";

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
