import { baseApi } from "@/redux/baseApi";

export const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (driverInfo) => ({
        url: "/driver/register",
        method: "POST",
        data: driverInfo,
      }),
    }),

    driverOnlineStatus: builder.mutation({
      query: () => ({
        url: `/driver/is-online`,
        method: "PATCH",
      }),
      invalidatesTags: ["RIDE"],
    }),

    acceptRide: builder.mutation({
      query: (id) => ({
        url: `/driver/accept/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["RIDE"],
    }),

    rejectRide: builder.mutation({
      query: (id) => ({
        url: `/driver/reject/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["RIDE"],
    }),
    updateRideStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/driver/status/${id}`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["RIDE"],
    }),
    getDriverEarningHistory: builder.query({
      query: () => ({
        url: "/driver/earnings",
        method: "GET",
      }),
      providesTags: ["DRIVER"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useDriverOnlineStatusMutation,
  useAcceptRideMutation,
  useRejectRideMutation,
  useUpdateRideStatusMutation,
  useGetDriverEarningHistoryQuery,
} = driverApi;
