import api from "../../ApiConfig";
import { Apis } from "../../../config";
import { NotificationManager } from "react-notifications";

const createCategoryList = async (data) => {
  try {
    let result = await api.post("https://localhost:7049/api/Category", data);
    if (result.data.error) {
      NotificationManager.error(result.data.error);
      return null;
    }
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getCategoryList = async () => {
  let result = await api.get("https://localhost:7049/api/Category/list");

  if (result.data.error) {
    NotificationManager.error(result.data.error);
    return null;
  }
  return result.data;
};

const getUpdateCategoryList = async (data) => {
  try {
    let result = await api.post("https://localhost:7049/api/Category", data);
    if (result.data.error) {
      NotificationManager.error(result.data.error);
      return null;
    }
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// sub categorylist

const getSubCategoryList = async () => {
  try {
    let result = await api.get(Apis.GEtAllSubCategoryList);
    if (result.data.error) {
      NotificationManager.error(result.data.error);
      return null;
    }
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getUpdateSubList = async (data) => {
  try {
    let result = await api.post(Apis.GetUpdateSubCategoryList, data);
    if (result.data.error) {
      NotificationManager.error(result.data.error);
      return null;
    }
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getSubDeleteById = async (id) => {
  try {
    let result = await api.delete(Apis.GetSubDeleteById, { params: { id } });
    if (result.data.error) {
      NotificationManager.error(result.data.error);
      return null;
    }
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// child category list
const getSelectSubCategory = async (id) => {
  try {
    let result = await api.get(Apis.GetAllSubCategory + `${id}`);
    if (result.data.error) {
      NotificationManager.error(result.data.error);
      return null;
    }
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const createChildCategory = async (data) => {
  try {
    let result = await api.post(Apis.CreateChildCategory, data);
    if (result.data.error) {
      NotificationManager.error(result.data.error);
      return null;
    }
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getChildCategoryList = async () => {
  try {
    let result = await api.get(Apis.GetAllChildCategoryList);
    if (result.data.error) {
      NotificationManager.error(result.data.error);
      return null;
    }
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getChildDeleteById = async (id) => {
  try {
    let result = await api.delete(Apis.GetChildDeleteById, { params: { id } });
    if (result.data.error) {
      NotificationManager.error(result.data.error);
      return null;
    }
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getAllSubChildCategory = async (id) => {
  try {
    let result = await api.get(Apis.GetAllSubChildCategory + `${id}`);
    if (result.data.error) {
      NotificationManager.error(result.data.error);
      return null;
    }
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default {
  createCategoryList,
  getCategoryList,
  getUpdateCategoryList,
  getSubCategoryList,
  getUpdateSubList,
  getSubDeleteById,
  getSelectSubCategory,
  createChildCategory,
  getChildCategoryList,
  getChildDeleteById,
  getAllSubChildCategory,
};
