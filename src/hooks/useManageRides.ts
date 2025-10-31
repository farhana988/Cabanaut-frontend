import {
  useAcceptRideMutation,
  useRejectRideMutation,
  useUpdateRideStatusMutation,
} from "@/redux/feature/driver/driver.api";

export const useManageRides = () => {
  const [acceptRide] = useAcceptRideMutation();
  const [rejectRide] = useRejectRideMutation();
  const [updateRideStatus] = useUpdateRideStatusMutation();

  const handleAccept = async (id: string) => {
    try {
      const res = await acceptRide(id).unwrap();
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleReject = async (id: string) => {
    try {
      const res = await rejectRide(id).unwrap();
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      const res = await updateRideStatus({ id, status }).unwrap();
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { handleAccept, handleReject, handleUpdateStatus };
};
