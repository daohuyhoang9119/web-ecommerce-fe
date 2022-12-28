const API_URL =
  document.domain === "localhost" ? "http://localhost:7049/api" : "production";

const Apis = {
  //Authentication api
  GetUserLogin: `${API_URL}/api/auth/rootLogin`,
  GetUserRegsiter: `${API_URL}/api/auth/register`,
  GetAllUserList: `${API_URL}/api/auth/user/getAllUserList`,
  GetUserUpdate: `${API_URL}/api/auth/user/update`,
  GetDeleteUserList: `${API_URL}/api/auth/user/delete`,

  //Dashboard
  GetOrderByStatus: `${API_URL}/api/order/status`,
  GetAllStatusOrder: `${API_URL}/api/order/count`,

  //category api
  //https://localhost:7049/api/Category/list
  CreateCategoryList: `${API_URL}/api/category/create`,
  GetAllCategoryList: `${API_URL}/Category/list`,
  GetUpdateCategoryList: `${API_URL}/api/category/main-list/update`,

  //Sub category api
  CreateSubCategoryList: `${API_URL}/api/category/create-sub`,
  GEtAllSubCategoryList: `${API_URL}/api/category/sub-list`,
  GetUpdateSubCategoryList: `${API_URL}/api/category/sub-list/update`,
  GetSubDeleteById: `${API_URL}/api/category/sub-list/delete`,

  //Child category api
  GetAllSubCategory: `${API_URL}/api/category/getAllSubCategory?categoryId=`,
  CreateChildCategory: `${API_URL}/api/category/create-sub-child`,
  GetAllChildCategoryList: `${API_URL}/api/category/list`,
  GetChildDeleteById: `${API_URL}/api/category/child/deleteById`,
  GetAllSubChildCategory: `${API_URL}/api/category/getAllSubChildCategory?subcategoryId=`,

  //'https://localhost:7049/api/Product/list
  //product api
  AddProductList: `${API_URL}/api/product/add`,
  GetAllProductList: `${API_URL}/Product/list`,
  GetAllProductPhoto: `${API_URL}/api/product/getAllPhoto`,
  GetUpdateProduct: `${API_URL}/api/product/update`,
  GetUploadProductImage: `${API_URL}/api/product/upload-img`,
  GetDeleteProduct: `${API_URL}/api/product/delete`,
  GetProductById: `${API_URL}/api/product/getProductById`,
  GetProductPhotoDeleteById: `${API_URL}/api/product/aws/delete/photo`,

  //order detail
  GetAllOrderDetails: `${API_URL}/api/order/list`,
  GetOrderStatusUpdate: `${API_URL}/api/order/status/update`,

  // customer details
  GetAllCustomerDetails: `${API_URL}/api/customer/list`,
  GetCustomerDeleteById: `${API_URL}/api/customer/delete`,
};
export { API_URL, Apis };
