import ManageRideCards from "@/components/cards/ManageRideCards";
import NoDataFound from "@/components/shared/NoDataFound";
import SectionHeader from "@/components/shared/SectionHeader";
import { useGetAllRideListQuery } from "@/redux/feature/rider/rider.api";
import type { IRide } from "@/types/ride.type";

const ManageRides = () => {
  const { data } = useGetAllRideListQuery(undefined);
  const rides = data?.data;

  return (
    <>
      <SectionHeader title="Manage All Rides" />
      {rides?.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {rides?.map((ride: IRide) => (
            <ManageRideCards key={ride._id} ride={ride} />
          ))}
        </div>
      ) : (
        <NoDataFound />
      )}
    </>
  );
};

export default ManageRides;
