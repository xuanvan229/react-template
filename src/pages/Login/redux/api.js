import { post } from "../../../utils/api";
export function sendLoginAPI(data) {
  // const token = localStorage.getItem('token');
  const url = "/login";
  return post({ url, data });
}

export function sendLogoutAPI(data) {
  // const token = localStorage.getItem("token");
  // const headersAuthen = `Bearer ${token}`;
  const url = "/api/v1/customer/sign_out";
  return post({ url, data });
}
