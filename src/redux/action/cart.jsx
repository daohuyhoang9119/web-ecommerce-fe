import {
  GET_CART,
  REMOVE_CART,
  INCREASE_CART,
  DECREASE_CART,
  CLEAR_CART,
} from "../type";
export function addCart(cart) {
  return {
    type: GET_CART,
    payload: cart,
  };
}
export function removeCart(id) {
  return {
    type: REMOVE_CART,
    payload: id,
  };
}

export function increase(id) {
  return {
    type: INCREASE_CART,
    payload: id,
  };
}

export function decrease(id) {
  return {
    type: DECREASE_CART,
    payload: id,
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}
