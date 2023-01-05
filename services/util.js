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
  }),
});

export const { useContactMutation } = general;
