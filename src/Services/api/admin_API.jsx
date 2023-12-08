import api_request from "../../axios";
import { successAlert, errorAlert, warnAlert } from "../Toast/Toast";
//-------------------------------------------------------------------

export const handleAdminLogin = async () => {
  try {
  } catch (error) {
    errorAlert(error);
  }
};

// get all users data in admin side
export const getAllUserData = async () => {
  try {
    const { data } = await api_request.get("/admin/getuser");
    if (!data.status) {
      errorAlert(data.message);
    } else {
      return data.data;
    }
  } catch (error) {
    errorAlert(error);
  }
};

// handle User Block unblock
export const handleUserBolckAndUnblock = async (data) => {
  try {
    const response = await api_request.post(`/admin/blockuser/${data._id}`);

    if (response.data.blocked) {
      warnAlert(`You are blocked ${data.UserName}`);
      return response.data;
    } else if (response.data.unBlocked) {
      warnAlert(`yo're Unblocked blocked ${data.UserName}`);
      return response.data;
    } else {
      errorAlert(response.data.message);
    }
  } catch (error) {
    errorAlert(error);
  }
};

// add category
export const addCategory = async (category, image) => {
  try {
    const formData = new FormData();
    formData.append("title", category.title);
    formData.append("bio", category.bio);
    formData.append("image", image);

    const { data } = await api_request.post("/admin/addNewCategory", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (data.status) {
      successAlert(data.message);
    } else {
      errorAlert(data.message);
    }
  } catch (error) {
    errorAlert(error);
  }
};

// get all categories
export const getAllCategories = async () => {
  try {
    const { data } = await api_request.get("/admin/getAllCategories");
    if (data.status) {
      return data;
    } else {
      errorAlert("data.message");
    }
  } catch (error) {
    errorAlert(error);
  }
};
