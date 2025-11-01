import { Search, Undo2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import type { RideFiltersProps } from "@/types/ride.type";

const RideFilters = ({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  fareRange,
  setFareRange,
  dateRange,
  setDateRange,
}: RideFiltersProps) => {
  const resetFilters = () => {
    setSearch("");
    setStatusFilter("");
    setFareRange([0, 1000]);
    setDateRange([null, null]);
  };
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
      {/* Search */}
      <div className="relative w-full md:w-1/2 bg-white dark:bg-black">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          placeholder="Search by Pickup or Destination"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Status Filter */}
      <div className="bg-white dark:bg-black">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="COMPLETED">Completed</SelectItem>
            <SelectItem value="cANCELLED">Canceled</SelectItem>
            <SelectItem value="REQUESTED">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Fare Range Popover */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Set Fare Range</Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <Label className="text-sm font-semibold mb-2">Fare (TK)</Label>
          <div className="flex gap-2 items-center">
            <Input
              type="number"
              placeholder="Min"
              className="w-24"
              value={fareRange[0]}
              onChange={(e) =>
                setFareRange([Number(e.target.value), fareRange[1]])
              }
            />
            <Separator orientation="vertical" className="my-1" />
            <Input
              type="number"
              placeholder="Max"
              className="w-24"
              value={fareRange[1]}
              onChange={(e) =>
                setFareRange([fareRange[0], Number(e.target.value)])
              }
            />
          </div>
        </PopoverContent>
      </Popover>

      {/* Date Range Popover */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Set Date Range</Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <Label className="text-sm font-semibold mb-2">Date Range</Label>
          <div className="flex gap-2 items-center">
            <Input
              type="date"
              className="w-36"
              value={dateRange[0]?.toISOString().split("T")[0] || ""}
              onChange={(e) =>
                setDateRange([
                  e.target.value ? new Date(e.target.value) : null,
                  dateRange[1],
                ])
              }
            />
            <Separator orientation="vertical" className="my-1" />
            <Input
              type="date"
              className="w-36"
              value={dateRange[1]?.toISOString().split("T")[0] || ""}
              onChange={(e) =>
                setDateRange([
                  dateRange[0],
                  e.target.value ? new Date(e.target.value) : null,
                ])
              }
            />
          </div>
        </PopoverContent>
      </Popover>

      {/* Reset Filters Button */}
      <Button variant="outline" onClick={resetFilters}>
        <Undo2 />
      </Button>
    </div>
  );
};

export default RideFilters;
