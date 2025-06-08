import GetAllProductsRoute from "@src/app/routes/product/route-product-get-all";
import CreateProductRoute from "@src/app/routes/product/route-product-create";
import UpdateProductRoute from "@src/app/routes/product/route-product-update";

const PATH = "/product/";

const GetAllProducts = new GetAllProductsRoute(PATH);
const CreateProduct = new CreateProductRoute(PATH);
const UpdateProduct = new UpdateProductRoute(PATH);

const ProductRoutes = {
  GetAllProducts,
  CreateProduct,
  UpdateProduct,
};

export default ProductRoutes;
