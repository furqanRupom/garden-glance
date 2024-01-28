import { baseApi } from "../../api/baseAPI";



const salesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSoldProduct: builder.mutation({
      query: (data) => ({
        url: "/flowers/sell",
        method: "POST",
        body: data,
      }),
    }),
  }),
});


export const {useAddSoldProductMutation} = salesApi