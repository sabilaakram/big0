import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

interface cardProps {
  title: string;
  description: string;
  href: string;
}
const cardItems: cardProps[] = [
  {
    title: "Our Case Studies",
    description:
      "Real-World Stories of Client Success Fueled by Our Transformative IT Solutions",
    href: "/",
  },
  {
    title: "Our Blogs",
    description:
      "Informative Insights, Best Practices, and Thought Leadership Compilations",
    href: "/",
  },
  {
    title: "News",
    description:
      "Latest Updates, Industry Trends, and News of What’s Latest in Tech World",
    href: "/",
  },
];

const ResourceSection = () => {
  return (
    <section>
      <Card className="max-w-[95%] lg:max-w-4xl xl:max-w-5xl bg-gray-200 mx-auto my-8 md:mb-12 lg:-mt-20 z-30 relative border-none flex flex-wrap md:flex-nowrap items-center justify-between shadow-md overflow-hidden gap-8">
        <Image
          src="/resource-card.jpeg"
          alt=""
          width={300}
          height={300}
          className="h-[250px] sm:h-full md:min-h-[330px] object-cover w-full md:w-[400px]"
        />

        <CardContent className="p-4 space-y-6 w-full">
          {cardItems.map((card, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center justify-between gap-4 relative">
                <div className="">
                  <CardTitle className="text-custom-purple-300 uppercase">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="text-gray-900">
                    {card.description}
                  </CardDescription>
                </div>
                <Link
                  href={card.href}
                  className="text-custom-purple-300 hover:text-custom-purple-200 transition-all duration-200 cursor-pointer"
                >
                  <FaChevronRight size={30} />
                </Link>
              </div>
              {index < cardItems.length - 1 && (
                <Separator className="max-w-[80%] mx-auto bg-custom-purple-50" />
              )}{" "}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default ResourceSection;
