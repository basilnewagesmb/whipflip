import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const pegasus = createApi({
  reducerPath: "pegasus",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_PEGASUS_API,
  }),
  endpoints: (builder) => ({
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

export const { usePegasusUploadMutation } = pegasus;
