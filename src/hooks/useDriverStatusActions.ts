import {
  useDriverApprovedStatusMutation,
  useDriverSuspendStatusMutation,
} from "@/redux/feature/admin/admin.api";

export const useDriverStatusActions = () => {
  const [approvedStatus] = useDriverApprovedStatusMutation();
  const [suspendStatus] = useDriverSuspendStatusMutation();

  const handleStatusChange = async (id: string, value: string) => {
    try {
      if (value === "APPROVED") {
        await approvedStatus(id);
        alert("Driver approved successfully");
      } else if (value === "SUSPENDED") {
        await suspendStatus(id);
        alert("Driver suspended successfully");
      }
    } catch (error) {
      console.error("Status change failed:", error);
    }
  };

  return { handleStatusChange };
};
