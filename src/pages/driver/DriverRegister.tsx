import SubmitButton from "@/components/buttons/SubmitButton";
import { FormFieldInput } from "@/components/shared/FormField";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useDriverRegister } from "@/hooks/useDriverRegister";

const DriverRegister = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { form, onSubmit, isLoading } = useDriverRegister();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Register as Driver</h1>
        <p className="text-sm text-muted-foreground">
          Enter your details to create an account
        </p>
      </div>

      <div className="grid gap-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormFieldInput
                control={form.control}
                name="licenseNumber"
                label="License Number"
                placeholder="AB123456"
              />
              <FormFieldInput
                control={form.control}
                name="nationalId"
                label="National ID"
                placeholder="1234567890"
              />
            </section>

            <h2 className="font-semibold mt-4">Vehicle Information</h2>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormFieldInput
                control={form.control}
                name="vehicle.make"
                label="Vehicle Make"
                placeholder="Toyota"
              />
              <FormFieldInput
                control={form.control}
                name="vehicle.model"
                label="Vehicle Model"
                placeholder="Corolla"
              />
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormFieldInput
                control={form.control}
                name="vehicle.plateNumber"
                label="Plate Number"
                placeholder="XYZ1234"
              />
            </section>

            <SubmitButton text="Register" isLoading={isLoading} />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default DriverRegister;
