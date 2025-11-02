import { showErrorToast } from "@/utils/toast";
import { showSuccessToast } from "@/utils/toast";
import { useUpdateProfileMutation } from "@/redux/feature/user/user.api";
import {
  UpdateProfileSchema,
  type UpdateProfileFormValues,
} from "../schemas/userProfile.schema";
import { useCurrentUser } from "./useCurrentUser";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export const useUpdateUserProfile = () => {
  const navigate = useNavigate();
  const { user, isLoading: isUserLoading } = useCurrentUser();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();

  const form = useForm<UpdateProfileFormValues>({
    resolver: zodResolver(UpdateProfileSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      nationalId: "",
      licenseNumber: "",
      vehicleType: "",
      vehicleModel: "",
      vehiclePlateNumber: "",
    },
  });

  // Reset form when user data is fetched
  useEffect(() => {
    if (user) {
      form.reset({
        name: user.name ?? "",
        phone: user.phone ?? "",
        address: user.address ?? "",
        nationalId: user?.driverInfo?.nationalId ?? "",
        licenseNumber: user?.driverInfo?.licenseNumber ?? "",
        vehicleType: user?.driverInfo?.vehicle?.make ?? "",
        vehicleModel: user?.driverInfo?.vehicle?.model ?? "",
        vehiclePlateNumber: user?.driverInfo?.vehicle?.plateNumber ?? "",
      });
    }
  }, [user, form]);

  const onSubmit: SubmitHandler<UpdateProfileFormValues> = async (data) => {
    if (!user) return;

    const userId = user._id;
    const userData = {
      name: data.name || user?.name || "",
      phone: data.phone || user?.phone || "",
      address: data.address || user?.address || "",
      driverInfo: {
        nationalId: data.nationalId || user?.driverInfo?.nationalId || "",
        licenseNumber:
          data.licenseNumber || user?.driverInfo?.licenseNumber || "",
        vehicle: {
          make: data.vehicleType || user?.driverInfo?.vehicle?.make || "",
          model: data.vehicleModel || user?.driverInfo?.vehicle?.model || "",
          plateNumber:
            data.vehiclePlateNumber ||
            user?.driverInfo?.vehicle?.plateNumber ||
            "",
        },
      },
    };

    try {
      await updateProfile({ id: userId, userData }).unwrap();
      showSuccessToast("Profile updated successfully!");
      navigate("/user/user-profile");
    } catch (error) {
      showErrorToast("Failed to update profile. Please try again.");
      console.error(error);
    }
  };

  return {
    form,
    user,
    isUserLoading,
    isUpdating,
    onSubmit,
  };
};
