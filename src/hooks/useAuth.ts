import { useNavigate } from "react-router";
import {
  authApi,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
} from "@/redux/feature/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { showErrorToast, showSuccessToast } from "@/utils/toast";

export const useAuth = () => {
  const [registerMutation, { isLoading: isRegistering, error: registerError }] =
    useRegisterMutation();
  const [login, { isLoading: isLoggingIn, error: loginError }] =
    useLoginMutation();
  const [logout, { isLoading: isLoggingOut, error: logoutError }] =
    useLogoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //  handles user registration
  const handleRegister = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const result = await registerMutation(data).unwrap();
      const userName = result?.data?.name || "user";

      showSuccessToast(
        "Registration Successful",
        `Welcome, ${userName}! Your account has been created.`
      );
      navigate("/login");
      return result;
    } catch (err) {
      console.error("Registration failed:", err);
      showErrorToast(
        "Registration Failed",
        "Something went wrong. Please try again."
      );
      throw err;
    }
  };
  //   handles user login
  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      const result = await login(data).unwrap();
      const userName = result?.data?.user?.name || "user";
      const block = result?.data?.user?.isBlocked === true;
   
      showSuccessToast("Login Successful", `Welcome back, ${userName}!`);

      if (block) {
        navigate("/user-blocked");
      } else {
        navigate("/");
      }

      return result;
    } catch (err) {
      console.error("Login failed:", err);
      showErrorToast("Login Failed", "Invalid email or password.");
      throw err;
    }
  };
  // handles user logout
  const handleLogout = async () => {
    try {
      await logout(undefined).unwrap();
      dispatch(authApi.util.resetApiState());
      navigate("/login");
      showSuccessToast("Logged Out", "You have successfully logged out.");
    } catch (err) {
      console.error("Logout failed:", err);
      showErrorToast(
        "Logout Failed",
        "Something went wrong. Please try again."
      );
    }
  };

  return {
    handleLogin,
    handleRegister,
    handleLogout,
    isLoggingIn,
    loginError,
    isRegistering,
    registerError,
    isLoggingOut,
    logoutError,
  };
};
