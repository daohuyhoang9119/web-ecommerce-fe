import {
  WISHLIST,
  LOGIN_ERROR,
  AUTH_FETCH_LOGIN,
  MAKE_LOGIN,
  MAKE_LOGOUT,
  REGISTER,
  AUTH_FETCH_REGISTER,
  REGISTER_ERROR,
  FETCH_UPDATE,
  UPDATE,
  SET_LOADING,
  FETCH_WISH_LIST,
  GET_WISH_LIST,
} from "../type";
export function fetchLogin(form) {
  return {
    type: AUTH_FETCH_LOGIN,
    payload: form,
  };
}
export function loginError(data) {
  return {
    type: LOGIN_ERROR,
    payload: data,
  };
}
export function login(data) {
  return {
    type: MAKE_LOGIN,
    payload: data,
  };
}
export function logout() {
  return {
    type: MAKE_LOGOUT,
    payload: false,
  };
}
export function fetchRegister(data) {
  return {
    type: AUTH_FETCH_REGISTER,
    payload: data,
  };
}

export function register(data) {
  return {
    type: REGISTER,
    payload: data,
  };
}
export function registerError(data) {
  return {
    type: REGISTER_ERROR,
    payload: data,
  };
}

export function fetchUpdate(data) {
  return {
    type: FETCH_UPDATE,
    payload: data,
  };
}
export function updateInfo(data) {
  return {
    type: UPDATE,
    payload: data,
  };
}

export function setLoading(data) {
  return {
    type: SET_LOADING,
    payload: data,
  };
}
export function fetchWishList(data) {
  return {
    type: FETCH_WISH_LIST,
    payload: data,
  };
}
export function addWishList(data) {
  return {
    type: GET_WISH_LIST,
    payload: data,
  };
}
export function getWishList() {
  return { type: WISHLIST };
}
