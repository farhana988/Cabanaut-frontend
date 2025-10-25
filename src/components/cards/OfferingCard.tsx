import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { OfferingCardProps } from "@/data/aboutData";

const OfferingCard = ({ offer }: OfferingCardProps) => {
  const { image, description, title, link } = offer || {};
  return (
    <Card className="overflow-hidden rounded-xl shadow-sm hover:shadow-md transition pt-0">
      {/* Image section */}
      <div className="h-52 xl:h-60 w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      {/* title */}
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      {/*  description */}
      <CardContent>
        <p className="opacity-80 text-sm leading-relaxed">{description}</p>
      </CardContent>
      {/*  link */}
      <CardFooter>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold tracking-wide text-custom-primary
                 uppercase hover:underline hover:underline-offset-8"
        >
          Read more
        </a>
      </CardFooter>
    </Card>
  );
};

export default OfferingCard;
