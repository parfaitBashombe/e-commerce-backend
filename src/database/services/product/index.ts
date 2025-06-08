import GetAllProductService from "@src/database/services/product/service-product-get-all";
import CreateProductService from "@src/database/services/product/service-product-create";
import UpdateProductService from "@src/database/services/product/service-product-update";

const GetAll = new GetAllProductService();
const Create = new CreateProductService();
const Update = new UpdateProductService();

const ProductServices = {
  GetAll,
  Create,
  Update,
};

export default ProductServices;
