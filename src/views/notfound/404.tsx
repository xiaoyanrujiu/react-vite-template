import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import Error404 from "@/assets/svg/404.svg";

const NotFound = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate("/");
	};
	return (
		<div className="notfound-card">
			<img src={Error404} alt="" />
			<Button type="primary" onClick={goHome}>
				回到首页
			</Button>
		</div>
	);
};

export default NotFound;
