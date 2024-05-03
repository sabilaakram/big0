import BackgroundVideo from "@/components/BackgroundVideo";
import GetInTouch from "@/components/GetInTouch";
import { Metadata } from "next";
import GetQuoteForm from "./_components/GetQuoteForm";
import { Suspense } from "react";
import Loading from "../loading";

export const metadata: Metadata = {
  title: "BigO - Get A Quote",
};

const GetAQuote = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BackgroundVideo videoSrc="/resource-bg.mp4">
          <div className="absolute top-0 bottom-0 w-full flex items-center justify-center px-8 sm:px-20 flex-col bg-custom-purple-700 bg-opacity-80 space-y-8">
            <h1 className="text-5xl md:text-6xl 2xl:text-7xl text-center uppercase font-tommy text-white">
              Tap Your{" "}
              <span className="font-bold">Business&apos;s Full Potential</span>{" "}
              with bigo
            </h1>
            <p className="text-white text-center text-xl 2xl:text-2xl max-w-2xl 2xl:max-w-3xl mx-auto">
              Without the integration of innovative technology, your business
              will miss out on experiencing its true potential. Collaborate with
              us and step up to achieve new heights of success and growth.
            </p>
          </div>
        </BackgroundVideo>
        <GetQuoteForm />
      </Suspense>
      <GetInTouch />
    </>
  );
};

export default GetAQuote;
