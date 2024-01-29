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
      query: (data) => ({
        url: `/flowers?color=${data?.color}&price=${data?.price}&size=${data?.size}&fragrance=${data?.fragrance}&type=${data?.type}`,
        method: "GET",
      }),
    }),
    bulkDelete: builder.mutation({
      query: (data) => ({
        url: "flowers/bulk/delete",
        method: "DELETE",
        body: data,
      }),
    }),
    delete: builder.mutation({
      query: (id) => ({
        url: `/flowers/${id}`,
        method: "DELETE",
      }),
    }),
    getFlower: builder.query({
      query: (id) => ({
        url: `/flowers/${id}`,
        method: "GET",
      }),
    }),

  }),
});

export const { useAddFlowerMutation,useAllFlowersQuery,useBulkDeleteMutation,useDeleteMutation,useGetFlowerQuery } = flowersApi;
