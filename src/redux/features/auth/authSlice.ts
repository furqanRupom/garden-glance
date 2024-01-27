import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../interface/user";
import { RootState } from "../../store";


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

export const getCurrentUserToken = (state:RootState) => state.auth.token;
export const getCurrentUser = (state:RootState) => state.auth.user;