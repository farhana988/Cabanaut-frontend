import LoadingPage from "@/components/shared/LoadingPage";
import NoDataFound from "@/components/shared/NoDataFound";
import SectionHeader from "@/components/shared/SectionHeader";
import UserManagementTable from "@/components/tables/UserManagementTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUserManagementSearchAndFilter } from "@/hooks/useUserManagementSearchAndFilter";
import { useGetAllUsersQuery } from "@/redux/feature/admin/admin.api";
import type { IUser } from "@/types/user.type";
import { Search, Undo2, ChevronLeft, ChevronRight } from "lucide-react";

const UserManagement = () => {
  const { data, isLoading } = useGetAllUsersQuery(undefined);
  const users = data?.data || [];

  const {
    searchQuery,
    setSearchQuery,
    roleFilter,
    setRoleFilter,
    currentPage,
    totalPages,
    paginatedUsers,
    reset,
    goToPage,
  } = useUserManagementSearchAndFilter({ users, usersPerPage: 10 });

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <>
      <SectionHeader title="User Management" />
      {/* Search and Filter */}
      <div className="flex gap-4 mb-4">
        {/* Search */}
        <div className="relative w-full md:w-1/2 bg-white dark:bg-black">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5
           h-5"
          />
          <Input
            placeholder="Search by Name or Email"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select
          value={roleFilter}
          onValueChange={(value) => setRoleFilter(value)}
        >
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="SUPER_ADMIN">Admin</SelectItem>
            <SelectItem value="RIDER">Rider</SelectItem>
            <SelectItem value="DRIVER">Driver</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" onClick={reset}>
          <Undo2 />
        </Button>
      </div>

      {paginatedUsers.length > 0 ? (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                {["Name", "Email", "Role", "Block Status", "Actions"].map(
                  (header, index) => (
                    <TableHead className="text-center" key={index}>
                      {header}
                    </TableHead>
                  )
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedUsers.map((user: IUser) => (
                <UserManagementTable key={user._id} user={user} />
              ))}
            </TableBody>
          </Table>

          {/* Pagination Controls */}
          <div className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
            >
              <ChevronLeft />
            </Button>
            <span className="flex items-center px-2">
              {currentPage} / {totalPages}
            </span>
            <Button
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
            >
              <ChevronRight />
            </Button>
          </div>
        </>
      ) : (
        <NoDataFound />
      )}
    </>
  );
};

export default UserManagement;
