import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const clearQuote = createApi({
  reducerPath: "clearQuote",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_CLEAR_QUOTE_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: () => {
        return {
          url: `/auth/users/login`,
          method: "POST",
          body: {
            user: {
              email: "whipfliptest01",
              password: "v8k3j4",
            },
          },
        };
      },
    }),
    processQuote: builder.mutation({
      query: ({data, token}) => {
        return {
          url: `/api/v3/process-quote`,
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
      },
    }),
  }),
});

export const { useLoginMutation, useProcessQuoteMutation } = clearQuote;
