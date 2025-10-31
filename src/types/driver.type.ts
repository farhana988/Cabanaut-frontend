import type { RideStatus } from "./ride.type";

export interface Location {
  lat: number;
  lng: number;
  address: string;
}

export interface IDriverRide {
  _id: string;
  rider: string;
  driver: string;
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
  createdAt: string;
  updatedAt: string;
}
