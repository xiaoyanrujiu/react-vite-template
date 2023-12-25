import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse, AxiosRequestConfig } from "axios";
import { message, Modal, Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const getToken = () => "";

interface ResponseParams<T> {
	code: number;
	msg: string;
	data: T;
}

class RequestHttp {
	service: AxiosInstance;
	constructor(config: AxiosRequestConfig) {
		this.service = axios.create(config);
		this.init();
	}

	private errorTimeout: NodeJS.Timeout | null = null;

	private handleError(msg: string, code: number) {
		if (this.errorTimeout) {
			clearTimeout(this.errorTimeout);
		}

		this.errorTimeout = setTimeout(() => {
			if (code === 401) {
				Modal.confirm({
					title: "温馨提示 🧡",
					icon: <ExclamationCircleOutlined />,
					content: "登录信息已过期，请重新登录",
					footer: () => {
						return (
							<Button
								type="primary"
								onClick={() => {
									localStorage.clear();
									window.location.href = "/login";
								}}
							>
								重新登录
							</Button>
						);
					}
				});
			} else {
				message.error(msg ?? "服务器错误，请稍后重试");
			}
			this.errorTimeout = null;
		}, 200);
	}

	private init() {
		this.service.interceptors.request.use(
			(config: InternalAxiosRequestConfig) => {
				const token = getToken();
				if (token) {
					config.headers["Authorization"] = token;
				}
				return config;
			},
			(error: AxiosError) => {
				return Promise.reject(error);
			}
		);

		this.service.interceptors.response.use(
			(response: AxiosResponse) => {
				const { data } = response;
				if (data.code && data.code !== 200) {
					this.handleError(data.msg, data.code);
					return Promise.reject(data.msg);
				}
				return data;
			},
			async (error: AxiosError<ResponseParams<null>>) => {
				const response = error.response;
				if (response?.status) {
					this.handleError(response.data.msg, response.data.code);
				}
				return Promise.reject(error);
			}
		);
	}

	// * 常用请求方法封装
	get<T>(url: string, params?: any, _object: AxiosRequestConfig = {}): Promise<ResponseParams<T>> {
		return this.service.get(url, { params, ..._object });
	}

	post<T>(url: string, params?: any, _object: AxiosRequestConfig = {}): Promise<ResponseParams<T>> {
		return this.service.post(url, params, _object);
	}

	put<T>(url: string, params?: any, _object: AxiosRequestConfig = {}): Promise<ResponseParams<T>> {
		return this.service.put(url, params, _object);
	}

	delete<T>(url: string, params?: any, _object: AxiosRequestConfig = {}): Promise<ResponseParams<T>> {
		return this.service.delete(url, { params, ..._object });
	}
}

export const httpRequest = new RequestHttp({ baseURL: "/api" });
