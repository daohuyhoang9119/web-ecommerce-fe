import Api from "../core/ClassApi";
const productApi = {
  product: (strUrl) => {
    return Api.get(`product?${strUrl}`);
  },
  category: () => {
    return Api.get(`categories`);
  },
  productDetail(slug) {
    return Api.get(`product?slug=${slug}`);
  },

  searchProduct: (slug = "") => {
    return Api.get(`product?search=${slug}`);
  },
};
export default productApi;
