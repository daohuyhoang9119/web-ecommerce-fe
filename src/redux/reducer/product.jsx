import {
  GET_WISH_LIST,
  GET_PRODUCT,
  LOADING_PRO,
  GET_CATEGORY,
  PRODUCT_DETAIL,
} from "../type";
let initialValue = {
  product: JSON.parse(localStorage.getItem("localProduct")) || [],
  paging: "",
  loading: true,
  categories: JSON.parse(localStorage.getItem("categories")) || [],
  wishlist: [],
  productDetail: {},
  dataSearch: {},
};
export default function product(state = initialValue, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        paging: action.payload.paginate,
        loading: false,
      };
    case GET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case LOADING_PRO:
      return {
        ...state,
        loading: true,
      };
    case GET_WISH_LIST:
      return {
        ...state,
        wishlist: action.payload,
      };
    case PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };

    case "loadingHome":
      return {
        ...state,
        loading: false,
        dataSearch: action.payload,
      };

    default:
      return state;
  }
}
