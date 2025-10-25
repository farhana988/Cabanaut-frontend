import { Facebook, Linkedin, X } from "lucide-react";
import type { JSX } from "react";

interface SocialLink {
  href: string;
  icon: JSX.Element;
}
export interface TeamMember {
  name: string;
  position: string;
  image: string;
  socialLinks: SocialLink[];
}
export interface TeamCardProps {
  member: TeamMember;
}
export const aboutTeam: TeamMember[] = [
  {
    name: "John Williams",
    position: "Senior Chauffeur",
    image: "/src/assets/images/about/team-1.jpg",
    socialLinks: [
      {
        href: "https://www.facebook.com/john.williams",
        icon: <Facebook className="w-5 h-5" />,
      },
      {
        href: "https://twitter.com/johnwilliams",
        icon: <X className="w-5 h-5" />,
      },
      {
        href: "https://www.linkedin.com/in/johnwilliams",
        icon: <Linkedin className="w-5 h-5" />,
      },
    ],
  },
  {
    name: "Michael Thoson",
    position: "Executive Chauffeur",
    image: "/src/assets/images/about/team-2.jpg",
    socialLinks: [
      {
        href: "https://www.facebook.com/michael.thoson",
        icon: <Facebook className="w-5 h-5" />,
      },
      {
        href: "https://twitter.com/michaelthoson",
        icon: <X className="w-5 h-5" />,
      },
      {
        href: "https://www.linkedin.com/in/michaelthoson",
        icon: <Linkedin className="w-5 h-5" />,
      },
    ],
  },
  {
    name: "Sophia Martinez",
    position: "VIP Chauffeur",
    image: "/src/assets/images/about/team-3.jpeg",
    socialLinks: [
      {
        href: "https://www.facebook.com/sophia.martinez",
        icon: <Facebook className="w-5 h-5" />,
      },
      {
        href: "https://twitter.com/sophiamartinez",
        icon: <X className="w-5 h-5" />,
      },
      {
        href: "https://www.linkedin.com/in/sophiamartinez",
        icon: <Linkedin className="w-5 h-5" />,
      },
    ],
  },
  {
    name: "David Clark",
    position: "Head Chauffeur",
    image: "/src/assets/images/about/team-4.jpg",
    socialLinks: [
      {
        href: "https://www.facebook.com/david.clark",
        icon: <Facebook className="w-5 h-5" />,
      },
      {
        href: "https://twitter.com/davidclark",
        icon: <X className="w-5 h-5" />,
      },
      {
        href: "https://www.linkedin.com/in/davidclark",
        icon: <Linkedin className="w-5 h-5" />,
      },
    ],
  },
];

interface Offering {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface OfferingCardProps {
  offer: Offering;
}

export const aboutOfferings = [
  {
    title: "Credit booking",
    description:
      "There are many van of passage of suffer alteration lipsum is simply free text.",
    image: "/src/assets/images/about/offering-1.jpg",
    link: "https://external-site.com/credit-booking",
  },
  {
    title: "Home pickups",
    description:
      "There are many van of passage of suffer alteration lipsum is simply free text.",
    image: "/src/assets/images/about/offering-2.webp",
    link: "https://external-site.com/home-pickups",
  },
  {
    title: "Long travels",
    description:
      "There are many van of passage of suffer alteration lipsum is simply free text.",
    image: "/src/assets/images/about/offering-3.jpg",
    link: "https://external-site.com/long-travels",
  },
];

export const aboutFeatures = [
  "Our goal is to make every journey simple and stress-free. Whether you’re heading to work, meeting friends, or exploring a new city,we’re here to move you forward powered by technology, driven by trust, and committed to transparency.",
  "Our mission is to deliver exceptional luxury transportation, ensuring every journey is seamless, safe, and unforgettable.",
  "Our vision is to become the leading provider of premium limousine and ride services recognized for excellence, innovation, and unmatched customer satisfaction.",
];
