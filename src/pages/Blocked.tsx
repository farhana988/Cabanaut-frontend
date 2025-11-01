import ReusableTextArea from "@/components/shared/ReusableTextArea";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router";

const Blocked = () => {
  return (
    <div
      className="mt-10 flex flex-col items-center justify-center
     "
    >
      <img src="/src/assets/images/block.png" alt="Account Blocked" />

      <div className=" text-center max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-error mb-4">
          Account Restricted
        </h1>

        <p className="opacity-80 mb-6">
          Your account has been{" "}
          <span className="font-semibold">blocked or suspended</span>.
        </p>

        <p className="opacity-80 mb-8">
          You can’t access your dashboard at this time. Please contact our
          support team if you believe this is a mistake or to resolve the issue.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Dialog>
            <DialogTrigger>
              {" "}
              <Button variant="destructive" className="w-full">
                Contact Support
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Contact Support</DialogTitle>
                <DialogDescription>
                  Please describe your issue, and our support team will reach
                  out to you.
                </DialogDescription>
              </DialogHeader>

              <ReusableTextArea
                label="Describe Your Issue"
                placeholder="Write your message here..."
                rows={6}
                id="contact"
                required
              />
              <DialogFooter>
                <Button>Send Message</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blocked;
