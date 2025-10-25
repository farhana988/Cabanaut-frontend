import {
  Car,
  MapPin,
  Users,
  Calendar,
  ShoppingCart,
  Star,
  Phone,
  Shield,
} from "lucide-react";

export const featureData = [
  {
    title: "Ride Booking",
    icon: Car,
    description:
      "Easily book a ride with just a few taps. Choose your destination and vehicle type.",
  },
  {
    title: "Driver Tracking",
    icon: MapPin,
    description: "Track your ride in real-time with precise location updates.",
    isUp: true,
  },
  {
    title: "Ride History",
    icon: Users,
    description: "Keep track of all your previous trips for easy reference.",
  },
  {
    title: "Special Offers",
    icon: Calendar,
    description:
      "Get notified about special offers and discounts for your rides.",
    isUp: true,
  },
  {
    title: "Payment Options",
    icon: ShoppingCart,
    description:
      "Choose from various payment methods, including card and wallet options.",
  },
  {
    title: "Ratings & Reviews",
    icon: Star,
    description:
      "Rate your rides and provide feedback to help us improve your experience.",
    isUp: true,
  },
  {
    title: "24/7 Support",
    icon: Phone,
    description: "Get help anytime with our dedicated customer support team.",
  },
  {
    title: "Safety & Security",
    icon: Shield,
    description:
      "Travel confidently with our enhanced safety measures and verified drivers.",
    isUp: true,
  },
];

export const featureStats = [
  { value: "100K+", label: "Users Worldwide" },
  { value: "1M+", label: "Rides Completed" },
  { value: "24/7", label: "Customer Support" },
  { value: "500+", label: "Drivers on Demand" },
];
