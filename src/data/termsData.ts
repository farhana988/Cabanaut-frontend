export type TermSection =
  | {
      type: "text";
      title: string;
      content: string;
    }
  | {
      type: "list";
      title: string;
      items: string[];
    };

export const termsData: TermSection[] = [
  {
    type: "text",
    title: "1. Acceptance of Terms",
    content:
      "By using our services, you agree to comply with and be bound by these Terms and our Privacy Policy. If you do not agree, please do not use our platform.",
  },
  {
    type: "text",
    title: "2. Services",
    content:
      "Cabanaut connects passengers with independent drivers for transportation. We are not a transportation provider, and we do not guarantee availability, pricing, or quality of rides.",
  },
  {
    type: "text",
    title: "3. User Accounts",
    content:
      "To use our platform, you must register and maintain an active account. You are responsible for maintaining the confidentiality of your login information and all activities under your account.",
  },
  {
    type: "text",
    title: "4. Payments",
    content:
      "Payments for rides are processed through secure third-party payment gateways. You agree to provide accurate billing information and authorize us to charge your selected payment method for applicable fees.",
  },
  {
    type: "list",
    title: "5. Prohibited Activities",
    items: [
      "Using the platform for unlawful purposes",
      "Harassing, abusing, or harming drivers or other users",
      "Providing false information or impersonating another person",
      "Interfering with platform operations or security",
    ],
  },
  {
    type: "text",
    title: "6. Limitation of Liability",
    content:
      "Cabanaut is not liable for any damages, injuries, or losses arising from your use of the platform or reliance on the services provided by independent drivers.",
  },
  {
    type: "text",
    title: "7. Termination",
    content:
      "We may suspend or terminate your account at any time for violation of these Terms or misuse of our services.",
  },
  {
    type: "text",
    title: "8. Governing Law",
    content:
      "These Terms are governed by the laws of Bangladesh, without regard to its conflict of law principles.",
  },
];
