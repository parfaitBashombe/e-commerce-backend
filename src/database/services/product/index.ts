import GetAllProductService from "@src/database/services/product/service-product-get-all";

const GetAll = new GetAllProductService();

const ProductServices = {
  GetAll,
};

export default ProductServices;
