"use client";

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
import { Button } from "@/components/ui/button";
import carouselImage1 from "@/public/carousel-image-1.png";
import carouselImage2 from "@/public/carousel-image-2.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface carouselItemsProps {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  href: string;
}

const carouselItems: carouselItemsProps[] = [
  {
    id: 1,
    image: carouselImage1,
    title: "Finance and Insurance",
    description:
      "Finance and insurance companies are identifying fraud risks efficiently while improving their decision-making through real-time insights.",
    href: "/",
  },
  {
    id: 2,
    image: carouselImage2,
    title: "Telecommunications and Media",
    description:
      "Telecommunication and media enterprises are enhancing their data processing, interpretation, and analysis for smooth functioning.",
    href: "/",
  },
  {
    id: 3,
    image: carouselImage2,
    title: "Healthcare ",
    description:
      "Healthcare service providers are improving patient care, research, diagnosis, and data privacy while reducing false insurance and free medical help claims.",
    href: "/",
  },
];

const StackedCarousel = () => {
  const totalItems = carouselItems.length;
  return (
    <div className="px-5 sm:px-14 md:px-24 ">
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
        className="max-w-4xl 2xl:max-w-6xl mx-auto mt-8 w-full"
      >
        <CarouselContent className="h-full -ml-0">
          {carouselItems.map((item) => (
            <CarouselItem
              key={item.id}
              className="w-full py-4 px-0 sm:px-4 h-full"
            >
              <Card className="bg-custom-purple-500 flex flex-wrap md:flex-nowrap items-center justify-between gap-4 overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  className="h-[250px] sm:h-full max-h-64 md:min-h-[300px] object-cover w-full md:w-[400px]"
                />

                <CardContent className="p-4 w-full h-full md:pr-10 space-y-3">
                  <span className="text-white text-xs">
                    {item.id} / {totalItems}
                  </span>
                  <CardTitle className="text-white text-xl sm:text-3xl">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-white">
                    {item.description}
                  </CardDescription>
                  <div className="flex justify-end">
                    <Button
                      asChild
                      className="bg-custom-purple-400 rounded hover:bg-custom-purple-600"
                    >
                      <Link href={item.href}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex md:block gap-8 items-center justify-center">
          <CarouselPrevious className="bg-transparent text-custom-purple-500 text-4xl hover:bg-transparent hover:text-custom-purple-600 border-none" />
          <CarouselNext className="bg-transparent text-custom-purple-500 text-4xl hover:bg-transparent hover:text-custom-purple-600 border-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default StackedCarousel;
