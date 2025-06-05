import VendorAuthentication from "@src/app/middlewares/vendor/authentication";
import CheckEmailExists from "@src/app/middlewares/user/middleware-check-email-exists";

const CheckEmail = new CheckEmailExists();
const VendorAuth = new VendorAuthentication();

const VendorMiddleWares = { CheckEmail, VendorAuth };

export default VendorMiddleWares;
