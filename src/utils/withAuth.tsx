import { useCurrentUser } from "@/hooks/useCurrentUser";
import type { TRole } from "@/types/sidebar.type";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
  return function AuthWrapper() {
    const { user, isLoading } = useCurrentUser();

    if (!isLoading && !user?.email) {
      return <Navigate to="/login" />;
    }

    if (requiredRole && !isLoading && requiredRole !== user?.role) {
      return <Navigate to="/unauthorized" />;
    }

    return <Component />;
  };
};
