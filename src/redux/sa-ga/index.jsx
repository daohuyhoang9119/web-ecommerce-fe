import { takeLatest } from "redux-saga/effects";
import {
  AUTH_FETCH_LOGIN,
  FETCH_PRODUCT,
  AUTH_FETCH_REGISTER,
  FETCH_UPDATE,
  FETCH_CATEGORY,
  FETCH_WISH_LIST,
  WISHLIST,
  GET_CART,
  REMOVE_CART,
  INCREASE_CART,
  DECREASE_CART,
} from "../type";
import {
  fetchLogin,
  fetchProduct,
  fetchRegister,
  fetchUpdate,
  fetchCategory,
  fetchWishList,
  getWishList,
} from "./userSaga";
import { cartUpdateToBE } from "./cartSaga";

export default function* mySaga() {
  yield takeLatest(FETCH_CATEGORY, fetchCategory);
  yield takeLatest(AUTH_FETCH_LOGIN, fetchLogin);
  yield takeLatest(FETCH_UPDATE, fetchUpdate);
  yield takeLatest(AUTH_FETCH_REGISTER, fetchRegister);
  yield takeLatest(FETCH_PRODUCT, fetchProduct);
  yield takeLatest(FETCH_WISH_LIST, fetchWishList);
  yield takeLatest(WISHLIST, getWishList);
  yield takeLatest(
    [GET_CART, REMOVE_CART, INCREASE_CART, DECREASE_CART],
    cartUpdateToBE
  );
}
