import * as actionType from "./actionType";

export const sendLogin = data => ({
  type: actionType.LOGIN_SEND_REQUEST,
  payload: {data},
});

export const receiveLoginSuccess = data => ({
  type: actionType.LOGIN_SEND_REQUEST_SUCCESS,
  payload: { data },
});

export const receiveLoginFail = error => ({
  type: actionType.LOGIN_SEND_REQUEST_FAILED,
  payload: { error },
});

export const logout = data => ({
  type: actionType.LOG_OUT,
});