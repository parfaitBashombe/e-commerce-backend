import { AddProductToCartService } from "./service-cart-items-add";
import UpdateCartItemService from "./service-cart-item-update";
import DeleteCartItemService from "./service-cart-item-delete";

const AddCartItem = new AddProductToCartService();
const UpdateCartItem = new UpdateCartItemService();
const DeleteCartItem = new DeleteCartItemService();

const CartItemServices = {
  AddCartItem,
  UpdateCartItem,
  DeleteCartItem,
};

export default CartItemServices;
