import {
  useDriverApprovedStatusMutation,
  useDriverSuspendStatusMutation,
} from "@/redux/feature/admin/admin.api";
import { showErrorToast, showSuccessToast } from "@/utils/toast";

export const useDriverStatusActions = () => {
  const [approvedStatus] = useDriverApprovedStatusMutation();
  const [suspendStatus] = useDriverSuspendStatusMutation();

  const handleStatusChange = async (id: string, value: string) => {
    try {
      if (value === "APPROVED") {
        await approvedStatus(id);
        showSuccessToast("Driver approved successfully!");
      } else if (value === "SUSPENDED") {
        await suspendStatus(id);
        showSuccessToast("Driver suspended successfully!");
      } else {
        showErrorToast(
          "Invalid status action",
          "Unknown status type provided."
        );
      }
    } catch {
      showErrorToast("Failed to change status", "Please try again later.");
    }
  };

  return { handleStatusChange };
};
