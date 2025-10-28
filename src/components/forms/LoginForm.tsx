import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useLoginMutation } from "@/redux/feature/auth/auth.api";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { FormFieldInput } from "../shared/FormField";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
const LoginForm = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const navigate = useNavigate();
  const form = useForm();
  const [login] = useLoginMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    try {
      const result = await login(data).unwrap();
      showSuccessToast(
        "Login Successful",
        `Welcome back, ${result.name || "user"}!`
      );
      console.log(result);
      navigate("/");
    } catch (err) {
      console.error(err);
      showErrorToast("Login Failed", "Invalid email or password.");
    }
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
              Login
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
