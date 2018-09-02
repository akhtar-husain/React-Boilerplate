import * as actionTypes from './action-type';

const authLogin = (payload) => {
  return {
    type: actionTypes.AUTH_LOGIN,
    payload
  }
}
const fetchingLogin = () => {
  return {
    type: actionTypes.FETCHING_LOGIN
  }
}
const authLogout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}
const authCheck = () => {
  return {
    type: actionTypes.AUTH_CHECK
  }
}
const updateUserData = (payload) => {
  return {
    type: actionTypes.UPDATE_USER_DATA,
    payload
  }
}

export default {
  fetchingLogin,
  authLogin,
  authLogout,
  authCheck,
  updateUserData
};