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

interface Offering {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface OfferingCardProps {
  offer: Offering;
}
