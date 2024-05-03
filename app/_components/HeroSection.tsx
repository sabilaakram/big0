import Link from "next/link";
import { Button } from "@/components/ui/button";
import BackgroundVideo from "@/components/BackgroundVideo";

export function HeroSection() {
  return (
    <header className="relative h-screen sm:h-auto overflow-hidden z-0">
      <BackgroundVideo videoSrc="/intro-background.mp4">
        <div className="absolute top-0 bottom-0 w-full flex items-start justify-center px-8 sm:px-20 flex-col bg-custom-purple-700 bg-opacity-70 space-y-10">
          <h1 className="font-tommy text-4xl text-center md:text-left text-primary-foreground md:text-5xl lg:text-6xl max-w-5xl uppercase">
            Next Level <span className="font-bold">Innovation Grounded in</span>{" "}
            responsible AI
          </h1>
          <div className="flex items-center justify-between gap-8 w-full flex-col-reverse md:flex-row">
            <Button
              asChild
              variant="outline"
              className="px-8 py-6 text-lg bg-transparent text-white transition-all duration-200 ease-in"
            >
              <Link href="/about">Learn More</Link>
            </Button>
            <p className="text-lg md:text-xl text-center md:text-left text-secondary max-w-lg ">
              Enabling Businesses Smart Decision-Making by Integrating Endless
              Automation Possibilities Powered by Our responsible AI
            </p>
          </div>
        </div>
      </BackgroundVideo>
    </header>
  );
}
