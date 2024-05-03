import BackgroundVideo from "@/components/BackgroundVideo";
import GetInTouch from "@/components/GetInTouch";
import ResourceSection from "./ResourceSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources Hub",
  description:
    "BigO Resources is the hub for info on latest trends, upcoming transformations, developments in compliance, and success powered by our extensive IT services.",
};

const Resources = () => {
  return (
    <>
      <BackgroundVideo videoSrc="/resource-bg.mp4">
        <div className="absolute top-0 bottom-0 w-full flex items-center justify-center px-8 sm:px-20 flex-col bg-custom-purple-700 bg-opacity-80 space-y-8">
          <h1 className="text-5xl md:text-6xl 2xl:text-7xl uppercase font-tommy text-white">
            Insights
          </h1>
          <p className="text-white text-center text-xl 2xl:text-2xl max-w-2xl 2xl:max-w-3xl mx-auto">
            <span className="font-bold">All In One Place:</span> client success
            stories, expert insights, latest industry updates, and upcoming
            developments in compliance.{" "}
            <span className="font-bold">Explore</span>,{" "}
            <span className="font-bold">Learn</span>, and{" "}
            <span className="font-bold">Stay Ahead</span> of the Competitive
            Curve with our resources.
          </p>
        </div>
      </BackgroundVideo>
      <ResourceSection />
      <GetInTouch />
    </>
  );
};

export default Resources;
