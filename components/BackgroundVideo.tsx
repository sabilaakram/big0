import Loading from "@/app/loading";
import React, { Suspense } from "react";

interface BackgroundVideoProps {
  children: React.ReactNode;
  videoSrc: string;
  height?: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  children,
  videoSrc,
  height,
  ...props
}) => {
  return (
    <Suspense fallback={<Loading />}>
      <div
        {...props}
        className={`relative ${height ? height : "h-screen"} overflow-hidden`}
      >
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {children}
      </div>
    </Suspense>
  );
};

export default BackgroundVideo;
