import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const offerApi = createApi({
  reducerPath: "offerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers, { getState }) => {
      let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timezone) {
        headers.set("timezone", timezone);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getOfferMinimalById: builder.query({
      query: ({id}) => {
        return {
          url: `/prospects/minimal/${id}`,
          method: "GET",
        };
      },
    }),
    createInitialOffer: builder.mutation({
      query: (data) => {
        return {
          url: `/prospects`,
          method: "POST",
          body: data,
        };
      },
    }),
    getOfferById: builder.mutation({
      query: (id) => {
        return {
          url: `/prospects/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetOfferMinimalByIdQuery,
  useCreateInitialOfferMutation,
  useGetOfferByIdMutation,
} = offerApi;
