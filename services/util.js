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
        return [
          {
            title:
              "Any vehicle history issues or title brand? (e.g. accident, flood, etc.)",
            yes: false,
            data: response.history,
            active: 0,
          },
          {
            title: "Any engine and/or drivability issues?",
            yes: false,
            data: response.history,
            active: 0,
          },
        ];
      },
    }),
  }),
});

export const {
  useContactMutation,
  useRetrieveOfferMutation,
  useStatesQuery,
  useConditionsQuery,
} = general;
