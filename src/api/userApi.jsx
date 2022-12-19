import Api from "../core/ClassApi";
const userApi = {
  login: (data) => {
    return Api.post("Auth/login", data);
  },
  register: (data) => {
    return Api.post("Auth/register", data);
  },
  updateInfo(data) {
    return Api.token().post("update-profile", data);
  },

  wishList: (data) => {
    return Api.token().post("ecommerce/v1/profile/wishlist", data);
  },
  getWishList: () => {
    return Api.token().get("ecommerce/v1/profile/wishlist");
  },
};
export default userApi;
