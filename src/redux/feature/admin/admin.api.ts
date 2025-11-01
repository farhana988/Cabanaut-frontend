import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    driverApprovedStatus: builder.mutation({
      query: (id) => ({
        url: `/user/approved-driver-status/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["ADMIN"],
    }),
    blockUser: builder.mutation({
      query: (id) => ({
        url: `/user/block-user/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["ADMIN"],
    }),
    driverSuspendStatus: builder.mutation({
      query: (id) => ({
        url: `/user/suspended-driver-status/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["ADMIN"],
    }),

    getAllDrivers: builder.query({
      query: () => ({
        url: "/user/all-drivers",
        method: "GET",
      }),
      providesTags: ["ADMIN"],
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: "/user/all-users",
        method: "GET",
      }),
      providesTags: ["ADMIN"],
    }),
  }),
});

export const {
  useGetAllDriversQuery,
  useDriverApprovedStatusMutation,
  useDriverSuspendStatusMutation,
  useGetAllUsersQuery,
  useBlockUserMutation,
} = adminApi;
