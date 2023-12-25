import { lazy } from "react";
import lazyLoad from "../utils/lazy-load";

/**
 * @description: 错误页面
 */
const notfoundRouter = [
	{
		path: "403",
		element: lazyLoad(lazy(() => import("@/views/notfound/403"))),
		meta: {
			requiresAuth: false,
			title: "403页面",
			key: "403"
		}
	},
	{
		path: "404",
		element: lazyLoad(lazy(() => import("@/views/notfound/404"))),
		meta: {
			requiresAuth: false,
			title: "404页面",
			key: "404"
		}
	},
	{
		path: "500",
		element: lazyLoad(lazy(() => import("@/views/notfound/500"))),
		meta: {
			requiresAuth: false,
			title: "500页面",
			key: "500"
		}
	}
];

export default notfoundRouter;
