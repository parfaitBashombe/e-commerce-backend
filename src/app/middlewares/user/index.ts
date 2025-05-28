import UserAuthentication from "@src/app/middlewares/user/authentication";
import CheckEmailExists from "@src/app/middlewares/user/middleware-check-email-exists";

const CheckEmail = new CheckEmailExists();
const UserAuth = new UserAuthentication();

const UserMiddleWares = { CheckEmail, UserAuth };

export default UserMiddleWares;
