import { useResetPasswordMutation } from "@/redux/feature/auth/auth.api";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

export const useChangePassword = () => {
  const [resetPassword, { isLoading: isResetting }] =
    useResetPasswordMutation();
  const form = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await resetPassword({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      }).unwrap();
      showSuccessToast("Password changed successfully!");
      form.reset();
    } catch {
      showErrorToast("Something went wrong");
    }
  };

  return {
    form,
    onSubmit,
    isResetting,
  };
};
