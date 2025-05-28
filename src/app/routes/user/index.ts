import CreateUserRoute from "@src/app/routes/user/route-user-create";

const PATH = "/user/";

const CreateUser = new CreateUserRoute(PATH);

const UserRoutes = {
  CreateUser,
};

export default UserRoutes;
