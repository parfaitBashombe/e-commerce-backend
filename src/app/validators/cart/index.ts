import AddCartItemValidator from "./validator-cart-add-item";
import UpdateCartItemValidator from "./validator-cart-update-item";

const AddItem = new AddCartItemValidator();
const UpdateItem = new UpdateCartItemValidator();

const CartValidators = {
  AddItem,
  UpdateItem,
};

export default CartValidators;
