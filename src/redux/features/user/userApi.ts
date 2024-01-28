import { baseApi } from "../../api/baseAPI";

 const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    specificUser: builder.query({
      query: (email) => ({
        url: `/auth/user/${email}`,
        method: "GET",
      }),
    }),
  }),
});

export const {useSpecificUserQuery} = userApi
