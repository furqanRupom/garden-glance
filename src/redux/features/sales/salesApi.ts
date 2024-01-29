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
    soldProductHistory: builder.query({
      query: (category) => ({
        url: `/flowers/sell/history?category=${category}`,
        method:'GET'
      }),
    }),
  }),
});


export const {useAddSoldProductMutation,useSoldProductHistoryQuery} = salesApi