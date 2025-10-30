import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useBookingRideMutation } from "@/redux/feature/rider/rider.api";
import { useNavigate } from "react-router";
import { showErrorToast, showSuccessToast } from "@/utils/toast";

type RideData = {
  pickupAddress: string;
  destinationAddress: string;
};

export const useBookRide = () => {
  const { user } = useCurrentUser();
  const [bookRide, { isLoading }] = useBookingRideMutation();
  const navigate = useNavigate();

  const book = async (data: RideData) => {
    if (!user?._id) {
      showErrorToast("User not logged in.");
      navigate("/login");
      return;
    }

    const rideData = {
      rider: user._id,
      pickupLocation: {
        lat: 23.75,
        lng: 90.39,
        address: data.pickupAddress,
      },
      destinationLocation: {
        lat: 23.81,
        lng: 90.43,
        address: data.destinationAddress,
      },
    };

    try {
      const res = await bookRide(rideData).unwrap();
      if (res?.success) {
        showSuccessToast(
          "Ride booked successfully!",
          "Please wait for a driver to arrive at your pickup location."
        );
        navigate("/rider/cancel-ride");
        return true;
      } else {
        showErrorToast("Failed to book ride. Please try again.");
        return false;
      }
    } catch (error) {
      console.error("Booking failed:", error);
      showErrorToast("Failed to book ride. Please try again.");
      return false;
    }
  };

  return { book, isLoading };
};
