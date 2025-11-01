import { useState, useMemo } from "react";
import type { IUser } from "@/types/user.type";

interface useUserManagementSearchAndFilterOptions {
  users: IUser[];
  usersPerPage?: number;
}

export const useUserManagementSearchAndFilter = ({
  users,
  usersPerPage = 10,
}: useUserManagementSearchAndFilterOptions) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter users by search and role
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRole = roleFilter ? user.role === roleFilter : true;
      return matchesSearch && matchesRole;
    });
  }, [users, searchQuery, roleFilter]);

  // Pagination calculations
  const totalUsers = filteredUsers.length;
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    return filteredUsers.slice(startIndex, endIndex);
  }, [filteredUsers, currentPage, usersPerPage]);

  // Reset filters and pagination
  const reset = () => {
    setSearchQuery("");
    setRoleFilter("");
    setCurrentPage(1);
  };

  // Change page
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return {
    searchQuery,
    setSearchQuery,
    roleFilter,
    setRoleFilter,
    currentPage,
    totalPages,
    paginatedUsers,
    reset,
    goToPage,
  };
};
