import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { updateLocalOffer } from "features/offer/offerSlice";
import transformOfferData from "utils/trancformOfferData";
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
  tagTypes: ["offers"],
  endpoints: (builder) => ({
    getOfferMinimalById: builder.query({
      query: ({ id }) => {
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
      invalidatesTags: ["offers"],
    }),
    getOffer: builder.query({
      query: (id) => {
        return {
          url: `/prospects/${id}`,
          method: "GET",
        };
      },
      transformResponse: transformOfferData,
      providesTags: ["offers"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(updateLocalOffer(data));
        } catch (err) {
          console.log("Error fetching offers!");
        }
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
    addDamages: builder.mutation({
      query: (data) => {
        return {
          url: `/prospects/${data.uid}/damages`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["offers"],
    }),
    skipToInstantOffer: builder.mutation({
      query: (data) => {
        return {
          url: `/prospects/offer`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["offers"],
    }),
    createInstantOffer: builder.mutation({
      query: (data) => {
        return {
          url: `/prospects/offer`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["offers"],
    }),
    appointmentOffer: builder.mutation({
      query: (data) => {
        return {
          url: `/prospects/appointment`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["offers"],
    }),
    resetOffer: builder.mutation({
      query: (uid) => {
        return {
          url: `/prospects/reset/${uid}`,
          method: "POST",
          body: {},
        };
      },
      invalidatesTags: ["offers"],
    }),
    addVehicleImages: builder.mutation({
      query: ({ uid, data }) => {
        return {
          url: `/prospects/${uid}/add_vehicle_images`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["offers"],
    }),
  }),
});

export const {
  useGetOfferMinimalByIdQuery,
  useCreateInitialOfferMutation,
  useGetOfferQuery,
  useGetOfferByIdMutation,
  useAddDamagesMutation,
  useSkipToInstantOfferMutation,
  useCreateInstantOfferMutation,
  useAppointmentOfferMutation,
  useResetOfferMutation,
  useAddVehicleImagesMutation
} = offerApi;
