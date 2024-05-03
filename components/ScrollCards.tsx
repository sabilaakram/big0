"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface scrollCardsDataProps {
  title: string;
  description: string;
  imageSrc?: string;
}

const ScrollCards = ({
  scrollCardsData,
}: {
  scrollCardsData: scrollCardsDataProps[];
}) => {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4500,
        }),
      ]}
      className="mx-auto mt-8 w-full"
    >
      <CarouselContent className="-ml-0">
        {/* <div className="flex w-max space-x-4"> */}
        {scrollCardsData.map((card) => (
          <>
            <CarouselItem key={card.title} className="pl-1 lg:basis-1/3">
              {card.imageSrc ? (
                <>
                  <Card className="shrink-0 bg-custom-purple-400 overflow-hidden rounded-xl h-full">
                    <div className="overflow-hidden rounded-md">
                      <Image
                        src={card.imageSrc}
                        alt={card.title}
                        className="h-fit w-full object-cover"
                        width={300}
                        height={150}
                      />
                    </div>
                    <CardContent className="p-4 whitespace-pre-wrap text-center space-y-2">
                      <CardTitle className="text-white uppercase text-xl">
                        {card.title}
                      </CardTitle>
                      <CardDescription className="text-white ">
                        {card.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <>
                  <Card className="p-8 h-full w-full md:max-w-[400px] flex items-center gap-4 flex-col justify-center border-none text-center bg-custom-purple-500">
                    <CardTitle className="text-white whitespace-pre-wrap">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-white whitespace-pre-wrap">
                      {card.description}
                    </CardDescription>
                  </Card>
                </>
              )}
            </CarouselItem>
          </>
        ))}
        {/* </div> */}
      </CarouselContent>

      <div className="flex md:block gap-8 items-center justify-center mt-6 md:mt-0">
        <CarouselPrevious className="bg-transparent text-custom-purple-500 text-4xl hover:bg-transparent hover:text-custom-purple-600 border-none" />
        <CarouselNext className="bg-transparent text-custom-purple-500 text-4xl hover:bg-transparent hover:text-custom-purple-600 border-none" />
      </div>
    </Carousel>
  );
};

export default ScrollCards;
