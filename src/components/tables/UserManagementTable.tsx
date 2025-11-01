import { TableCell, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useUserManagement } from "@/hooks/useUserManagement";
import type { UserManagementTableProps } from "@/types/user.type";

const UserManagementTable = ({ user }: UserManagementTableProps) => {
  const { handleBlockUser } = useUserManagement();
  return (
    <TableRow className="text-center">
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.role}</TableCell>
      <TableCell>
        {user.isBlocked === true ? (
          <Badge variant={"warning"}>BLOCKED</Badge>
        ) : (
          <Badge variant={"success"}>ACTIVE</Badge>
        )}
      </TableCell>
      <TableCell>
        {!(user.role === "SUPER_ADMIN") && (
          <Button
            variant="destructive"
            size="sm"
            disabled={user.isBlocked === true}
            onClick={() => handleBlockUser(user._id)}
          >
            {user.isBlocked === false ? "Block" : "Blocked"}
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};

export default UserManagementTable;
