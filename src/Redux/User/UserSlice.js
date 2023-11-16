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
  },
  reducers: {
    updateUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.followers = action.payload.followers;
      state.following = action.payload.following;
    },
  },
});

export const { updateUser } = UserSlice.actions;
export default UserSlice.reducer;
