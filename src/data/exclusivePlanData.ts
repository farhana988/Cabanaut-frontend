import type { Plan } from "@/types/exclusivePlan.type";

export const exclusivePlans: Plan[] = [
  {
    name: "Silver Ride",
    description:
      "Ideal for seamless city journeys and smooth airport transfers.",
    price: 90,
    features: [
      "Skilled Professional Chauffeurs",
      "Punctual Service Every Time",
      "Door-to-Door Convenience",
      "Comfortable & Relaxed Experience",
      "Privacy Guaranteed",
    ],
  },
  {
    name: "Gold Prestige",
    description: "Tailored for business trips and special events with style.",
    price: 130,
    features: [
      "Skilled Professional Chauffeurs",
      "Always On Schedule",
      "Door-to-Door Convenience",
      "Luxury VIP Experience",
      "Safe & Private Rides",
    ],
    highlighted: true,
  },
  {
    name: "Platinum Luxe",
    description: "Exclusive premium service for the most discerning clients.",
    price: 180,
    features: [
      "Elite Professional Chauffeurs",
      "Impeccable Punctuality",
      "Door-to-Door VIP Service",
      "Ultimate Comfort & Style",
      "Maximum Privacy & Security",
    ],
  },
];
