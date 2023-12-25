import { BrowserRouter } from "react-router-dom";
import Router from "@/routers";
import AuthRouter from "@/routers/utils/auth-router";
import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";

function App() {
	return (
		<BrowserRouter>
			<ConfigProvider locale={zhCN}>
				<AuthRouter>
					<Router />
				</AuthRouter>
			</ConfigProvider>
		</BrowserRouter>
	);
}

export default App;
