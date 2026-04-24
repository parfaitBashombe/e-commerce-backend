import ProductValidators from "@src/app/validators/product";
import UserValidators from "@src/app/validators/user";
import VendorValidators from "./vendor";
import CartValidators from "./cart";
import IdValidator from "./validator-id";

const Id = new IdValidator();

const Validators = { ProductValidators, UserValidators, VendorValidators, CartValidators, Id };

export default Validators;
