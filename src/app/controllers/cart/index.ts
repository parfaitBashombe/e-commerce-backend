import CreateCartController from "./controller-cart-create";
import GetCartController from "./controller-cart-get";
import AddCartItemController from "./controller-cart-add-item";
import UpdateCartItemController from "./controller-cart-update-item";
import DeleteCartItemController from "./controller-cart-delete-item";

const Create = new CreateCartController();
const Get = new GetCartController();
const AddItem = new AddCartItemController();
const UpdateItem = new UpdateCartItemController();
const DeleteItem = new DeleteCartItemController();

const CartControllers = {
  Create,
  Get,
  AddItem,
  UpdateItem,
  DeleteItem,
};

export default CartControllers;
