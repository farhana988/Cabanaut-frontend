import { useBlockUserMutation } from "@/redux/feature/admin/admin.api";
import { showErrorToast, showSuccessToast } from "@/utils/toast";

export const useUserManagement = () => {
  const [blockUser, { isLoading: isBlocking }] = useBlockUserMutation();

  const handleBlockUser = async (id: string) => {
    try {
      await blockUser(id).unwrap();
      showSuccessToast("User blocked successfully!");
    } catch {
      showErrorToast("Failed to block user", "Please try again later.");
    }
  };

  return {
    isBlocking,
    handleBlockUser,
  };
};
