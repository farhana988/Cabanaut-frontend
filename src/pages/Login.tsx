import LoginForm from "@/components/forms/LoginForm";
import Logo from "@/components/Layout/navbar/Logo";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-6 p-6 md:p-10">
        <div className="flex justify-center">
          <Logo />
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
