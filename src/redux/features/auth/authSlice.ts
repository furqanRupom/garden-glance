import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../interface/user";

interface IInitialState {
  user: null | IUser;
  token: null | string;
}
const initialState: IInitialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const {setUser,logout} = authSlice.actions;
export default authSlice.reducer;