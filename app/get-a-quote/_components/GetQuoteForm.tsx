import QuoteForm from "@/components/QuoteForm";
import { Card } from "@/components/ui/card";

const GetQuoteForm = () => {
  return (
    <section className="space-y-4 text-center max-w-[95%] lg:max-w-4xl xl:max-w-5xl mx-auto my-8 md:mb-12 z-30 relative lg:-mt-20">
      <h2 className="lg:text-white text-2xl">Request A Quote Today</h2>
      <Card className="max-w-4xl mx-auto bg-gray-200 border-none flex flex-wrap md:flex-nowrap items-center justify-between shadow-md overflow-hidden gap-8 p-8">
        <QuoteForm />
      </Card>
    </section>
  );
};

export default GetQuoteForm;
