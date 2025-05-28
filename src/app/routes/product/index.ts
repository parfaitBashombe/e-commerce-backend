import GetAllProductsRoute from "@src/app/routes/product/route-product-get-all";

const PATH = "/product";

const GetAllProducts = new GetAllProductsRoute(PATH);

const ProductRoutes = {
  GetAllProducts,
};

export default ProductRoutes;
