/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDriverRegisterMutation } from "@/redux/feature/driver/driver.api";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import {
  driverRegisterSchema,
  type RegisterFormData,
} from "@/schemas/driverRegister.schema";

export const useDriverRegister = () => {
  const [driverRegister, { isLoading }] = useDriverRegisterMutation();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(driverRegisterSchema),
    defaultValues: {
      licenseNumber: "",
      nationalId: "",
      vehicle: { make: "", model: "", plateNumber: "" },
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await driverRegister(data).unwrap();
      showSuccessToast(
        "Request submitted successfully!",
        "Your request to become a driver has been sent for review. We’ll notify you once it’s approved."
      );
      form.reset();
    } catch (err: any) {
      if (err?.status === 400) {
        showErrorToast(
          "Request already submitted",
          "You’ve already requested to become a driver. Please wait for approval."
        );
        return;
      }
      showErrorToast(
        "Submission failed",
        "Something went wrong while submitting your request."
      );
    }
  };

  return { form, onSubmit, isLoading };
};
