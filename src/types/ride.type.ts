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

export interface RideHistoryCardProps {
  ride: IRide;
}