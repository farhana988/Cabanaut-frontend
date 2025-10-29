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
        body: { status },
      }),
      invalidatesTags: ["RIDE"],
    }),
    getViewRideHistory: builder.query({
      query: () => ({
        url: "/ride/view-ride-history",
        method: "GET",
      }),
      providesTags: ["RIDER"],
    }),
  }),
});

export const {
  useBookingRideMutation,
  useCancelRideMutation,
  useGetViewRideHistoryQuery,
} = riderApi;
