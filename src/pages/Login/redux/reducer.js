import * as actionType from './actionType';

const defaultState = {
  isSending: false,
  isLogin: false,
  error: "",
  user: {}
}


export const login = (state= defaultState, action) => {
  switch(action.type) {
    case actionType.LOGIN_SEND_REQUEST: {
      return {...state, isSending: true}
    }
    case actionType.LOGIN_SEND_REQUEST_SUCCESS: {
      return {...state, isSending: false, isLogin: true}
    }
    case actionType.LOGIN_SEND_REQUEST_FAILED: {
      return {...state, isSending: false}
    }
    case actionType.LOG_OUT: {
      return {...state, isLogin: false}
    }
    default:
      return state;
  }
}