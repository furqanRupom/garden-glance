import { baseApi } from "../../api/baseAPI";

const flowersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addFlower: builder.mutation({
      query: (data) => ({
        url: "/flowers/add-flower",
        method: "POST",
        body: data,
      }),
    }),
    allFlowers: builder.query({
      query: () => ({
        url: "/flowers",
        method: "GET",
      }),
    }),
    bulkDelete:builder.mutation({
      query:(data) => ({
        url:"flowers/bulk/delete",
        method:"DELETE",
        body:data
      })
    })
  }),
});

export const { useAddFlowerMutation,useAllFlowersQuery,useBulkDeleteMutation } = flowersApi;
