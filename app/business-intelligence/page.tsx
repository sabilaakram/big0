import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import biHeader from "@/public/bi-intro.png";
import BeyondSection from "@/components/BeyondSection";
import Faqs from "@/components/Faqs";
import GetInTouch from "@/components/GetInTouch";
import TooltipSteps from "@/components/TooltipSteps";
import { Suspense } from "react";
import Loading from "../loading";
import { Metadata } from "next";
import ScrollCards from "@/components/ScrollCards";
import { DialogBox } from "@/components/dialoug";

export const metadata: Metadata = {
  title: "Make Precise Decisions with Business Intelligence Services",
  description:
    "Empower your business operations with data-driven decisions. Drive growth and success with our advanced business intelligence solutions. Get a quote!",
};

interface biSolutionsDataProps {
  title: string;
  description: string;
  imageSrc: string;
}

const BusinessIntelligence = () => {
  const biSolutionsData: biSolutionsDataProps[] = [
    {
      title: "Interactive Dashboards with Data Visualization",
      description:
        "We craft visually appealing and interactive dashboards with integrated data in one location to facilitate clear decision-making. This entails designing intuitive user interfaces, implementing responsive data visualizations, and tailoring dashboards to meet specific business needs.",
      imageSrc: "/dashboard.png",
    },
    {
      title: "Data Warehousing",
      description:
        "At BigO, our Data warehousing solution as part of our Business Intelligence Services involves holistic services to maximize data management, operations efficiency, and precise analytics. We specialize in collecting, integrating, and migrating data from diverse sources, ensuring the working of a well-structured and centralized warehouse.",
      imageSrc: "/data-warehouse.png",
    },
    {
      title: "Predictive Analytics for Effectiveness",
      description:
        "We execute robust Extract, Transform, Load (ETL) procedures for workflow automation, insightful visualization, and maintaining data models for analytical efficiency.",
      imageSrc: "/predictive-analysis.png",
    },
    {
      title: "Business Automation and Optimization",
      description:
        "Our target is to refine overall business by automating and optimizing operations. This leads to minimized manual efforts, and facilitates quicker yet meticulous decision-making based on the stored data.",
      imageSrc: "/business-automation.png",
    },
    {
      title: "Data Quality Handling",
      description:
        "Our experts are adept at guaranteeing the accuracy, consistency, and reliability of data stored in the warehouse. The quality of data is managed constructively through processes such as data profiling, cleansing, and validation, to determine, and resolve discrepancies.",
      imageSrc: "/quality-handling.png",
    },
  ];
  const beyondSectionData = {
    title: "Explore Comprehensive Digital Solutions Beyond BI Services",
    description:
      "In today's dynamic landscape, sourcing top-notch services can be demanding. Recognizing this need, we are cooperating with CyberX Studio to address the diverse digital marketing needs of its clientele. If your quest extends beyond business intelligence solutions, your search ends here! Choose CyberX Studio as your digital marketing partner and upgrade your business's digital presence. Enhance your brand`s visibility in the digital realm by taking advantage of the following holistic services:",
    image: "/beyond-iot.png",
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
  const faqItems = [
    {
      value: "question-1",
      question:
        "What is Business Intelligence (BI) and why is it significant for businesses?",
      answer:
        "Business Intelligence refers to technologies, processes, and tools that help businesses gather, scrutinize, and visualize data to make informed decisions. BI is crucial as it empowers organizations to gain insights, identify trends, and optimize strategies for improved outcomes.",
    },
    {
      value: "question-2",
      question:
        "How can BI services enhance collaboration within an organization?",
      answer:
        "BI fosters collaboration by providing a shared platform for accessing and interpreting data. Teams can collaborate more effectively as they base their decisions on a common understanding of the insights derived from BI analysis.",
    },
    {
      value: "question-3",
      question: "Is Business Intelligence suitable for small businesses?",
      answer:
        "Yes, BI services are scalable and can be customized to meet the specific needs of small, medium, or large enterprises. They offer valuable insights that are cost-effective for data-oriented decision-making.",
    },
    {
      value: "question-4",
      question:
        "What security measures does BigO put in place to protect sensitive business data in BI systems?",
      answer:
        "Our BI systems implement sound security measures, including user authentication, encryption, and access controls. These measures ensure that only authorized personnel can access and alter sensitive business data.",
    },
  ];

  const partnerLogos = [
    "/matplot-logo",
    "/pandas-logo",
    "/python-logo",
    "/sql-logo",
    "/numpy-logo",
  ];

  const scrollCardsData = [
    {
      title: "Enterprise Intelligence",
      description:
        "Integrate and maintain company-wide data, monitor and assess performance, and support both managerial and strategic planning.",
      imageSrc: "/enterprise-intelligence.png",
    },
    {
      title: "Operational Intelligence",
      description:
        "Keep track of and evaluate operational processes, pinpoint challenges, and forecast working efficiency.",
      imageSrc: "/operational-intelligence.png",
    },
    {
      title: "Customer Intelligence",
      description:
        "Generate an extensive 360-degree customer view, monitor and model customer behavior, and oversee customer relationships.",
      imageSrc: "/customer-intelligence.png",
    },
    {
      title: "Financial Intelligence",
      description:
        "Manage firm finances, including income, expenses, and revenue. Also, evaluate financial functioning. Strategize, make a budget and anticipate risks for a sound financial situation.",
      imageSrc: "/financial-intelligence.png",
    },
    {
      title: "Brand and Product Intelligence",
      description:
        "Conduct analysis of product and service performance, optimize the product and service portfolio, analyze brand awareness, and benchmark against competitors for strategic insights.",
      imageSrc: "/brand-and-product-intelligence.png",
    },
    {
      title: "Supply Chain Intelligence",
      description:
        "Improve transparency in the supply chain, analyze factors driving demand, plan, and forecast demand, manage threats in the supply chain, and model or optimize costs associated with the supply chain.",
      imageSrc: "/supply-chain-intelligence.png",
    },
    {
      title: "Transportation and Logistics Intelligence",
      description:
        "Conduct operational planning, enhance efficiency through both static and dynamic route optimization and employ data-driven approaches to gauge fuel consumption.",
      imageSrc: "/transportation-and-logistics-intelligence.png",
    },
    {
      title: "Production Intelligence",
      description:
        "Analyze and optimize production procedures, track overall equipment health, and implement predictive maintenance for equipment.",
      imageSrc: "/production-intelligence.png",
    },
    {
      title: "HR Intelligence",
      description:
        "Monitor and assess employee performance, plan workforce management, predict and manage employee churn, and analyze employee recruiting for comprehensive HR insights.",
      imageSrc: "/hr-intelligence.png",
    },
    {
      title: "E-commerce Intelligence",
      description:
        "Enhance operational efficiency by evaluating customer behavior through analytics, scrutinizing sales and marketing implementation, and integrating intelligent demand forecasting.",
      imageSrc: "/e-commerce-intelligence.png",
    },
  ];

  const visualCards = [
    { heading: "Radar Chart", imageSrc: "/symbol-map.png" },
    {
      heading: "Line Chart",
      imageSrc: "/line-chart.png",
    },
    {
      heading: "Bar Charts",
      imageSrc: "/bar-chart.png",
    },
    {
      heading: "Pie Charts",
      imageSrc: "/pie-chart.png",
    },
    {
      heading: "Donut Charts",
      imageSrc: "/donut-chart.png",
    },
    {
      heading: "Polar Chart",
      imageSrc: "/funnel-chart.png",
    },
    {
      heading: "Connectivity Charts",
      imageSrc: "/connectivity-chart.png",
    },
    {
      heading: "Scatterplots",
      imageSrc: "/scatterplot.png",
    },
    // {
    //   heading: "Heatmaps",
    //   imageSrc: "/heat-map.png",
    // },
    // {
    //   heading: "Sparklines",
    //   imageSrc: "/sparkline.png",
    // },
    // {
    //   heading: "Matrices",
    //   imageSrc: "/matrix.png",
    // },
    // {
    //   heading: "Pivot Tables",
    //   imageSrc: "/pivot-table.png",
    // },
    // {
    //   heading: "Guage Charts",
    //   imageSrc: "/gauge-chart.png",
    // },
    // {
    //   heading: "Waterfall Charts",
    //   imageSrc: "/waterfall-chart.png",
    // },
    // {
    //   heading: "Card Charts",
    //   imageSrc: "/card-chart.png",
    // },
    // {
    //   heading: "Custom Charts",
    //   imageSrc: "/thermometer-chart.png",
    // },
  ];

  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="h-full flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between items-center w-full bg-custom-purple-700 px-8 sm:px-14 lg:px-20 2xl:px-28 pt-10 sm:pt-20 overflow-hidden">
          <div className="pb-0 lg:pb-20 space-y-4 container text-center lg:text-left">
            <h1 className="text-white font-tommy uppercase text-5xl lg:text-[3.5rem]">
              <span className="font-bold">Make Precise Decisions</span> with
              Business Intelligence Services
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

          <div className="pt-8 flex flex-wrap justify-center gap-10 lg:gap-20 w-full">
            {biSolutionsData.map((solution) => (
              <div
                key={solution.title}
                className="flex items-start flex-wrap lg:flex-nowrap gap-6 w-full md:max-w-[350px] xl:max-w-[500px]"
              >
                <Image
                  src={solution.imageSrc}
                  alt={solution.title}
                  width={100}
                  height={100}
                  className="w-[100px] h-[100px]"
                />

                <div className="space-y-3">
                  <h3 className="font-bold uppercase text-xl">
                    {solution.title}
                  </h3>
                  <p>{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <div className="bg-gray-300">
          <section className="py-8 sm:py-12 px-8 sm:px-10 lg:px-20 space-y-4 container">
            <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy text-center">
              Innovative Analytical Technologies for BI{" "}
            </h2>

            <div className="pt-8 flex flex-wrap justify-center items-center gap-10 lg:gap-20 w-full">
              {partnerLogos.map((logo, index) => (
                <div key={index} className="w-full  max-w-max xl:max-w-[275px]">
                  <Image
                    src={`${logo}.png`}
                    alt=""
                    width={250}
                    height={100}
                    className="mix-blend-luminosity w-full"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <section className="py-8 sm:py-12 px-8 sm:px-10 md:px-20 space-y-4 container">
          <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy mx-auto max-w-2xl text-center">
            Navigating Insights with Business Intelligence Dashboards
          </h2>

          <ScrollCards scrollCardsData={scrollCardsData} />
        </section>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <section className="py-8 sm:py-12 px-8 sm:px-10 md:px-20 space-y-4 container">
          <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy text-center">
            Convert Raw Data into Interactive BI Visuals{" "}
          </h2>
          <p className="mx-auto max-w-2xl text-center">
            Dispersed and disorganized data can bring a lot of confusion and
            frustration. Our BI dashboards are designed to be systematically and
            visually engaging to analyze the performance trajectory of the
            business and strengthen data management.
          </p>

          <div className="grid items-start grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {visualCards.map((card) => (
              <div
              
                className="flex flex-col items-center text-center justify-center gap-2 cursor-pointer"
                key={card.heading}
              >
                <DialogBox
                src={card.imageSrc}
                alt={card.heading}
                chartType={card.heading.replace(" ", "").toLowerCase()}
                />
                {/* <Image
                  src={card.imageSrc}
                  alt={card.heading}
                  width={100}
                  height={100}
                  className="w-[150px] h-[150px]"
                  
                /> */}

                <h2 className="font-bold">{card.heading}</h2>
              </div>
            ))}
          </div>
        </section>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <section className="py-8 sm:py-12 px-8 sm:px-10 md:px-20 space-y-4 container">
          <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy text-center">
            Processes Driving Our Business Intelligence Services{" "}
          </h2>
          <p className="mx-auto max-w-2xl text-center">
            We outshine by prioritizing purpose over flashy features to impress
            customers. Our approach focuses on goal-oriented business
            intelligence BI solutions, guaranteeing that every stage of the
            process yields value.{" "}
          </p>

          <TooltipSteps />
        </section>
      </Suspense>

      <BeyondSection data={beyondSectionData} servicesList={servicesList} />

      <section className="container px-6 sm:px-8 flex items-center justify-between gap-4 xl:h-screen xl:max-h-[800px]">
        <Faqs faqItems={faqItems} />
        <Image
          src="/faq-illustration.png"
          alt="faq-illustration"
          width={550}
          height={550}
          className="hidden md:block"
        />
      </section>

      <GetInTouch />
    </>
  );
};

export default BusinessIntelligence;