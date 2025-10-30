import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { dashboardLinks } from "@/data/dashboardLinks";
import { useAuth } from "@/hooks/useAuth";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { LogOut, User } from "lucide-react";
import { Link } from "react-router";

const AuthButton = () => {
  const { user } = useCurrentUser();
  const { handleLogout } = useAuth();

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
            {dashboardLinks
              .filter((link) => link.role === user?.role)
              .map((link) => (
                <DropdownMenuItem
                  key={link.href}
                  asChild
                  className="text-snow-white hover:text-black cursor-pointer"
                >
                  <Link to={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}

            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
              <span className="text-error font-bold">Logout</span>
            </DropdownMenuItem>
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
