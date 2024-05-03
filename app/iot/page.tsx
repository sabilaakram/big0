import Image from "next/image";
import iotHeader from "@/public/iot-header.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import ChallengesSection from "./_components/ChallengesSection";
import ServicesCardsSection from "@/components/ServicesCardsSection";
import BeyondSection from "@/components/BeyondSection";
import GetInTouch from "@/components/GetInTouch";
import Faqs from "@/components/Faqs";
import { Suspense } from "react";
import Loading from "../loading";

export const metadata: Metadata = {
  title: "Outcome-Driven Internet of Things (IoT) Services",
  description:
    "Facilitate your business operations through BigO’s IoT services. Strengthen the speed and reduce error frequency with a substantial cost. Learn more!",
};

const InternetOfThings = () => {
  const faqItems = [
    {
      value: "question-1",
      question: "What is IoT and how can it help businesses?",
      answer:
        "The Internet of Things, or IoT, refers to the interconnectedness of devices and systems. IoT provides businesses with increased output, real-time data insights, and decision-making skills through linking and automating multiple operations.",
    },
    {
      value: "question-2",
      question:
        "Can BigO's IoT services be tailored to cater to the needs of diverse industries?",
      answer:
        "BigO recognizes the different needs of industries. We provide customized IoT solutions, collaborating closely with clients to tailor our services to specific industry needs, whether in manufacturing, healthcare, logistics, or other.",
    },
    {
      value: "question-3",
      question: "How does BigO safeguard the confidentiality of IoT data?",
      answer:
        "Privacy is our top priority. BigO uses strong encryption, authentication, and compliance methods to protect IoT data. We follow industry guidelines and regulations to maintain the integrity and security of your information.",
    },
    {
      value: "question-4",
      question: "What makes BigO stand out in the IoT service industry?",
      answer:
        "BigO distinguishes itself with its experience, collaborative approach, and dedication to technological advances. We render our years of knowledge, cooperate closely with clients, and are always exploring emerging technologies to keep our IoT services at the forefront of industry innovations.",
    },
  ];

  const beyondSectionData = {
    title: "Discover Full-Scale Digital Services Beyond IoT Solutions",
    description:
      "We understand the ever evolving demands of businesses, and finding the finest services has become a challenge for business owners. BigO in collaboration with CyberX Studio fulfills the holistic digital marketing requirements of its clients. If you are looking for services other than the Internet of Things (IoT), then look no further! Let CyberX Studio be your digital marketing partner and upscale your business's online visibility.",
    image: "/beyond-iot.png",
    serviceHeading: "Benefit from the following holistic services suite:",
  };

  const servicesList = [
    "Comprehensive Digital Marketing Strategy",
    "UI/UX Designing",
    "Website Design and Development",
    "SEO Mastery",
    "PPC and Ad Campaigns",
    "Social Media Management",
    "Email Marketing",
    "Content Marketing",
    "Graphics and Animations",
  ];

  const serviceCardsData = [
    {
      title: "Predictive Equipment Care",
      description:
        "With our IoT services, remote tracking of equipment efficiency parameters becomes possible. You can prevent potential dysfunction from surfacing and delay in production.",
      application: "Manufacturing Industry",
      image: "/predictive-equipment.png",
    },
    {
      title: "Remote Handling of Machinery/ Appliances",
      description:
        "Automate manual tasks via control applications for basic actions (activation/deactivation, opening/closing) and complex industrial processes like robot-assisted order picking.",
      application: "Manufacturing and Smart Home Technology Industry",
      image: "/remote-handling.png",
    },
    {
      title: "Regulating Environmental Conditions",
      description:
        "Monitoring environmental factors (temperature, humidity, pollution, CO2) ensures storage compliance and optimizes industrial equipment and workspace conditions for safety and efficiency.",
      application:
        "Manufacturing, Smart Home Technology, and Agriculture Industry",
      image: "/environmental-conditions.png",
    },
    {
      title: "Optimizing Energy Utilization",
      description:
        "Our solutions optimize energy management by adjusting usage based on external conditions, benefiting personal environments like home lighting and public spaces such as street lighting.",
      application: "Smart Home Technology Industry",
      image: "/optimize-energy.png",
    },
    {
      title: "Automated Inventory Administration",
      description:
        "Our system enables prompt and proactive actions by remote monitoring of asset locations and movements and sending out instant alerts for low stock levels.",
      application: "Real Estate Industry",
      image: "/inventory-admin.png",
    },
    {
      title: "Remote Wellness Tracking",
      description:
        "We use wearables for telehealth, tracking patients' vital signs deviations from baseline, promptly notifying physicians, advancing remote monitoring in healthcare.",
      application: "Healthcare Industry",
      image: "/remote-wellness.png",
    },
    {
      title: "Video Monitoring with Instant Signals",
      description:
        "We integrate cameras for swift detection of abnormal activity in surveillance zones, aiding in crime prevention, early fire detection, and traffic incident alerts, bolstering safety measures.",
      application: "Smart Home Technology Industry",
      image: "/video-monitoring.png",
    },
    {
      title: "Service Charges Based on Consumption",
      description:
        "Keeping track of asset usage and its quality to pre-determine any alarming situation that may arise. Eventually, make tweaks to suit the pricing plan for service.",
      application: "Insurance and Rental Industry",
      image: "/services-charges.png",
    },
    {
      title: "Interconnected Mobility",
      description:
        "Ensuring adherence to transportation standards by real-time tracking of cargo during transit.",
      application: "Logistics and Transportation Industry",
      image: "/interconnected-mobility.png",
    },
    {
      title: "Quality Assurance for Products",
      description:
        "Heading manufacturing processes by monitoring the quality metrics of products and ensuring compliance with established standards.",
      application: "Manufacturing Industry",
      image: "/quality-assurance.png",
    },
  ];

  const serviceCardContent = {
    title: "Fueling Industry-Wide Progress with IoT Innovation",
    description:
      "Our services are structured to establish secure technology frameworks, empowering your enterprise for refined data operations. Recognizing the far-reaching advantages  of IoT, we strategically employ  this technology to achieve a range of industry goals.",
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="h-full flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between items-center w-full bg-custom-purple-700 px-8 sm:px-14 lg:px-20 2xl:px-28 pt-10 sm:pt-20 overflow-hidden">
          <div className="pb-0 lg:pb-20 space-y-4 container text-center lg:text-left">
            <h1 className="text-white font-tommy uppercase text-5xl lg:text-[3.5rem]">
              <span className="font-bold">Outcome-Driven</span> Internet of
              Things (IoT) Services
            </h1>
            <p className="text-lg md:text-xl text-secondary">
              At BigO, the core motive of our IoT services is to reveal
              analytical insights about operations, streamline work processes,
              minimize potential challenges, and empower businesses to make
              informed, data-driven decisions.
            </p>

            <Button
              asChild
              variant="outline"
              className="bg-transparent text-white text-lg p-6"
            >
              <Link href="/get-a-quote">Request IoT Services</Link>
            </Button>
          </div>

          <Image src={iotHeader} alt="" className="mix-blend-multiply" />
        </section>
      </Suspense>
      <ChallengesSection />
      <ServicesCardsSection
        serviceCards={serviceCardsData}
        content={serviceCardContent}
      />{" "}
      <Suspense fallback={<Loading />}>
        <BeyondSection data={beyondSectionData} servicesList={servicesList} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <section className="container px-6 sm:px-8 mb-8 flex items-center justify-between gap-4 ">
          <Faqs faqItems={faqItems} />

          <Image
            src="/faq-illustration.png"
            alt="faq-illustration"
            width={550}
            height={550}
            className="hidden md:block"
          />
        </section>
      </Suspense>
      <GetInTouch />
    </>
  );
};

export default InternetOfThings;
