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
    },
  });

  // Reset form when user data is fetched
  useEffect(() => {
    if (user) {
      form.reset({
        name: user.name ?? "",
        phone: user.phone ?? "",
        address: user.address ?? "",
      });
    }
  }, [user, form]);

  const onSubmit: SubmitHandler<UpdateProfileFormValues> = async (data) => {
    if (!user) return;

    const userId = user._id;
    const userData = {
      name: data.name ?? user?.name ?? "",
      phone: data.phone ?? user?.phone ?? "",
      address: data.address ?? user?.address ?? "",
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
