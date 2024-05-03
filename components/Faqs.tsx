import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

interface faqItemsProps {
  value: string;
  question: string;
  answer: string;
}

const Faqs = ({ faqItems }: { faqItems: faqItemsProps[] }) => {
  return (
    <section className="pb-8 md:py-8 lg:p-8 w-full lg:max-w-[600px]">
      <h2 className="font-tommy text-4xl uppercase">
        Frequently Asked <br /> <span className="font-bold">Questions</span>
      </h2>

      <Accordion type="single" collapsible className="w-full space-y-4 pt-4">
        {faqItems.map((faq) => (
          <div key={faq.value}>
            <AccordionItem value={faq.value} className="px-4">
              <AccordionTrigger className="text-lg text-left font-bold hover:text-custom-purple-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-black text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
            <Separator className="bg-custom-purple-300 h-[1.5px]" />
          </div>
        ))}
      </Accordion>
    </section>
  );
};

export default Faqs;
