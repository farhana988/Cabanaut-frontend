import { useBookRide } from "@/hooks/useBookRide";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FormFieldInput } from "../shared/FormField";
import { Form } from "@/components/ui/form";
import SubmitButton from "../buttons/SubmitButton";
export type BookRideFormValues = {
  pickupAddress: string;
  destinationAddress: string;
};

const BookRideForm = () => {
  const form = useForm<BookRideFormValues>();
  const { book, isLoading } = useBookRide();

  const onSubmit: SubmitHandler<BookRideFormValues> = async (data) => {
    const success = await book(data);
    if (success) form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FormFieldInput
          control={form.control}
          name="pickupAddress"
          label="Pickup Address"
          placeholder="Enter your pickup point"
          rules={{ required: "Pickup address is required" }}
        />

        <FormFieldInput
          control={form.control}
          name="destinationAddress"
          label="Destination Address"
          placeholder="Enter your destination"
          rules={{ required: "Destination address is required" }}
        />

        <SubmitButton text="Book Ride" isLoading={isLoading} />
      </form>
    </Form>
  );
};

export default BookRideForm;
