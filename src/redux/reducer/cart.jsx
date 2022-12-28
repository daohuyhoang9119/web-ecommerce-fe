import {
  GET_CART,
  REMOVE_CART,
  INCREASE_CART,
  DECREASE_CART,
  CLEAR_CART,
} from "../type";
const listCart = JSON.parse(localStorage.getItem("cart")) || [];
const num = listCart.length;
const amount = JSON.parse(localStorage.getItem("amount")) || 0;
let initialValue = {
  listCart: listCart,
  num: num,
  amount: amount,
  ship: 0,
};
export default function cart(state = initialValue, action) {
  switch (action.type) {
    case GET_CART:
      let { listCart, amount, num } = state;
      const index = listCart.findIndex((e) => e.id === action.payload.id);
      if (index !== -1) {
        action.payload.numCart = action.payload.num || 1;
        listCart[index].numCart =
          listCart[index].numCart + action.payload.numCart;
        amount = amount + listCart[index].price * action.payload.numCart;
      } else {
        action.payload.numCart = action.payload.num || 1;
        listCart.push(action.payload);
        amount = amount + action.payload.price * action.payload.numCart;
      }
      localStorage.setItem("cart", JSON.stringify(listCart));
      localStorage.setItem("amount", JSON.stringify(amount));
      return {
        ...state,
        quantity: num + action.payload.numCart,
        listCart,
        amount,
      };
    case REMOVE_CART: {
      let { listCart, amount, num } = state;
      console.log("listCart:", listCart);
      console.log("amount:", amount);
      console.log("num:", num);
      const index = listCart.findIndex((e) => e.id === action.payload);
      amount = amount - listCart[index].numCart * listCart[index].price;
      num = num - listCart[index].numCart;
      if (index >= 0) {
        listCart.splice(index, 1);
      }
      localStorage.setItem("amount", JSON.stringify(amount));
      localStorage.setItem("cart", JSON.stringify(listCart));
      return {
        ...state,
        num,
        listCart,
        amount,
      };
    }
    case INCREASE_CART: {
      let { listCart, amount, num } = state;
      const index = listCart.findIndex((e) => e.id === action.payload);
      if (index >= 0) {
        listCart[index].numCart++;
        amount += listCart[index].price;
      }
      localStorage.setItem("amount", JSON.stringify(amount));
      localStorage.setItem("cart", JSON.stringify(listCart));
      return {
        ...state,
        listCart,
        amount,
        num: num + 1,
      };
    }
    case DECREASE_CART: {
      let { listCart, amount, num } = state;
      const index = listCart.findIndex((e) => e.id === action.payload);
      if (index >= 0) {
        amount -= listCart[index].price;
        listCart[index].numCart--;
        if (listCart[index].numCart === 0) {
          listCart.splice(index, 1);
        }
      }
      localStorage.setItem("amount", JSON.stringify(amount));
      localStorage.setItem("cart", JSON.stringify(listCart));
      return {
        ...state,
        listCart,
        amount,
        num: num - 1,
      };
    }
    case CLEAR_CART: {
      let { listCart, amount, num } = state;
      listCart = [];
      amount = 0;
      num = 0;
      localStorage.removeItem("amount");
      localStorage.removeItem("cart");

      return {
        ...state,
        listCart,
        num,
        amount,
      };
    }
    default:
      return state;
  }
}
