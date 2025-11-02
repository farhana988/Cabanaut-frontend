import { baseApi } from "@/redux/baseApi";

export const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    driverRegister: builder.mutation({
      query: (driverInfo) => ({
        url: "/driver/register",
        method: "POST",
        data: driverInfo,
      }),
    }),

    driverOnlineStatus: builder.mutation({
      query: (data) => ({
        url: `/driver/is-online`,
        method: "PATCH",
        data: data,
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
        url: `/driver/update-status/${id}`,
        method: "PATCH",
        data: { status },
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
  useDriverRegisterMutation,
  useDriverOnlineStatusMutation,
  useAcceptRideMutation,
  useRejectRideMutation,
  useUpdateRideStatusMutation,
  useGetDriverEarningHistoryQuery,
} = driverApi;
