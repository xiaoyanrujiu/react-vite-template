import { Modal, Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

let lastSrcs: string[] = []; // 上一次获取到的script地址
const scriptReg = /<script.*?src=["'](?<src>[^"']+)/gm;

// 获取当前页面中最新的 script 链接
async function extractNewScripts() {
	const html = await fetch("/?_timestap=" + Date.now()).then(res => res.text());
	console.log("html", html);
	scriptReg.lastIndex = 0;
	let result: string[] = [];
	let match: RegExpExecArray | null;
	while ((match = scriptReg.exec(html))) {
		result.push(match.groups!.src);
	}
	return result;
}

async function needUpdate() {
	const newScripts = await extractNewScripts();
	console.log("newScripts", newScripts);

	if (lastSrcs.length === 0) {
		lastSrcs = newScripts;
		return false;
	}

	let result = false;
	if (lastSrcs.length !== newScripts.length) {
		result = true;
	}

	for (let i = 0; i < lastSrcs.length; i++) {
		if (lastSrcs[i] !== newScripts[i]) {
			result = true;
			break;
		}
	}
	lastSrcs = newScripts;

	console.log("lastSrcs", lastSrcs);

	return result;
}

export const autoRefresh = (duration: number) => {
	setTimeout(async () => {
		const willUpdate = await needUpdate();
		console.log("willUpdate", willUpdate);

		if (willUpdate) {
			Modal.confirm({
				title: "温馨提示 🧡",
				icon: <ExclamationCircleOutlined />,
				content: "页面已更新，刷新后生效",
				footer: () => {
					return (
						<Button
							type="primary"
							onClick={() => {
								location.reload();
							}}
						>
							刷新
						</Button>
					);
				}
			});
		} else {
			autoRefresh(duration);
		}
	}, duration);
};
