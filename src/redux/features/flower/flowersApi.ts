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
      query: (data) => {
        const queryParams = new URLSearchParams({
          color: data?.color || "",
          price: data?.price || "",
          size: data?.size || "",
          fragrance: data?.fragrance || "",
          type: data?.type || "",
        });

        return {
          url: `/flowers?${queryParams.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["flowers"],
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
    updateFlower: builder.mutation({
      query: (data) => ({
        url: `/flowers/update/${data.id}`,
        method: "PATCH",
        body: data.updateData,
      }),
    }),
  }),
});

export const {
  useAddFlowerMutation,
  useAllFlowersQuery,
  useBulkDeleteMutation,
  useDeleteMutation,
  useGetFlowerQuery,
  useUpdateFlowerMutation,
} = flowersApi;
