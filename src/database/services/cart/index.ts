import CreateCartService from "@src/database/services/cart/service-cart-create";
import GetCartByUserIdService from "@src/database/services/cart/service-get-cart-by-user-id";

const Create = new CreateCartService();
const GetById = new GetCartByUserIdService();

const CartServices = {
  Create,
  GetById,
};

export default CartServices;
