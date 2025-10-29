import type { ComponentType } from "react";

export interface ISidebarItems {
  title: string;
  items: {
    url: string;
    title: string;
    component: ComponentType;
  }[];
}
export type TRole = "SUPER_ADMIN" | "USER" | "ADMIN" | "DRIVER";