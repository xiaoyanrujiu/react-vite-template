/**
 * @description 路由守卫组件
 * @param {Element} children 需要添加权限访问的组件
 * @returns element
 */
const AuthRouter = (props: { children: JSX.Element }) => {
	return props.children;
};

export default AuthRouter;
