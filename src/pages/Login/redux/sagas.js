import { takeLatest, put, call, all, fork, select } from "redux-saga/effects";
import * as actionType from "./actionType";
import * as actions from './action';
import * as api from './api';

function* submitLogin(action) {
  const { email, password } = action.payload.data; 
  const dataSend = {
    email, password
  };

  console.log("action", action)
  try {
    const result = yield call(api.sendLoginAPI, dataSend);
    if (result.status === 200) {
      // localStorage.setItem("token", result.data.payload.token);
      yield put(actions.receiveLoginSuccess(result.data.payload));
    } else {
      yield put(actions.receiveLoginFail());
    }
  } catch (error) {
    yield put(actions.receiveLoginFail(error.response.data.message));
  }
}
function* loginSaga() {
  yield all([
    takeLatest(actionType.LOGIN_SEND_REQUEST, submitLogin),
  ]);
}

export function* root() {
  yield all([fork(loginSaga)]);
}