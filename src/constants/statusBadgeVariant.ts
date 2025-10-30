import type { RideStatus } from "@/types/ride.type";

export const statusBadgeVariant: Record<
  RideStatus,
  "requested" | "accepted" | "picked_up" | "in_transit" | "success" | "warning"
> = {
  REQUESTED: "requested",
  ACCEPTED: "accepted",
  PICKED_UP: "picked_up",
  IN_TRANSIT: "in_transit",
  COMPLETED: "success",
  CANCELLED: "warning",
  REJECTED: "warning",
};
