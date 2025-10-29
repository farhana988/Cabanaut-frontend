import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authApi, useLogoutMutation } from "@/redux/feature/auth/auth.api";
import { useUserInfoQuery } from "@/redux/feature/user/user.api";
import { useAppDispatch } from "@/redux/hook";
import { User } from "lucide-react";
import { Link } from "react-router";

const AuthButton = () => {
  const { data } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
  };
  const user = data?.data;
  const defaultAvatar = "/src/assets/images/defaultUser.png";
  return (
    <>
      {user?.email ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-snow-white"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={user?.avatarUrl || defaultAvatar}
                  alt={user?.email}
                />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-40 bg-custom-secondary mt-2 border-none text-snow-whites"
          >
            <DropdownMenuItem>
              <Link to={"/dashboard"}>Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link to={"/login"}>
          <Button
            size={"sm"}
            className="bg-snow-white text-black hover:text-snow-white 
                  dark:hover:text-black rounded-full font-semibold"
          >
            Login
          </Button>
        </Link>
      )}
    </>
  );
};

export default AuthButton;
