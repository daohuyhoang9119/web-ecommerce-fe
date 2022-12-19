import Api from "../core/ClassApi";
const productApi = {
  product: (strUrl) => {
    // return Api.get(`Product?${strUrl}`);
    return Api.get(`Product/list`);
  },
  category: () => {
    return Api.get(`Category/list`);
    // https://localhost:7049/api/Category/list
    //https://localhost:7049/api/Category/list
  },
  productDetail(slug) {
    return Api.get(`product?slug=${slug}`);
  },

  searchProduct: (slug = "") => {
    return Api.get(`product?search=${slug}`);
  },
};
export default productApi;
