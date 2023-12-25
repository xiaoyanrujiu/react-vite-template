import { httpRequest } from "@/api/request";

/**
 * @description 用户登录
 */
export function accountLogin(params: { phone: string; pwd: string }) {
	return httpRequest.post(`/api/v1/account/login`, params);
}
