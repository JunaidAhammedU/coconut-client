import axios from "axios";
import api_request from "../../axios";
import {
  successAlert,
  errorAlert,
  commentAddedAlert,
  emojiAlert,
  warnAlert,
} from "../Toast/Toast";
//----------------------------------------------------------------------------------------

// checking is user authenticated
export const is_auth = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user ? user.token : null;
    axios
      .post("http://localhost:3000", { token })
      .then((response) => {
        const data = response.data;
        if (!data.status) {
          return data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    errorAlert(error);
  }
};

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
export const getLoggedUserInfo = async (id) => {
  try {
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

// follow user handeler
export const followUser = async (loggedInUserId, userId) => {
  try {
    const response = await api_request.post(`/addfollow/${userId}`, {
      follower: loggedInUserId,
    });
    commentAddedAlert("You followed");
    return response.data.status;
  } catch (error) {
    console.error("Error following user:", error);
    return false;
  }
};

// unfollow user handler
export const unfollowUser = async (loggedInUserId, userId) => {
  try {
    const response = await api_request.post(`/addunfollow/${userId}`, {
      follower: loggedInUserId,
    });
    commentAddedAlert("You Unfollowed");

    return response.data.status;
  } catch (error) {
    console.error("Error unfollowing user:", error);
    return false;
  }
};

// taking all followers Data
export const getFollowerData = async (userId) => {
  try {
    const { data } = await api_request.get(`/getallfollowers/${userId}`);
    if (data) {
      return data;
    } else {
      errorAlert(data.message);
    }
  } catch (error) {
    errorAlert(error);
  }
};

// fetching all user chat history
export const createChat = async (loggedUserId, userId) => {
  try {
    const { data } = await api_request.post(
      `/createChat/${loggedUserId}/${userId}`
    );
    if (data) {
      return data;
    } else {
      errorAlert(data.message);
    }
  } catch (error) {
    errorAlert(error);
  }
};

// fetch all chats
export const fetchChatHistory = async (room) => {
  try {
    const { data } = await api_request.get(`/chathistory?room=${room}`);
    return data;
  } catch (error) {
    errorAlert(error);
  }
};

// set new comment
export const newComment = async (newComment) => {
  try {
    const { data } = await api_request.post(`/addcomment`, newComment);
    if (data) {
      commentAddedAlert(data.message);
    } else {
      errorAlert(data.message);
    }
  } catch (error) {
    errorAlert(error);
  }
};

// get recipe search sort filter data
export const getSearchAllRecipeData = async (sort, filter, page, search) => {
  try {
    const { data } = await api_request.get(
      `/getrecipesearch?page=${page}&sort=${sort.sort},${
        sort.order
      }&category=${filter.toString()}&search=${search}`
    );
    if (data) {
      return data;
    } else {
      errorAlert("somting went wrong!");
    }
  } catch (error) {
    errorAlert(error);
  }
};

// add new recipe in to saved collection
export const addSavedRecipe = async (recipeId, userId) => {
  try {
    const { data } = await api_request.post(
      `/addSavedRecipe/?recipeId=${recipeId}&userId=${userId}`
    );
    if (data.status) {
      emojiAlert(data.message);
      return data;
    } else {
      errorAlert(data.message);
    }
  } catch (error) {
    errorAlert(error);
  }
};

// get all saved collection data
export const getCollectionData = async (userId) => {
  try {
    const { data } = await api_request.get(
      `/getAllCollections?userId=${userId}`
    );
    if (data.status) {
      return data;
    }
  } catch (error) {
    errorAlert(error);
  }
};

// get all category based recipe
export const getAllRecipeCatgory = async (category) => {
  try {
    const { data } = await api_request.get(
      `/getAllCategoryRecipe?category=${category}`
    );
    if (data.status) {
      return data;
    } else {
      errorAlert(data.message);
    }
  } catch (error) {
    errorAlert(error);
  }
};

// edit profile details
export const handleProfileEdit = async (newUserData, profileImage, id) => {
  try {
    const formdata = new FormData();

    if (!newUserData) {
      errorAlert("Please fill the name field!");
    } else if (!profileImage) {
      errorAlert("Please upload any profile picture");
    } else if (!id) {
      errorAlert("Somthing went wrong, Try again");
    } else {
      formdata.append("UserName", newUserData.UserName);
      formdata.append("email", newUserData.email);
      formdata.append("profileImage", profileImage);

      const { data } = await api_request.post(
        `/editProfile?userId=${id}`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data.status) {
        successAlert(data.message);
        return data;
      } else {
        errorAlert(data.message);
      }
    }
  } catch (error) {
    errorAlert(error);
  }
};

// joining chat room
export const getAccessChat = async (id, userId) => {
  try {
    const { data } = await api_request.post(`/createChat?user=${id}`, {
      userId,
    });
    return data.data;
  } catch (error) {
    errorAlert(error);
  }
};

// send new message
export const sendMessage = async (newMessage) => {
  try {
    const { data } = await api_request.post(`/sendNewMessage`, newMessage);
    if (data.status) {
      return data.data;
    } else {
      errorAlert(data.message);
    }
  } catch (error) {
    errorAlert(error);
  }
};

// remove recipe from the user collection
export const doRecipeRemove = async (userId, recipeId) => {
  try {
    const { data } = await api_request.patch(
      `/removeRecipeCollection?userId=${userId}&&recipeId=${recipeId}`
    );
    if (data.status) {
      successAlert(data.message);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      errorAlert(data.message);
    }
  } catch (error) {
    errorAlert(error);
  }
};
