import { baseApi } from "../../baseApi";

export const riderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    bookingRide: builder.mutation({
      query: (rideInfo) => ({
        url: "/ride/book-ride",
        method: "POST",
        data: rideInfo,
      }),
      invalidatesTags: ["RIDE"],
    }),

    cancelRide: builder.mutation({
      query: ({ id, status }) => ({
        url: `/ride/cancel/${id}`,
        method: "PATCH",
        data: { status },
      }),
      invalidatesTags: ["RIDE"],
    }),

    getViewRideHistory: builder.query({
      query: () => ({
        url: "/ride/ride-history",
        method: "GET",
      }),
      providesTags: ["RIDER", "RIDE"],
    }),

    getAllRideList: builder.query({
      query: () => ({
        url: "/ride/all-rides-list",
        method: "GET",
      }),
      providesTags: ["RIDE"],
    }),
  }),
});

export const {
  useBookingRideMutation,
  useCancelRideMutation,
  useGetViewRideHistoryQuery,
  useGetAllRideListQuery,
} = riderApi;
