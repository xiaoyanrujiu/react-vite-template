import { Navigate, useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

// 导入所有router
const metaRouters = import.meta.glob("./modules/*.tsx", { eager: true, import: "default" });

// 处理路由
const routerArray = Object.values(metaRouters).flat() as RouteObject[];

export const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/home" />
	},
	...routerArray,
	{
		path: "*",
		element: <Navigate to="/404" />
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
