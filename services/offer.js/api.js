import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import header from "./functions/headers";
export const offerApi = createApi({
  reducerPath: "offerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: header,
  }),
  tagTypes: ["offerApi", "reports"],
  endpoints: (builder) => ({
    getOffers: builder.query({
      query: (params) => {
        return {
          url: `/offerApi`,
          method: "GET",
          params: { ...params, where: JSON.stringify(params.where) },
        };
      },
      providesTags: ["reports"],
    }),
    getOfferID: builder.query({
      query: ({ params, id }) => {
        return {
          url: `/offerApi/id`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["offerApi"],
    }),
    updateOfferByID: builder.mutation({
      query: ({ params, id }) => {
        return {
          url: `/offerApi/id`,
          method: "PUT",
          body: params,
        };
      },
      invalidatesTags: ["reports", "offerApi"],
    }),
    deleteOfferByID: builder.mutation({
      query: ({ id }) => {
        return {
          url: `/agency/id`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["reports", "offerApi"],
    }),
    createOffer: builder.mutation({
      query: ({ params }) => {
        return {
          url: `/offerApi`,
          method: "POST",
          body: params,
        };
      },
      invalidatesTags: ["reports"],
    }),
  }),
});

export const {
  useGetOfferIDQuery,
  useDeleteOfferByIDMutation,
  useGetOffersQuery,
  useUpdateOfferByIDMutation,
  useCreateOfferMutation,
} = offerApi;
