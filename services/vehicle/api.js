import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const vehicle = createApi({
  reducerPath: "vehicle",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["vehicle"],
  endpoints: (builder) => ({
    getVehicleById: builder.query({
      query: (id) => {
        return {
          url: `/vehicles?vehicleID=${id}`,
          method: "GET",
        };
      },
    }),
    getYears: builder.query({
      query: () => {
        return {
          url: `/vehicles/years`,
          method: "GET",
        };
      },
    }),
    getMakes: builder.query({
      query: (year) => {
        return {
          url: `/vehicles/makes`,
          method: "GET",
          params: {
            year,
          },
        };
      },
    }),
    getModels: builder.query({
      query: ({ make, year }) => {
        return {
          url: `/vehicles/models`,
          method: "GET",
          params: {
            make,
            year,
          },
        };
      },
    }),
    getTrims: builder.query({
      query: ({ make, year, model }) => {
        return {
          url: `/vehicles/trims`,
          method: "GET",
          params: {
            make,
            year,
            model,
          },
        };
      },
    }),
    updateVehicleByID: builder.mutation({
      query: ({ params, id }) => {
        return {
          url: `/vehicle/id`,
          method: "PUT",
          body: params,
        };
      },
      invalidatesTags: ["reports", "vehicle"],
    }),
    deleteVehicleByID: builder.mutation({
      query: ({ id }) => {
        return {
          url: `/agency/id`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["reports", "vehicle"],
    }),
    createVehicle: builder.mutation({
      query: ({ params }) => {
        return {
          url: `/vehicle`,
          method: "POST",
          body: params,
        };
      },
      invalidatesTags: ["reports"],
    }),
  }),
});

export const {
  useGetVehicleByIdQuery,
  useGetYearsQuery,
  useGetMakesQuery,
  useGetModelsQuery,
  useGetTrimsQuery,
  useGetVehicleIDQuery,
  useDeleteVehicleByIDMutation,
  useGetVehiclesQuery,
  useUpdateVehicleByIDMutation,
  useCreateVehicleMutation,
} = vehicle;
