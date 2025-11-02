import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { testimonials } from "@/data/testimonialData";

const Testimonials = () => {
  return (
    <>
      <SectionHeader title="Voices from Our Community" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <Card
            key={t.id}
            className="border-none shadow-md hover:shadow-lg transition"
          >
            <CardHeader className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                {t.avatar ? (
                  <AvatarImage src={t.avatar} alt={t.name} />
                ) : (
                  <AvatarFallback>{t.name[0]}</AvatarFallback>
                )}
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </CardHeader>

            <CardContent className="relative">
              <Quote className="h-10 w-10 text-primary/20 absolute -top-4 left-2 rotate-180 z-10" />
              <p className=" italic relative z-20 opacity-90">“{t.feedback}”</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
