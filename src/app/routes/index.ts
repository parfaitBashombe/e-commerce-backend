import { IRoute } from "@src/types/app";
import ProductRoutes from "@src/app/routes/product";
import UserRoutes from "@src/app/routes/user";

const routes: IRoute[] = [
  ...Object.values({ ...ProductRoutes, ...UserRoutes }),
];

export default routes;
