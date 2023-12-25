import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import Error500 from "@/assets/svg/500.svg";

const NotNetwork = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate("/");
	};
	return (
		<div className="notfound-card">
			<img src={Error500} alt="" />
			<Button type="primary" onClick={goHome}>
				回到首页
			</Button>
		</div>
	);
};

export default NotNetwork;
