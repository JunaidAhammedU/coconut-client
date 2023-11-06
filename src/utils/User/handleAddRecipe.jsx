import { toast } from "react-toastify";
import axios from "axios";
//-------------------------------------------------------

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

// handle function for add recipe
export const handleAddRecipe = async (
  recipe,
  ingredient,
  instruction,
  image,
  id
) => {
  const formData = new FormData();
  formData.append("title", recipe.title);
  formData.append("description", recipe.description);
  formData.append("veg", recipe.veg);
  formData.append("nonveg", recipe.nonveg);
  formData.append("time", recipe.time);
  formData.append("cuisine", recipe.cuisine);
  formData.append("calories", recipe.calories);
  formData.append("protein", recipe.protein);
  formData.append("carbohydrates", recipe.carbohydrates);
  formData.append("fat", recipe.fat);
  formData.append("calcium", recipe.calcium);
  formData.append("image", image);
  formData.append("userId", id);

  for (const key in ingredient) {
    formData.append("ingredient", ingredient[key]);
  }
  for (const key in instruction) {
    formData.append("instruction", instruction[key]);
  }

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_SERVER_URL}/addrecipe`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.data.status === -1) {
      toast.error("image is not added", toastMessage(2000));
    } else if (response.data.status === 1) {
      toast.success("Recipe Posted", toastMessage(2000));
      // setTimeout(() => {
      //   navigate("/");
      // }, 2000);
    } else {
      toast.error("Somthing went wrong!", toastMessage(2000));
      setTimeout(() => {
        navigate("/user-profile");
      }, 2000);
    }
  } catch (error) {
    console.error(error);
  }
};
