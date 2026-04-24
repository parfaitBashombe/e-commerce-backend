import CreateUserRoute from "@src/app/routes/user/route-user-create";
import SignInUserRoute from "@src/app/routes/user/route-user-login";
import UpdateUserRoute from "@src/app/routes/user/route-user-update";
import GetAllUsersRoute from "@src/app/routes/user/route-user-get-all";
import GetUserByIdRoute from "@src/app/routes/user/route-user-get-by-id";
import DeleteUserRoute from "@src/app/routes/user/route-user-delete";

const PATH = "/user/";

const CreateUser = new CreateUserRoute(PATH);
const SignInUser = new SignInUserRoute(PATH);
const UpdateUser = new UpdateUserRoute(PATH);
const GetAllUsers = new GetAllUsersRoute(PATH);
const GetUserById = new GetUserByIdRoute(PATH);
const DeleteUser = new DeleteUserRoute(PATH);

const UserRoutes = {
  CreateUser,
  SignInUser,
  UpdateUser,
  GetAllUsers,
  GetUserById,
  DeleteUser,
};

export default UserRoutes;
