import ManageRideCards from "@/components/cards/ManageRideCards";
import SectionHeader from "@/components/shared/SectionHeader";
import { useGetAllRideListQuery } from "@/redux/feature/rider/rider.api";
import type { IRide } from "@/types/ride.type";

const ManageRides = () => {
  const { data } = useGetAllRideListQuery(undefined);

  return (
    <>
      <SectionHeader title="Manage All Rides" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {data?.data?.map((ride: IRide) => (
          <ManageRideCards key={ride._id} ride={ride} />
        ))}
      </div>
    </>
  );
};

export default ManageRides;
