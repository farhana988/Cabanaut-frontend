import { useForm, type SubmitHandler } from "react-hook-form";
import LoadingPage from "@/components/shared/LoadingPage";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { Form } from "@/components/ui/form";
import { FormFieldInput } from "@/components/shared/FormField";
import SubmitButton from "@/components/buttons/SubmitButton";
import { useUpdateProfileMutation } from "@/redux/feature/user/user.api";
import { showSuccessToast, showErrorToast } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router";

// Form Validation Schema using Zod
const UpdateProfileSchema = z.object({
  name: z.string().optional(),
  phone: z
    .string()
    .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
      message:
        "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    })
    .optional(),
  address: z.string().optional(),
});

type UpdateProfileFormValues = z.infer<typeof UpdateProfileSchema>;

const UpdateUserProfile = () => {
  const navigate = useNavigate();
  const form = useForm<UpdateProfileFormValues>({
    resolver: zodResolver(UpdateProfileSchema),
  });
  const { user, isLoading: isUserLoading } = useCurrentUser();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();

  if (isUserLoading) {
    return <LoadingPage />;
  }

  const onSubmit: SubmitHandler<UpdateProfileFormValues> = async (data) => {
    if (user) {
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
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormFieldInput
          control={form.control}
          name="name"
          label="Full Name"
          placeholder="Enter your full name"
          defaultValue={user?.name ?? ""}
        />

        <FormFieldInput
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="Enter your phone number"
          defaultValue={user?.phone ?? ""}
        />

        <FormFieldInput
          control={form.control}
          name="address"
          label="Address"
          placeholder="Enter your address"
          defaultValue={user?.address ?? ""}
        />

        <SubmitButton text="Update" isLoading={isUpdating} />
      </form>
    </Form>
  );
};

export default UpdateUserProfile;
