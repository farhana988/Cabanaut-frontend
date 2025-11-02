interface Testimonial {
  id: number;
  name: string;
  role: "Rider" | "Driver";
  feedback: string;
  avatar?: string;
}
import aysha from "../assets/images/testimonial/aysha.jpg";
import rakib from "../assets/images/testimonial/rakib.jpg";
import tania from "../assets/images/testimonial/tania.jpg";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "Rider",
    feedback:
      "RideFlow made my daily commute stress-free. The app is fast, the drivers are professional, and I always feel safe!",
    avatar: aysha,
  },
  {
    id: 2,
    name: "Rakib Hasan",
    role: "Driver",
    feedback:
      "As a driver, I love the flexibility and fair commission. RideFlow’s support team is top-notch!",
    avatar: rakib,
  },
  {
    id: 3,
    name: "Tania Islam",
    role: "Rider",
    feedback:
      "Clean rides, quick pickups, and honest pricing — it’s my go-to ride-sharing app now.",
    avatar: tania,
  },
];
