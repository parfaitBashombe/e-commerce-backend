import GetAllProductsController from "@src/app/controllers/product/controller-product-get-all";
import CreateProductController from "@src/app/controllers/product/controller-product-create";
import UpdateProductController from "@src/app/controllers/product/controller-product-update";
import DeleteProductController from "@src/app/controllers/product/controller-product-delete";

const GetAll = new GetAllProductsController();
const CreateProduct = new CreateProductController();
const UpdateProduct = new UpdateProductController();
const DeleteProduct = new DeleteProductController();

const ProductControllers = {
  GetAll,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
};

export default ProductControllers;
