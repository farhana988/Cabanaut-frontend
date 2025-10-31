import LoadingPage from "@/components/shared/LoadingPage";
import { Form } from "@/components/ui/form";
import { FormFieldInput } from "@/components/shared/FormField";
import SubmitButton from "@/components/buttons/SubmitButton";
import { useUpdateUserProfile } from "@/hooks/useUpdateUserProfile";

const UpdateUserProfile = () => {
  const { form, isUserLoading, isUpdating, onSubmit } = useUpdateUserProfile();

  if (isUserLoading) {
    return <LoadingPage />;
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormFieldInput
          control={form.control}
          name="name"
          label="Full Name"
          placeholder="Enter your full name"
        />

        <FormFieldInput
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="Enter your phone number"
        />

        <FormFieldInput
          control={form.control}
          name="address"
          label="Address"
          placeholder="Enter your address"
        />

        <SubmitButton text="Update" isLoading={isUpdating} />
      </form>
    </Form>
  );
};

export default UpdateUserProfile;
