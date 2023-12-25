import { lazy } from "react";
import lazyLoad from "@/routers/utils/lazy-load";

/**
 * @description: 首页
 */
const ChatRouter = [
	{
		path: "/home",
		element: lazyLoad(lazy(() => import("@/views/home")))
	}
];

export default ChatRouter;
