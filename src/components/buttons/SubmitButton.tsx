import { LoaderCircle } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading?: boolean;
}
const SubmitButton = ({
  text,
  isLoading = false,
  className,
  ...props
}: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      size={"sm"}
      className={cn(
        ` bg-custom-secondary text-white rounded-full font-semibold w-full`,
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? <LoaderCircle className="h-5 w-5 animate-spin" /> : text}
    </Button>
    
  );
};

export default SubmitButton;
