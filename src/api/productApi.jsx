import Api from "../core/ClassApi";
const productApi = {
  product: (strUrl) => {
    // return Api.get(`Product?${strUrl}`);
    return Api.get(`Product/list`);
  },
  category: () => {
    return Api.get(`Category/list`);
  },
  productDetail(slug) {
    return Api.get(`Product/${slug}`);
  },

  searchProduct: (slug = "") => {
    return Api.get(`product?search=${slug}`);
  },
};
export default productApi;
