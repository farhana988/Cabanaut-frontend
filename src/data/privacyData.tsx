import { Lock, Mail, MapPin, CreditCard, Smartphone } from "lucide-react";
interface PolicySection {
  id: number;
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

export const policyData: PolicySection[] = [
  {
    id: 1,
    title: "Information We Collect",
    icon: <Smartphone className="h-5 w-5 text-primary" />,
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>
          <span className="font-medium">Account Information:</span> name, phone
          number, email address, and profile photo provided when signing up.
        </li>
        <li>
          <span className="font-medium">Location Data:</span> GPS data collected
          when the app is active (to find nearby drivers, calculate fares, and
          ensure safety).
        </li>
        <li>
          <span className="font-medium">Trip Details:</span> pick-up and
          drop-off locations, route information, distance, duration, and fare
          amount.
        </li>
        <li>
          <span className="font-medium">Payment Information:</span> encrypted
          card or wallet details for processing ride payments.
        </li>
        <li>
          <span className="font-medium">Device & Usage Data:</span> device
          model, operating system, IP address, app version, and crash logs to
          improve performance.
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    title: "How We Use Your Information",
    icon: <MapPin className="h-5 w-5 text-primary" />,
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="list-disc list-inside space-y-1 mt-1">
          <li>Match riders with nearby drivers and optimize routes.</li>
          <li>
            Process payments securely and provide ride receipts and transaction
            history.
          </li>
          <li>
            Improve service quality, app performance, and user experience
            through analytics.
          </li>
          <li>
            Ensure rider and driver safety by tracking trips and preventing
            fraudulent activity.
          </li>
          <li>
            Communicate important updates, offers, or service changes (only if
            you’ve opted in).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "Data Security",
    icon: <Lock className="h-5 w-5 text-primary" />,
    content: (
      <p>
        We use industry-standard encryption and secure servers to protect your
        personal and payment information. Access to user data is restricted to
        authorized personnel only, and all communication between your app and
        our servers is encrypted via HTTPS.
      </p>
    ),
  },
  {
    id: 4,
    title: "Sharing Your Information",
    icon: <CreditCard className="h-5 w-5 text-primary" />,
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>
          <span className="font-medium">With Drivers/Riders:</span> we share
          trip details such as name, pickup/drop-off points, and contact info
          for coordination.
        </li>
        <li>
          <span className="font-medium">With Service Providers:</span> we work
          with third-party partners for payment processing, map routing, and
          analytics.
        </li>
        <li>
          <span className="font-medium">For Legal Reasons:</span> we may
          disclose data to law enforcement or regulators if required by law or
          to protect user safety.
        </li>
      </ul>
    ),
  },
  {
    id: 5,
    title: "Your Rights and Choices",
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>
          Access, update, or delete your account information directly in the
          mobile app.
        </li>
        <li>
          Control location sharing permissions through your device settings at
          any time.
        </li>
        <li>
          Request a copy or deletion of your personal data by contacting our
          support team.
        </li>
      </ul>
    ),
  },
  {
    id: 6,
    title: "Contact Us",
    icon: <Mail className="h-5 w-5 text-primary" />,
    content: (
      <p>
        If you have any questions, feedback, or privacy concerns, please reach
        out to our support team at:{" "}
        <a
          href="mailto:support@cabanaut.com"
          className="text-primary hover:underline hover:underline-offset-8"
        >
          support@cabanaut.com
        </a>
      </p>
    ),
  },
];
