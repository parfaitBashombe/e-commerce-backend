import CreateUserService from "@src/database/services/user/service-user-signup";
import GetOneUserByEmailService from "./service-user-get-one-by-email";

const CreateUser = new CreateUserService();
const GetUserByEmail = new GetOneUserByEmailService();

const UserServices = {
  CreateUser,
  GetUserByEmail,
};

export default UserServices;
