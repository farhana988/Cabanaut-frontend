import { Twitter, Facebook, Youtube } from "lucide-react";

export const socialLinks = [
  { Icon: Twitter, href: "https://twitter.com/yourbrand" },
  { Icon: Facebook, href: "https://facebook.com/yourbrand" },
  { Icon: Youtube, href: "https://youtube.com/yourbrand" },
];

export const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Book a Ride", href: "/book-ride" },
  { label: "Pricing & Offers", href: "/pricing" },
  { label: "Contact Support", href: "/contact" },
];

import { Mail, Phone } from "lucide-react";

export const footerContactItems = [
  {
    type: "address",
    label: "45 Gulshan Avenue, Dhaka 1212, Bangladesh",
  },
  {
    type: "email",
    icon: Mail,
    label: "support@cabanaut.com",
  },
  {
    type: "phone",
    icon: Phone,
    label: "+8801234567890",
  },
];

export const footerBottomLinks = [
  { label: "Terms of Service", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
];
