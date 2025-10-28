import RegisterForm from "@/components/forms/RegisterForm";
import Logo from "@/components/Layout/navbar/Logo";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="flex flex-col gap-6 p-6 md:p-10 ">
        <div className="flex justify-center">
          <Logo />
        </div>

        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
