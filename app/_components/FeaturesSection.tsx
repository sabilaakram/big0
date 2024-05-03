import FeatureCard from "@/app/_components/FeatureCard";
import AnimatedCards from "@/components/AnimatedCards";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

interface ImageProps {
  id: number;
  url: string;
  alternativeText: string;
}

interface FeatureSectionProps {
  data: {
    id: number;
    heading: string;
    subHeading: string;
    image: ImageProps;
  }[];
}

export function FeatureSection({ data }: Readonly<FeatureSectionProps>) {
  return (
    <>
      <section className="container px-4 py-6 mx-auto md:px-6 lg:px-14 lg:py-11 relative">
        <h2 className="text-3xl uppercase font-semibold">What we can do</h2>
        <Separator className="w-full bg-gray-500 mt-5 mb-8 relative after:absolute after:content-[''] after:bg-drop-pattern after:w-full after:min-h-[420px] after:bg-no-repeat after:z-0" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-10 relative z-10">
          <strong className="text-custom-purple-300 uppercase font-tommy font-normal">
            Empowering Our Clients to
          </strong>
          <h2 className="text-2xl md:text-4xl pb-4 font-tommy uppercase max-w-[550px]">
            Make Big Impact: <span className="font-bold">no compromise</span> on
            trust{" "}
          </h2>
          <p>
            Data-driven insights and analytics are the cornerstones of making
            informed decisions for every business, and this is where our BI
            services are impactful. We bring ethical and responsible use of
            Artificial Intelligence (AI) to your disposal through our
            comprehensive suite of BI services.
          </p>
        </div>
        <AnimatedCards>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pt-12 max-w-[1400px] mx-auto px-4 sm:px-5 md:px-10 ">
            {data.map((feature) => (
              <FeatureCard feature={feature} key={feature.id} />
            ))}
          </div>
        </AnimatedCards>

        <Image
          fill={true}
          src="/bg-globe.png"
          alt=""
          sizes="(min-width: 808px) 50vw, 100vw"
          className="hidden md:block  !left-auto !right-0 !-bottom-1/2 !w-auto"
        />
      </section>

      <section className="flex items-center justify-center flex-col py-8 px-4 sm:px-5 md:px-10 relative">
        <h5 className="text-xl font-bold uppercase text-center">
          Amplify Your Business Success
        </h5>
        <p className="mt-1 mb-4 text-center">
          Request a Personalized, Responsible AI, BI, IoT, or Cloud Service to
          Find Out Best-Suited Solution for Your Business
        </p>

        <Button
          asChild
          className="bg-custom-purple-500 hover:bg-custom-purple-400 duration-200 transition-all px-12 py-6 text-lg uppercase"
        >
          <Link href="/contact">Get In Touch</Link>
        </Button>
      </section>
    </>
  );
}
