import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from "redux-persist";
import { baseApi } from "./api/baseAPI";

const store = configureStore({
  reducer: {
    auth: authSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  // TODO : wel will to some other op as well
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
