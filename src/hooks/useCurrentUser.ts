import { useUserInfoQuery } from "@/redux/feature/user/user.api";

export const useCurrentUser = () => {
  const { data, error, isLoading, refetch } = useUserInfoQuery(undefined);

  const user = data?.data;

  return {
    user,
    error,
    isLoading,
    refetch,
  };
};
