import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const pegasusAuth = createApi({
  reducerPath: "pegasus",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_PEGASUS_API,
  }),
  endpoints: (builder) => ({
    pegasusLogin: builder.mutation({
      query: () => {
        return {
          url: `/api/auth`,
          method: "POST",
          body: {
            username: "whipflip_prod",
            password: "RGmdP8tKDjXCO0ra",
          },
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
  }),
});

export const { usePegasusLoginMutation } = pegasusAuth;
