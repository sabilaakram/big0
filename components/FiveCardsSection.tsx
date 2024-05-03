import Loading from "@/app/loading";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Suspense } from "react";

interface fiveCardsSectionCotentProps {
  title: string;
  description: string;
}

interface fiveCardsDataProps {
  title: string;
  description: string;
}

const FiveCardsSection = ({
  fiveCardsSectionCotent,
  fiveCardsData,
}: {
  fiveCardsSectionCotent: fiveCardsSectionCotentProps;
  fiveCardsData: fiveCardsDataProps[];
}) => {
  return (
    <section className="py-8 sm:py-12 px-8 sm:px-10 md:px-20 space-y-4 container">
      <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy">
        {fiveCardsSectionCotent.title}
      </h2>
      <p>{fiveCardsSectionCotent.description}</p>

      <div className="pt-8 flex flex-wrap justify-center gap-8 w-full">
        {fiveCardsData.map((item) => (
          <Card
            key={item.title}
            className="p-8 w-full max-w-xs md:max-w-[400px] flex items-center gap-4 flex-col justify-center border-none text-center bg-custom-purple-500"
          >
            <CardTitle className="text-white">{item.title}</CardTitle>
            <CardDescription className="text-white">
              {item.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FiveCardsSection;
