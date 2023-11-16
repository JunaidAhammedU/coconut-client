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

// handle follow user
export const handleFollowUser = async (id, follower) => {
  try {
    const { data } = await api_request.post(`/addfollow/${id}`, { follower });
    if (!data) {
      errorAlert("you cant follow this user");
    } else {
      return data.status;
    }
  } catch (error) {
    errorAlert(error);
  }
};

// handle unfollow user
export const handleUnFollowUser = async (id, follower) => {
  try {
    const { data } = await api_request.post(`/addunfollow/${id}`, { follower });
    if (!data) {
      errorAlert("you cant unfollow this user");
    } else {
      return data.status;
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

  for (const key in ingredient) {
    formData.append("ingredient", ingredient[key]);
  }
  for (const key in instruction) {
    formData.append("instruction", instruction[key]);
  }

  try {
    const response = await api_request.post(`/addrecipe`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.data.status === -1) {
      errorAlert("image is not added");
    } else if (response.data.status === 1) {
      successAlert("Recipe Added");
      window.location.reload();
    } else {
      errorAlert("Somthing Whent wrong");
      setTimeout(() => {
        navigate("/user-profile");
      }, 2000);
    }
  } catch (error) {
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
