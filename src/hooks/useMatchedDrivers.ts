import {
  useGetAllDriversQuery,
  useGetAllUsersQuery,
} from "@/redux/feature/admin/admin.api";
import type { IDriver } from "@/types/driver.type";

export const useMatchedDrivers = () => {
  const { data: userData } = useGetAllUsersQuery(undefined);
  const { data, isLoading } = useGetAllDriversQuery(undefined);

  const matchedDrivers =
    data?.data
      ?.map((driver: IDriver) => {
        const matchedUser = userData?.data?.find(
          (user: { _id: string }) => user._id === driver.user
        );
        if (matchedUser) {
          return {
            ...driver,
            userName: matchedUser.name,
            userEmail: matchedUser.email,
          };
        }
        return null;
      })
      .filter(Boolean) || [];

  return { matchedDrivers, isLoading };
};
