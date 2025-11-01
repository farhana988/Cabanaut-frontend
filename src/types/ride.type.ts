export interface Location {
  lat: number;
  lng: number;
  address: string;
}

export type RideStatus =
  | "REQUESTED"
  | "ACCEPTED"
  | "PICKED_UP"
  | "IN_TRANSIT"
  | "COMPLETED"
  | "CANCELLED"
  | "REJECTED";

export interface IRide {
  _id: string;
  rider: string;
  driver?: string | null;
  pickupLocation: Location;
  destinationLocation: Location;
  status: RideStatus;
  fare: number;
  timestampsLog: {
    requestedAt: Date;
    acceptedAt?: Date;
    pickedUpAt?: Date;
    completedAt?: Date;
    cancelledAt?: Date;
  };
}

export interface RideCardProps {
  ride: IRide;
}

export interface RideStatusButtonProps {
  ride: IRide;
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  onUpdateStatus: (id: string, status: string) => void;
}


export interface RideFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  statusFilter: string | "";
  setStatusFilter: (value: string) => void;
  fareRange: [number, number];
  setFareRange: (value: [number, number]) => void;
  dateRange: [Date | null, Date | null];
  setDateRange: (value: [Date | null, Date | null]) => void;
}