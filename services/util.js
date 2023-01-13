import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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
              yes: false,
              data: response.history,
              active: "",
            },
            {
              title: "Any engine and/or drivability issues?",
              yes: false,
              data: response.mechanical.filter((m) => m.match_name == "engine"),
              active: "",
            },
            {
              title:
                "Any dashboard warning lights or inoperable parts? (e.g. Check Engine, Airbag Light, A/C issue, etc.)",
              yes: false,
              data: response.mechanical.filter(
                (m) => m.match_name == "warning"
              ),
              active: "",
            },
            {
              title: "Any aftermarket parts or modifications?",
              yes: false,
              data: response.mechanical.filter(
                (m) => m.match_name == "modification"
              ),
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
  }),
});

export const {
  useContactMutation,
  useRetrieveOfferMutation,
  useStatesQuery,
  useConditionsQuery,
  useVehicleWithVinMutation,
  useVehicleWithPlateMutation,
} = general;
