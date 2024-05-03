import iotChallenges from "@/public/iot-challenges.png";
import Image, { StaticImageData } from "next/image";
import { Suspense } from "react";
import Loading from "../../loading";

interface solutionsProps {
  title?: string;
  description?: string;
  image?: StaticImageData;
}

const solutions: solutionsProps[] = [
  {
    title: "Reliable and Valuable Physical Assets",
    description:
      "Take advantage of the combined power of real-time data and centralized monitoring to amplify precision, anticipate problems before they arise, implement predictive maintenance, streamline processes, and scale up your business.",
  },
  {
    title: "Supervise Usage of Equipment Across its Lifespan",
    description:
      "Monitor and direct the utilization of equipment in all phases to maximize its health capacity, making sure that you make necessary investments in equipment for the best application.",
  },
  {
    title: "Control Maintenance Tasks as Per Asset Condition",
    description:
      "Manage your assets effectively for business processes to enhance performance and ultimately achieve optimum productivity and success.",
  },
  {
    title: "Data-Centric Facility Management for Cost Efficiency",
    description:
      "Enable clear workflows through insightful data. Take accurate decisions and optimize overall implementation to new heights for an empowered business.",
  },
  {
    title: "Proactively Managing Security Concerns",
    description:
      "Predict and prevent potential business threats through preemptive alerts, optimized maintenance strategies, and smart allocation of resources while maintaining compliance of safety standards.",
  },
  { image: iotChallenges },
];

const ChallengesSection = () => {
  return (
    <Suspense fallback={<Loading />}>
      <section className="pt-12 pb-8 sm:py-12 px-8 sm:px-10 md:px-20 container">
        <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy">
          Resolving Your Business Challenges for Boosted Execution
        </h2>
        <p className="mt-2 mb-8">
          BigO excels at identifying and providing solutions for the obstacles
          that impede your company&apos;s expansion. We offer dynamic IoT
          solutions that pave the way for sustainable progress and advancement.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {solutions.map((item) => (
            <div key={item.title} className="space-y-2">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="">{item.description}</p>
              {item.image && <Image src={item.image} alt="" />}
            </div>
          ))}
        </div>
      </section>
    </Suspense>
  );
};

export default ChallengesSection;
