import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const pegasus = createApi({
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
        };
      },
    }),
    pegasusUpload: builder.mutation({
      query: ({ data, token }) => {
        return {
          url: `/api/get_predictions_multi`,
          method: "POST",
          body: data,
          headers: {
            Authorization: "Bearer " + token,
          },
        };
      },
    }),
  }),
});

export const { usePegasusLoginMutation, usePegasusUploadMutation } = pegasus;
