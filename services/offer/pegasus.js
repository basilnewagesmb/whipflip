import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const pegasus = createApi({
  reducerPath: "pegasus",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_PEGASUS_API,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "multipart/form-data");
      return headers;
    },
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
    pegasusUpload: builder.mutation({
      query: ({ data, token }) => {
        return {
          url: `/api/get_predictions_multi`,
          method: "POST",
          body: data,
          formData: true,
          headers: {
            Authorization: "Bearer " + token,
          },
        };
      },
    }),
  }),
});

export const { usePegasusLoginMutation, usePegasusUploadMutation } = pegasus;
