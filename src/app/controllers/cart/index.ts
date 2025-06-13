import CreateProductController from "@src/app/controllers/product/controller-product-create";
import CreateCartController from "@src/app/controllers/cart/controller-cart-create";

const Create = new CreateCartController();

const CartControllers = {
  Create,
};

export default CartControllers;
