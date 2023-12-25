import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import Error403 from "@/assets/svg/403.svg";

const NotAuth = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate("/");
	};
	return (
		<div className="notfound-card">
			<img src={Error403} alt="" />
			<Button type="primary" onClick={goHome}>
				回到首页
			</Button>
		</div>
	);
};

export default NotAuth;
