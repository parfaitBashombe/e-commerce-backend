import { IRoute } from "@src/types/app";
import ProductRoutes from "@src/app/routes/product";
import UserRoutes from "@src/app/routes/user";
import VendorRoutes from "@src/app/routes/vendor";
import CartRoutes from "@src/app/routes/cart";

const routes: IRoute[] = [
  ...Object.values({ ...ProductRoutes, ...UserRoutes, ...VendorRoutes, ...CartRoutes }),
];

export default routes;
