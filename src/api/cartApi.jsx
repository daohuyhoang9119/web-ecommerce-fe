import Api from "../core/ClassApi";
const cartApi = {
  order: (data) => {
    return Api.token().post("ecommerce/v1/order", data);
  },
  //https://localhost:7049/api/Cart?productId=3&quantity=2
  create: (data) => {
    return Api.token().post(`/Cart/list`, data);
  },
  getCartFromUser: () => {
    return Api.token().get("Cart/list");
  },
  getAllOrder() {
    return Api.token().get("ecommerce/v1/order");
  },
};
export default cartApi;
