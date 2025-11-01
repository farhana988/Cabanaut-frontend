/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useGetAllDriversQuery,
  useGetAllRidersQuery,
  useGetAllUsersQuery,
} from "@/redux/feature/admin/admin.api";
import { useGetAllRideListQuery } from "@/redux/feature/rider/rider.api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
} from "recharts";

import { User, Users, Truck } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const Analytics = () => {
  const { data: drivers } = useGetAllDriversQuery(undefined);
  const { data: riders } = useGetAllRidersQuery(undefined);
  const { data: users } = useGetAllUsersQuery(undefined);
  const { data: rides } = useGetAllRideListQuery(undefined);

  const summaryItems = [
    { label: "Total Drivers", value: drivers?.data?.length || 0, icon: Truck },
    { label: "Total Riders", value: riders?.data?.length || 0, icon: Users },
    { label: "Total Users", value: users?.data?.length || 0, icon: User },
  ];

  // Aggregate ride volume by date
  const rideVolumeData =
    rides?.data?.reduce(
      (acc: any[], ride: { createdAt: string | number | Date; fare: any }) => {
        const date = new Date(ride?.createdAt).toISOString().split("T")[0];
        const existing = acc.find((d) => d.date === date);
        if (existing) {
          existing.rides += 1;
          existing.revenue += ride.fare;
        } else {
          acc.push({ date, rides: 1, revenue: ride.fare });
        }
        return acc;
      },
      []
    ) || [];

  rideVolumeData.sort(
    (
      a: { date: string | number | Date },
      b: { date: string | number | Date }
    ) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <>
      <SectionHeader title="Dashboard Analytics " />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {summaryItems.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label} className=" flex items-center gap-4">
              <Icon className="w-5 h-5 " />
              <p className="text-4xl font-bold">{item.value}</p>
              <h2
                className="text-sm font-semibold opacity-70 bg-custom-accent/20 
              w-full text-center py-1"
              >
                {item.label}
              </h2>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <Tabs defaultValue="ride-volume">
        <TabsList>
          <TabsTrigger value="ride-volume">Ride Volume</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="ride-volume">
          <Card className="p-4 overflow-auto mt-4">
            <LineChart width={700} height={300} data={rideVolumeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="rides"
                stroke="#4f46e5"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </Card>
        </TabsContent>

        <TabsContent value="revenue">
          <Card className="p-4 overflow-auto">
            <BarChart width={700} height={300} data={rideVolumeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#10b981" />
            </BarChart>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Analytics;
