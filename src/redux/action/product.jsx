import {
  FETCH_PRODUCT,
  GET_PRODUCT,
  LOADING_PRO,
  GET_CATEGORY,
  FETCH_CATEGORY,
  PRODUCT_DETAIL,
} from "../type";
export function fetchProduct(strUrl) {
  return {
    type: FETCH_PRODUCT,
    payload: strUrl,
  };
}

export function getPro(res) {
  return {
    type: GET_PRODUCT,
    payload: res,
  };
}
export function getCategory(res) {
  return {
    type: GET_CATEGORY,
    payload: res,
  };
}
export function fetchCategory(res) {
  return {
    type: FETCH_CATEGORY,
  };
}

export function actionLoading() {
  return {
    type: LOADING_PRO,
  };
}
export function viewProduct(product) {
  return {
    type: PRODUCT_DETAIL,
    payload: product,
  };
}
