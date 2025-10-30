import { useCancelRideMutation } from "@/redux/feature/rider/rider.api";
import { showErrorToast, showSuccessToast } from "@/utils/toast";

export const useCancelRide = () => {
  const [cancelRide, { isLoading: cancelLoading }] = useCancelRideMutation();

  const cancel = async (id: string) => {
    try {
      await cancelRide({ id, status: "CANCELLED" }).unwrap();
      showSuccessToast("Ride CANCELLED successfully!");
    } catch (err) {
      console.error("Cancel failed:", err);
      showErrorToast("Failed to cancel ride");
    }
  };

  return { cancel, cancelLoading };
};
