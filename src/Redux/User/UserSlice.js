import { createSlice } from "@reduxjs/toolkit";
//--------------------------------------------

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    name: "",
    email: "",
    followers: [],
    following: [],
    profile_image: "",
    notifications: [],
  },
  reducers: {
    updateUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.followers = action.payload.followers;
      state.following = action.payload.following;
      state.profile_image = action.payload.profile_image;
    },
    chatReducer: (state, action) => {
      state.notifications.push(action.payload.notification);
    },
  },
});

export const { updateUser, chatReducer } = UserSlice.actions;
export default UserSlice.reducer;
