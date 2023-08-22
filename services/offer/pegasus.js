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
          url: `/api/login`,
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
    pegasusUpload: builder.mutation({
      query: (data) => {
        return {
          url: `/api/get_predictions_multi`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { usePegasusLoginMutation, usePegasusUploadMutation } = pegasus;
