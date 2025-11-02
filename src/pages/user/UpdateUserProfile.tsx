import LoadingPage from "@/components/shared/LoadingPage";
import { Form } from "@/components/ui/form";
import { FormFieldInput } from "@/components/shared/FormField";
import SubmitButton from "@/components/buttons/SubmitButton";
import { useUpdateUserProfile } from "@/hooks/useUpdateUserProfile";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useDriverOnlineStatusMutation } from "@/redux/feature/driver/driver.api";
import SectionHeader from "@/components/shared/SectionHeader";
import { useEffect, useState } from "react";

const UpdateUserProfile = () => {
  const { form, isUserLoading, isUpdating, onSubmit } = useUpdateUserProfile();
  const { user } = useCurrentUser();
  // console.log(user.driverInfo);
  const [updateDriverStatus, { isLoading: isStatusUpdating }] =
    useDriverOnlineStatusMutation();

  // ⚡ Local state to reflect current online/offline status
  const [isOnline, setIsOnline] = useState<boolean>(
    user?.driverInfo?.isOnline ?? false
  );

  // ⚡ Keep local state in sync if user data changes
  useEffect(() => {
    if (user?.driverInfo?.isOnline !== undefined) {
      setIsOnline(user.driverInfo.isOnline);
    }
  }, [user]);

  const handleToggleOnlineStatus = async () => {
    if (!user.driverInfo) return;

    const newStatus = !isOnline; // ⚡ Toggle the current local value
    setIsOnline(newStatus); // ⚡ Optimistic update: update UI immediately

    try {
      const result = await updateDriverStatus({ isOnline: newStatus }).unwrap();
      console.log("Driver status updated:", result);
    } catch (error) {
      console.error("Failed to update online status:", error);
      // ⚡ Revert if server request fails
      setIsOnline(!newStatus);
    }
  };

  if (isUserLoading) {
    return <LoadingPage />;
  }
  return (
    <>
      <SectionHeader title="Update User Profile" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <section className="grid md:grid-cols-2 gap-4">
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
          </section>

          <FormFieldInput
            control={form.control}
            name="address"
            label="Address"
            placeholder="Enter your address"
          />

          {user.driverInfo && (
            <>
              <section className="grid md:grid-cols-2 gap-4">
                <FormFieldInput
                  control={form.control}
                  name="nationalId"
                  label="National Id"
                  placeholder="Enter your National Id"
                />
                <FormFieldInput
                  control={form.control}
                  name="licenseNumber"
                  label="License Number"
                  placeholder="Enter your License Number"
                />
              </section>
              <section className="grid md:grid-cols-2 gap-4">
                <FormFieldInput
                  control={form.control}
                  name="vehicleType"
                  label="Vehicle Type"
                  placeholder="Enter your Vehicle Type"
                />
                <FormFieldInput
                  control={form.control}
                  name="vehicleModel"
                  label="Vehicle Model"
                  placeholder="Enter your Vehicle Model"
                />
              </section>
              <section className="grid md:grid-cols-2 gap-4">
                <FormFieldInput
                  control={form.control}
                  name="vehiclePlateNumber"
                  label="Vehicle PlateNumber"
                  placeholder="Enter your Vehicle PlateNumber"
                />
                {/* Toggle Switch for Active Status */}
                <div className="flex items-center space-x-2">
                  <span>{isOnline ? "Online" : "Offline"}</span>
                  <button
                    type="button"
                    onClick={handleToggleOnlineStatus}
                    disabled={isStatusUpdating}
                    className={`px-4 py-2 text-white rounded disabled:opacity-50 ${
                      isOnline
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    {isOnline ? "Go Offline" : "Go Online"}
                  </button>
                </div>
              </section>
            </>
          )}

          <SubmitButton text="Update" isLoading={isUpdating} />
        </form>
      </Form>
    </>
  );
};

export default UpdateUserProfile;
