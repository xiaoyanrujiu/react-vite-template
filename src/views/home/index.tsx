import { userStore } from "@/store";

/**
 * @description: 首页
 */
const HomePage = () => {
	const { count, increment, decrement } = userStore();

	return (
		<div>
			<h1>首页</h1>
			<h2>{count}</h2>
			<button onClick={increment}>加一</button>
			<button onClick={decrement}>减一</button>
		</div>
	);
};

export default HomePage;
