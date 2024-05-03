import Link from "next/link";
import BackgroundVideo from "./BackgroundVideo";
import { Button } from "@/components/ui/button";

interface videoCtaProps {
  videoSrc: string;
  height?: string;
  title: string;
  description: string;
}

const VideoCta = ({ videoCtaData }: { videoCtaData: videoCtaProps }) => {
  return (
    <BackgroundVideo
      videoSrc={videoCtaData.videoSrc}
      height={videoCtaData.height}
    >
      <div className="absolute top-0 bottom-0 w-full flex items-center justify-center px-8 sm:px-20 flex-col bg-custom-purple-700 bg-opacity-80 space-y-4">
        <h2 className="text-3xl md:text-5xl text-center uppercase font-tommy text-white">
          {videoCtaData.title}
        </h2>
        <p className="text-white text-center text-xl 2xl:text-2xl max-w-2xl 2xl:max-w-3xl mx-auto">
          {videoCtaData.description}
        </p>

        <Button
          asChild
          variant="outline"
          className="bg-transparent text-white hover:bg-white px-8 text-lg"
        >
          <Link href="/get-a-quote">Get A Quote</Link>
        </Button>
      </div>
    </BackgroundVideo>
  );
};

export default VideoCta;
