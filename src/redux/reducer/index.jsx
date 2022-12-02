import { combineReducers } from "redux";
import user from "./user";
import product from "./product";
import cart from "./cart";

let reducers = combineReducers({
  user,
  product,
  cart,
});
export default reducers;
