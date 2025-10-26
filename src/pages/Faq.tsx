import { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsData } from "@/data/faqData";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Faq = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter FAQs based on search
  const filteredFaqs = faqsData.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SectionHeader title="Frequently Asked Questions" />

      <div className="mb-16 flex flex-col items-center gap-6 justify-center text-center">
        <h2 className="text-2xl md;text-3xl xl:text-4xl font-semibold">
          How can we help?
        </h2>
        {/* Search */}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Accordion */}
      <Accordion
        type="single"
        collapsible
        className="space-y-5 max-w-4xl mx-auto"
      >
        {filteredFaqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="rounded-lg border border-b-2 border-b-custom-secondary 
            dark:border-b-snow-white/70"
          >
            <AccordionTrigger className="hover:no-underline">
              <span className="text-lg font-medium px-5">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="opacity-80 px-5">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Faq;
