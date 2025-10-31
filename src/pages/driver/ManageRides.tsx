import ManageRideCards from "@/components/cards/ManageRideCards";
import { useGetAllRideListQuery } from "@/redux/feature/rider/rider.api";
import type { IRide } from "@/types/ride.type";

const ManageRides = () => {
  const { data } = useGetAllRideListQuery(undefined);

  return (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {data?.data?.map((ride: IRide) => (
        <ManageRideCards key={ride._id} ride={ride} />
      ))}
    </div>
  );
};

export default ManageRides;
