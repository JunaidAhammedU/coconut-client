import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice ({
    name: 'user',
    initialState: {
        id: "",
        name: "",
        email: ""
    },
    reducers: {
        updateUser: (state, action) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.email = action.payload.email
        }
    }
})

export const { updateUser } = UserSlice.actions;
export default UserSlice.reducer;