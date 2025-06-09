import GetAllProductService from "@src/database/services/product/service-product-get-all";
import CreateProductService from "@src/database/services/product/service-product-create";
import UpdateProductService from "@src/database/services/product/service-product-update";
import DeleteProductService from "@src/database/services/product/service-product-delete";
import GetByIdProductService from "@src/database/services/product/service-product-delete";

const GetAll = new GetAllProductService();
const Create = new CreateProductService();
const Update = new UpdateProductService();
const Delete = new DeleteProductService();
const GetById = new GetByIdProductService();

const ProductServices = {
  GetAll,
  Create,
  Update,
  Delete,
  GetById,
};

export default ProductServices;
