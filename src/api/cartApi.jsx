import Api from "../core/ClassApi";
const cartApi = {
  order: (data) => {
    return Api.token().post("ecommerce/v1/order", data);
  },
  create: (data) => {
    return Api.token().post(`ecommerce/v1/cart`, data);
  },
  getCartFromUser: () => {
    return Api.token().get("ecommerce/v1/cart");
  },
  getAllOrder() {
    return Api.token().get("ecommerce/v1/order");
  },
};
export default cartApi;
