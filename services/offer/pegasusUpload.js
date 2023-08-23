import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const pegasusUpload = createApi({
  reducerPath: "pegasus",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_PEGASUS_API,
  }),
  endpoints: (builder) => ({
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

export const { usePegasusUploadMutation } = pegasusUpload;
