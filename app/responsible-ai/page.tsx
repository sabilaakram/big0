import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import responsibleAiHeader from "@/public/responsible-ai-header.png";
import Faqs from "@/components/Faqs";
import GetInTouch from "@/components/GetInTouch";
import BeyondSection from "@/components/BeyondSection";
import ServicesCardsSection from "@/components/ServicesCardsSection";
import VideoCta from "@/components/VideoCta";
import FiveCardsSection from "@/components/FiveCardsSection";
import { Suspense } from "react";
import Loading from "../loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible AI Service | BigO",
  description:
    "BigO enables businesses to wield artificial intelligence with trust, confidence, and transparency through innovative and Responsible AI service.",
};

const ResponsibleAi = () => {
  const beyondSectionData = {
    title: "Explore Beyond Responsible AI Service: Full-Scale Digital Suite",
    description:
      "The tech-driven changes are fueling high competition, and the fittest will survive in the digital landscape. BigO, in collaboration with CyberX Studio, acknowledges the challenges in digitization and online visibility beyond Responsible AI expertise. It facilitates strategic planning, designing of course of action, and execution, empowering enterprises to excel in the digital realm by refining their online presence and elevating customer engagement. CyberX Studio is your one-stop shop for upscaling your business visibility and building worth in the global market. Connect and witness how this holistic suite of services accelerates your organization`s success!",
    image: "/beyond-ai.png",
  };

  const servicesList = [
    "All-Inclusive Digital Marketing Strategy",
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
        "What Steps Organizations Need to Take to Ensure Transparency in AI Decision-Making?",
      answer:
        "Organizations can prioritize transparency in AI decision-making by providing clear explanations for model outputs, disclosing data sources, and documenting algorithms. They should ensure open communications with stakeholders, employees, and other concerned personnel regarding the decision-making process, including biases and limitations (if any), to build trust. Furthermore, adherence to ethical guidelines and legal obligations contribute to creating transparent and accountable AI systems.",
    },
    {
      value: "question-2",
      question: "How can Organizations Mitigate Bias in AI Algorithms?",
      answer:
        "Mitigating bias in AI algorithms involves integrating and using fairness-aware algorithms, careful data curation, and diverse and representative datasets. Regular testing, ongoing monitoring, and promoting diversity in AI teams further aid in identifying and addressing any biases that may emerge during the development and deployment of AI systems.",
    },
    {
      value: "question-3",
      question:
        "What Measures Can Organizations Take to Address AI’s Societal Impact?",
      answer:
        "Organizations can address the societal impact of AI technologies by engaging in collaborative efforts with policymakers, tech experts, the public, or end-users. Developing, implementing, and maintaining responsible governance frameworks, abiding by ethical standards, and promoting public awareness contribute to deploying responsible AI. Hence, organizations can ensure societal well-being as well as contribute to diverse communities' well-being at large.",
    },
    {
      value: "question-4",
      question:
        "Are there any Global Standards, Obligations, or Frameworks for the Deployment of Responsible AI?",
      answer:
        "Yes, there are several existing and emerging international standards and frameworks for responsible AI integration. These include the EU’s AI Ethics Guidelines, the Partnership on AI (PAI), OECD AI Principles, and the IEEE Global Initiative on Ethics of Autonomous and Intelligent Systems. By adhering to these, organizations can ensure ethical AI development and system deployment.",
    },
  ];

  const serviceCardContent = {
    title: "Navigating Ethical Terrain with Strategic Phases",
    description:
      "Through strategic phases, our seasoned team of IT experts designs a comprehensive, responsible AI framework that aligns with not only your business's current operations but also the bottom line. From understanding your organizational values, legal considerations, and end goals to developing a transparent model and eliminating bias, we empower you to scale AI with confidence. Nonetheless, we commit to transparency, fairness, and accountability at every step.",
  };

  const serviceCardsData = [
    {
      title: "Phase - 1: Analyze, Understand, and Plan",
      description:
        "Following a holistic approach, we simplify intricacies through interactive sessions to understand the operations, system, structure, and goals of your organization. Our experts then craft tailored strategies and roadmaps to streamline the easy development of responsible AI systems.",
    },
    {
      title: "Phase - 2: Ethical Framework Development",
      description:
        "After successful planning, our team begins to develop an ethical framework specifically for  your organization, containing policies, procedures, and best practices to ensure the responsible use of AI.",
    },
    {
      title: "Phase - 3: Transparent AI Model Implementation",
      description:
        "Following the development of the ethical framework, we move to the implementation phase, where transparent AI models take center stage. This enables you to foster clarity in decision-making, trust among stakeholders regarding privacy, and transparency and accountability among your in-house teams.",
    },
    {
      title: "Phase - 4: Limitations and Bias Mitigation",
      description:
        "Guarding against biases is the fourth phase of our responsible AI framework. Our experts employ advanced techniques to identify and mitigate biases in existing AI systems to streamline the deployment of newly developed, responsible models.",
    },
    {
      title: "Phase - 5: Privacy Protection Measures",
      description:
        "Following the development of the ethical framework, we move to the implementation phase, where transparent AI models take center stage. This enables you to foster clarity in decision-making, trust among stakeholders regarding privacy, and transparency and accountability among your in-house teams.",
    },
    {
      title: "Phase - 6: Continuous Monitoring and Adaptation",
      description:
        "Our joint venture with clients does not end with implementation rather goes beyond execution to continuous monitoring. Upon their request, we deliver additional assistance to keep a check on their AI system`s alignment with regulations and ethics and if they are adapting to changes in data patterns and maintaining responsible AI practices over time.",
    },
  ];

  const videoCtaData = {
    title: "Scale AI for Business Responsibly",
    description:
      "Gain the Competitive Edge For Your Business with Our Responsible AI Services",
    height: "h-screen md:h-[500px]",
    videoSrc: "/responsible-ai-cta.mp4",
  };

  const fiveCardsSectionCotent = {
    title: "Technology Meets Responsibility, Transparency, and Trust",
    description:
      "Embracing Responsible AI is crucial for mitigating the inherent risks associated with artificial intelligence. Our next-gen RAI service empowers you to reassess or establish ethical practices and anticipate future regulations with little to no compromise on trust. By offering adaptable frameworks, tools, and processes, we make the ethical deployment of AI a success.",
  };

  const fiveCardsData = [
    {
      title: "Mitigate Unintentional Bias",
      description:
        "Incorporate responsibility into your AI framework to cut down on unintended biases, ensuring that both algorithms and the underlying data are impartial and accurately representative.",
    },
    {
      title: "Foster Transparency in AI Integration",
      description:
        "To instill confidence among employees and customers, integrate explainable and transparent AI systems throughout their processes and functions.",
    },
    {
      title: "Empower Employees and Teams",
      description:
        "Enable individuals within your organization to voice doubts or concerns about AI systems, fostering effective governance without impeding innovation.",
    },
    {
      title: "Ensure Data Privacy and Security",
      description:
        "Adopt a privacy and security-centric approach to guarantee that personal and sensitive data is never utilized unethically or breached.",
    },
    {
      title: "Benefits Clients and the Market at Large",
      description:
        "Establish ethical AI models to reduce biases and errors and implement systems that contribute to the well-being of shareholders, employees, and the business industry at large.",
    },
  ];

  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="h-full flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between items-center w-full bg-custom-purple-700 px-8 sm:px-14 lg:px-20 2xl:px-28 pt-10 sm:pt-20 overflow-hidden">
          <div className="pb-0 lg:pb-20 space-y-4 container text-center lg:text-left">
            <h1 className="text-white font-tommy uppercase text-5xl lg:text-[3.5rem]">
              Responsible <span className="font-bold">AI</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary">
              Develop and Deploy AI Capabilities that are Compliant and Inspire
              Confidence and Responsibility
            </p>

            <Button
              asChild
              variant="outline"
              className="bg-transparent text-white text-lg p-6"
            >
              <Link href="/">Learn More</Link>
            </Button>
          </div>

          <Image
            src={responsibleAiHeader}
            alt=""
            className="mix-blend-overlay"
          />
        </section>
      </Suspense>

      <Suspense fallback={<Loading />}>
        <section className="h-full flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 justify-between items-center w-full px-8 sm:px-14 lg:px-20 2xl:px-28 py-12 container">
          <Image src="/ai-intro.png" alt="" width={550} height={550} />

          <div className="space-y-4 text-center lg:text-left max-w-3xl">
            <h2 className="text-custom-purple-300 font-bold text-3xl uppercase">
              Limitless Possibilities to Deploy AI with Confidence
            </h2>

            <p>
              Organizations continue to embrace advanced emerging Artificial
              Intelligence (AI) technologies to automate their operations and
              reap competitive business benefits.
            </p>
            <p>
              What is AI doing, though? Are its decisions bias-aware,
              error-free, and accurate, or in any way violating privacy?
            </p>
            <p>
              With great power comes even greater responsibility, and BigO is
              your trusted partner in striking a balance between responsible AI
              use with trust, transparency, and confidence. Our Responsible AI
              (RAI) service is designed to leverage tools, techniques, and
              frameworks necessary to uphold ethical and legal obligations.
              Fundamentally, the technology is capable of reshaping the business
              landscape with improved efficiency, promising heightened
              productivity, cost-effectiveness, increased customer satisfaction,
              and compliance.{" "}
            </p>

            <Button
              asChild
              className="bg-custom-purple-400 hover:bg-custom-purple-500 px-10 py-6 text-lg"
            >
              <Link href="/get-a-quote">Get A Quote</Link>
            </Button>
          </div>
        </section>
      </Suspense>

      <ServicesCardsSection
        content={serviceCardContent}
        serviceCards={serviceCardsData}
      />
      <VideoCta videoCtaData={videoCtaData} />
      <FiveCardsSection
        fiveCardsData={fiveCardsData}
        fiveCardsSectionCotent={fiveCardsSectionCotent}
      />
      <BeyondSection data={beyondSectionData} servicesList={servicesList} />
      <section className="container px-6 sm:px-8 mb-8 flex items-center justify-between gap-4">
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

export default ResponsibleAi;
