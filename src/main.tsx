import ReactDOM from "react-dom/client";
import App from "./App";
import "@/styles/index.scss";
// import { autoRefresh } from "@/utils";

// if (import.meta.env.PROD && import.meta.env.MODE === "production") {
// 	autoRefresh(2000);
// }

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
