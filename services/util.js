import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import moment from "moment";

export const general = createApi({
  reducerPath: "general",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    contact: builder.mutation({
      query: (data) => {
        return {
          url: `/queries`,
          method: "POST",
          body: data,
        };
      },
    }),
    retrieveOffer: builder.mutation({
      query: (email) => {
        return {
          url: `/prospects/retrieve?email=${email}`,
          method: "GET",
        };
      },
    }),
    states: builder.query({
      query: () => {
        return {
          url: `/states`,
          method: "GET",
        };
      },
    }),
    conditions: builder.query({
      query: () => {
        return {
          url: `/vehicles/conditions`,
          method: "GET",
        };
      },
      transformResponse: (response) => {
        return {
          vehicle: [
            {
              title:
                "Any vehicle history issues or title brand? (e.g. accident, flood, etc.)",
              yes: "",
              data: response.history,
              active: "",
            },
            {
              title: "Any engine and/or drivability issues?",
              yes: "",
              data: response.mechanical
                .filter((m) => m.match_name == "engine")
                .sort((a, b) => a.order_no - b.order_no),
              active: "",
            },
            {
              title:
                "Any dashboard warning lights or inoperable parts? (e.g. Check Engine, Airbag Light, A/C issue, etc.)",
              yes: "",
              data: response.mechanical.filter(
                (m) => m.match_name == "warning"
              ),
              active: "",
            },
            {
              title: "Any aftermarket parts or modifications?",
              yes: "",
              data: response.mechanical
                .filter((m) => m.match_name == "modification")
                .sort((a, b) => a.order_no - b.order_no),
              active: "",
            },
          ],
          tire: response.mechanical.filter((m) =>
            ["tires_rough", "tires_better", "tires_normal"].includes(
              m.match_name
            )
          ),
          cosmetic: {
            interior: response.cosmetic.filter((m) =>
              ["interior_better", "interior_normal", "interior_rough"].includes(
                m.match_name
              )
            ),
            exterior: response.cosmetic.filter((m) =>
              ["exterior_better", "exterior_normal", "exterior_rough"].includes(
                m.match_name
              )
            ),
          },
        };
      },
    }),
    vehicleWithVin: builder.mutation({
      query: (vin) => {
        return {
          url: `/vehicles?vin=${vin}`,
          method: "GET",
        };
      },
    }),
    vehicleWithPlate: builder.mutation({
      query: ({ state, plateNumber }) => {
        return {
          url: `/vehicles?plate=${plateNumber}&state=${state}`,
          method: "GET",
        };
      },
    }),
    placeSearch: builder.query({
      query: (input) => {
        return {
          url: `${window.location.origin}/api/place`,
          method: "GET",
          params: {
            input,
          },
        };
      },
    }),
    zipSearch: builder.query({
      query: (latLng) => {
        return {
          url: `${window.location.origin}/api/zip`,
          method: "GET",
          params: {
            latLng,
          },
        };
      },
    }),
    validateZip: builder.query({
      query: ({ zip }) => {
        return {
          url: `/zip/status`,
          method: "GET",
          params: {
            zip,
          },
        };
      },
    }),
    slots: builder.query({
      query: (params) => {
        return {
          url: `/slots`,
          method: "GET",
          params,
        };
      },
      transformResponse: (response, meta, arg) => {
        const { date } = arg;
        const today = moment().format("YYYY-MM-DD");
        const slots = response
          ?.map((item) => ({
            ...item,
            hour: moment(`${date} ${item.hour}`, "YYYY-MM-DD HH:mm A").format(
              "YYYY-MM-DD HH:mm:ss"
            ),
          }))
          .filter(
            (item) =>
              item?.hour >
              moment(
                new Date().toLocaleString("en-US", {
                  timeZone: "America/New_York",
                })
              )
                .add(2, "hours")
                .format("YYYY-MM-DD HH:mm:ss")
          )
          .map((item) => ({
            ...item,
            hour: moment(item.hour).format("hh:mm A"),
          }));
        return date === today ? slots : response;
      },
    }),
    subscribe: builder.mutation({
      query: (email) => {
        return {
          url: `/subscribe`,
          method: "POST",
          body: email,
        };
      },
    }),
    blogs: builder.query({
      query: () => {
        return {
          url: `/blogs`,
          method: "GET",
        };
      },
    }),
    reviews: builder.query({
      query: (params) => {
        return {
          url: `/prospects/reviews`,
          method: "GET",
          params,
        };
      },
    }),
  }),
});

export const {
  useContactMutation,
  useRetrieveOfferMutation,
  useStatesQuery,
  useConditionsQuery,
  useVehicleWithVinMutation,
  useVehicleWithPlateMutation,
  usePlaceSearchQuery,
  useZipSearchQuery,
  useValidateZipQuery,
  useSlotsQuery,
  useSubscribeMutation,
  useBlogsQuery,
  useReviewsQuery,
} = general;
