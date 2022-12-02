import { call, put, select } from "redux-saga/effects";
import cartApi from "../../api/cartApi";

export function* cartUpdateToBE(action) {
  let state = yield select();
  if (state.user.login) {
    yield call(cartApi.create, state.cart);
  }
}
