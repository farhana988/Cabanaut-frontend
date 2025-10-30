import { cn } from "@/lib/utils";
import SectionHeader from "@/components/shared/SectionHeader";
import BookRideForm from "@/components/forms/BookRideForm";

const BookARide = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("", className)} {...props}>
      <SectionHeader title="Book a Ride" />
      <section className="flex flex-col md:flex-row gap-8">
        {/* LEFT SIDE TEXT */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-custom-secondary dark:text-snow-white font-medium">
            Ready to ride?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Book your <br /> next trip
          </h2>
          <p className="opacity-50 max-w-md">
            Fast, easy, and reliable, your ride is just a few clicks away. Let’s
            get you moving!
          </p>
        </div>
        {/* RIGHT SIDE FORM */}
        <section className=" w-full md:w-1/2 ">
          <BookRideForm />
        </section>
      </section>
    </div>
  );
};

export default BookARide;
