import api_request from "../../axios";
import { successAlert, errorAlert } from "../Toast/Toast";
//---------------------------------------------------------

//get all recipes
export const getAllRecipes = async () => {
  try {
    const { data } = await api_request.get(`/getallrecipes`);
    if (data) {
      return data;
    } else {
      errorAlert(data.message);
    }
  } catch (error) {
    errorAlert(error);
  }
};

// handle post add recipes
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

  ingredient.forEach((value, index) => {
    formData.append(`ingredient[${index}]`, value);
  });

  instruction.forEach((value, index) => {
    formData.append(`instruction[${index}]`, value);
  });

  try {
    const { data } = await api_request.post(`/addrecipe`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (!data.status) {
      errorAlert(data.message);
    } else if (data.status) {
      successAlert("Recipe added");
      window.location.reload();
    } else {
      errorAlert(data.error);
      setTimeout(() => {
        navigate("/user-profile");
      }, 2000);
    }
  } catch (error) {
    errorAlert(error);
    console.error(error);
  }
};

//get loggedUserDetails
export const getLoggedUserInfo = async (userData) => {
  try {
    const id = userData;
    const { data } = await api_request.get(`/getuserdata/${id}`);
    if (data) {
      return data;
    } else {
      errorAlert(data.message);
    }
  } catch (error) {
    errorAlert(error);
  }
};

// get recipe intividual deails
export const getRecipeData = async (id, userId) => {
  try {
    const { data } = await api_request.get(`/getrecipedata/${id}/${userId}`);
    if (data.status) {
      return data;
    } else {
      errorAlert(data.message);
    }
  } catch (error) {
    errorAlert(error);
  }
};

export const followUser = async (loggedInUserId, userId) => {
  try {
    const response = await api_request.post(`/addfollow/${userId}`, {
      follower: loggedInUserId,
    });
    return response.data.status;
  } catch (error) {
    console.error("Error following user:", error);
    return false;
  }
};

export const unfollowUser = async (loggedInUserId, userId) => {
  try {
    const response = await api_request.post(`/addunfollow/${userId}`, {
      follower: loggedInUserId,
    });
    return response.data.status;
  } catch (error) {
    console.error("Error unfollowing user:", error);
    return false;
  }
};
