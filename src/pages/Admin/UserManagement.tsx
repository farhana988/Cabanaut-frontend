import LoadingPage from "@/components/shared/LoadingPage";
import NoDataFound from "@/components/shared/NoDataFound";
import SectionHeader from "@/components/shared/SectionHeader";
import UserManagementTable from "@/components/tables/UserManagementTable";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllUsersQuery } from "@/redux/feature/admin/admin.api";
import type { IUser } from "@/types/user.type";

const UserManagement = () => {
  const { data, isLoading } = useGetAllUsersQuery(undefined);
  console.log(data?.data);
  const user = data?.data;
  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }
  return (
    <>
      <SectionHeader title=" User Management" />
      {user.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              {["Name", "Email", "Role", "Block Status", "Actions"].map(
                (header, index) => (
                  <TableHead className="text-center" key={index}>
                    {" "}
                    {header}
                  </TableHead>
                )
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {user?.map((user: IUser) => (
              <UserManagementTable key={user?._id} user={user} />
            ))}
          </TableBody>
        </Table>
      ) : (
        <NoDataFound />
      )}
    </>
  );
};

export default UserManagement;
