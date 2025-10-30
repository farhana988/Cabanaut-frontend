import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router";
import { FormFieldInput } from "../shared/FormField";
import { useAuth } from "@/hooks/useAuth";
import SpinnerButton from "../buttons/SpinnerButton";

const LoginForm = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const form = useForm();
  const { handleLogin, isLoggingIn } = useAuth();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await handleLogin(data as { email: string; password: string });
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6 w-96">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormFieldInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="john@example.com"
            />

            <FormFieldInput
              control={form.control}
              name="password"
              label="Password"
              type="password"
              placeholder="********"
            />

            <Button type="submit" className="w-full">
              {isLoggingIn ? <SpinnerButton /> : "Login"}
            </Button>
          </form>
        </Form>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/register" replace className="underline underline-offset-4">
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
