import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { reset, updateLocalOffer } from "features/offer/offerSlice";
import moment from "moment";
import { Modal } from "antd";
import transformOfferData from "utils/trancformOfferData";
import BreakDown from "components/anim/breakdown";
import OOA from "components/common/OOA";
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
          url: `/prospects${data.is_m1 ? "/m1" : ""}`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["offers"],
    }),
    getOffer: builder.query({
      query: ({ id }) => {
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
          const utcDate =
            data.status == "quote"
              ? moment(data.last_quote_date).add(5, "days")
              : moment(data.last_offer_date).add(5, "days");
          if (data.area === "OOA") {
            Modal.info({
              centered: true,
              icon: null,
              footer: null,
              title: null,
              content: <OOA />,
              wrapClassName: "o_o_a",
            });
            dispatch(reset());
          } else {
            if (utcDate.diff(moment(), "seconds") <= 0) {
              if (window.location.pathname === "/") {
                dispatch(reset());
              }
              dispatch(updateLocalOffer(data));
            } else {
              dispatch(updateLocalOffer(data));
            }
          }
        } catch (err) {
          dispatch(reset());
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
    appointmentFlirt: builder.mutation({
      query: ({ uid }) => {
        console.log(uid);
        return {
          url: `/prospects/${uid}/appointment_flirt`,
          method: "POST",
          body: {},
        };
      },
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
  useAddVehicleImagesMutation,
  useAppointmentFlirtMutation,
} = offerApi;
