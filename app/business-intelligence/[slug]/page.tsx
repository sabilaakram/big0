import React, { Suspense } from "react";
import Loading from "../loading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import biHeader from "@/public/bi-intro.png";
// import biHeader from "@/public/bi-intro.png";
import Image from "next/image";

const removeHyphens: (slug: string) => string = (slug: string) =>
  slug.replace(/-/g, " ");

const Service = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="h-full flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between items-center w-full bg-custom-purple-700 px-8 sm:px-14 lg:px-20 2xl:px-28 pt-10 sm:pt-20 overflow-hidden">
          <div className="pb-0 lg:pb-20 space-y-4 container text-center lg:text-left">
            <h1 className="text-white font-tommy uppercase text-5xl lg:text-[3.5rem]">
              <span className="font-bold">Make Precise Decisions</span> with{" "}
              {params.slug}
            </h1>
            <p className="text-lg md:text-xl text-secondary">
              We help transform your decentralized operations into a cohesive,
              cutting-edge data visualization system that enhances everyday
              operations, KPI implementation, and goal accomplishment. Customize
              your BI systems as per your specific requirements.
            </p>

            <Button
              asChild
              variant="outline"
              className="bg-transparent text-white text-lg p-6"
            >
              <Link href="/get-a-quote">Request A Demo</Link>
            </Button>
          </div>

          <Image src={biHeader} alt="" className="mix-blend-soft-light" />
        </section>
      </Suspense>

      <Suspense fallback={<Loading />}>
        <section className="py-8 sm:py-12 px-8 sm:px-10 lg:px-20 space-y-4 container">
          <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy text-center">
            Crafting Business Success with Our BI Solutions
          </h2>
          <p className="text-lg md:text-xl text-secondary-foreground">
            We help transform your decentralized operations into a cohesive,
            cutting-edge data visualization system that enhances everyday
            operations, KPI implementation, and goal accomplishment. Customize
            your BI systems as per your specific requirements.
          </p>

          <div className="pt-8 flex flex-wrap justify-center gap-10 lg:gap-20 w-full"></div>
        </section>
      </Suspense>
    </>
  );
};

export default Service;
