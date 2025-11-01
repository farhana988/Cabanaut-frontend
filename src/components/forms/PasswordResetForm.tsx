/* eslint-disable @typescript-eslint/no-explicit-any */

import { Form } from "../ui/form";
import { FormFieldInput } from "../shared/FormField";
import SubmitButton from "../buttons/SubmitButton";
import { useChangePassword } from "@/hooks/useChangePassword";

const PasswordResetForm = () => {
  const { form, onSubmit, isResetting } = useChangePassword();
  return (
    <div className="grid gap-6 w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormFieldInput
            control={form.control}
            name="oldPassword"
            label="Current Password"
            type="password"
            placeholder="********"
            rules={{ required: "Current password is required" }}
          />

          <FormFieldInput
            control={form.control}
            name="newPassword"
            label="New Password"
            type="password"
            placeholder="********"
            rules={{ required: "New password is required" }}
          />

          <FormFieldInput
            control={form.control}
            name="confirmNewPassword"
            label="Confirm New Password"
            type="password"
            placeholder="********"
            rules={{
              required: "Please confirm your new password",
              validate: (value: any) =>
                value === form.getValues("newPassword") ||
                "Passwords do not match",
            }}
          />

          <SubmitButton text="Change Password" isLoading={isResetting} />
        </form>
      </Form>
    </div>
  );
};

export default PasswordResetForm;
