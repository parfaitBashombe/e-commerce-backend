import GetAllProductsController from "@src/app/controllers/product/controller-product-get-all";
import CreateProductController from "@src/app/controllers/product/controller-product-create";
import UpdateProductController from "@src/app/controllers/product/controller-product-update";

const GetAll = new GetAllProductsController();
const CreateProduct = new CreateProductController();
const UpdateProduct = new UpdateProductController();

const ProductControllers = {
  GetAll,
  CreateProduct,
  UpdateProduct,
};

export default ProductControllers;
