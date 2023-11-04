import { toast } from "react-toastify";
import axios from "axios";
//-------------------------------------

// Toaster Message
const toastMessage = (param) => {
  return {
    position: "top-center",
    autoClose: param,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
};

//handle user block function
export const userBolck = async (data,getData) => {
  await axios
    .post(
      `${import.meta.env.VITE_REACT_APP_SERVER_URL}/admin/blockuser/${data._id}`
    )
    .then((response) => {
      if (!response.data.is_blocked) {
        toast.success(
          `yo're Unblocked blocked ${data.UserName}`,
          toastMessage(1000)
        );
      } else {
        toast.info(`You are blocked ${data.UserName}`, toastMessage(1000));
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
