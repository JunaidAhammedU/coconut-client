import api_request from "../../axios";
import {
  successAlert,
  errorAlert,
  promiseAlert,
  warnAlert,
} from "../Toast/Toast";
//---------------------------------------------------------

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
      successAlert(`yo're Unblocked blocked ${data.UserName}`);
      return response.data;
    } else {
      errorAlert(response.data.message);
    }
  } catch (error) {
    errorAlert(error);
  }
};
