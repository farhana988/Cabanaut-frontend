import type { TRole } from "./sidebar.type";

export type IsActive = "Active " | "InActive" | "Blocked";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password?: string;
  phone?: string;
  picture?: string;
  address?: string;
  isBlocked?: boolean;
  isActive?: IsActive;
  isVerified?: boolean;
  role: TRole;
}
export interface UserManagementTableProps {
  user: IUser;
}
