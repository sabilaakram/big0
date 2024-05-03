import { FeatureSection } from "@/app/_components/FeaturesSection";
import { HeroSection } from "@/app/_components/HeroSection";
import { getHomePageData } from "@/data/loaders";
import IntroSection from "@/app/_components/IntroSection";
import CarouselSection from "@/app/_components/CarouselSection";
import Faqs from "@/components/Faqs";
import Resources from "@/components/Resources";
import { Separator } from "@/components/ui/separator";
import GetInTouch from "@/components/GetInTouch";

const featuresData = [
  {
    id: 1,
    heading: "Business Intelligence (BI) Services",
    subHeading:
      "We develop interactive dashboards for real-time data visualization, turning it into a business advantage through Extract, Transform, and Load (ETL) pipeline development. Our BI services leverage industrial-grade tools like Apache Spark, SQL, Python, R, Numpy, Pandas and more to deliver impactful analytics services.",
    image: {
      id: 1,
      url: "/meeting.png",
      alternativeText:
        "Tapping into the Potential of AI, ML, and Connected Intelligence for Business Automation",
    },
  },
  {
    id: 2,
    heading: "Responsible AI Services",
    subHeading:
      "We offer custom-made AI model development using TensorFlow or PyTorch, federated learning solutions for privacy preservation, and predictive insights for resource handling and equipment or machinery maintenance.",
    image: {
      id: 2,
      url: "/artificial_intelligence.png",
      alternativeText:
        "Leveraging an Innovative, Unified, and Personalized Experience for Our Clients",
    },
  },
  {
    id: 3,
    heading: "Cloud Services",
    subHeading:
      "We provide end-to-end cloud infrastructure setup and management using AWS, Terraform, Docker, and Kubernetes along with DevOps integration through Jenkins and GIT. In addition, our cloud services include big data analytics and processing.",
    image: {
      id: 3,
      url: "/cloud_services.png",
      alternativeText: "Helping Businesses Scale and Revamp For Diverse Needs",
    },
  },
  {
    id: 4,
    heading: "Internet of Things (IoT) Services",
    subHeading:
      "We empower clients to adapt to their changing needs and integrate IoT technology into their infrastructures. Our IoT services provide business automation by leveraging real-time data analytics and processing and improving operational efficiency.",
    image: {
      id: 4,
      url: "/iot_services.png",
      alternativeText:
        "Embracing Modern Technology and Delivering the Finest to Our Clients",
    },
  },
];

const faqItems = [
  {
    value: "question-1",
    question: "How Can Businesses Ensure Responsible AI Practices?",
    answer:
      "Responsible AI, in the simplest sense, is the ethical and fair deployment of artificial intelligence and its derivants, such as machine learning, deep learning, and other technologies. Businesses can ensure this by implementing ethical guidelines, conducting regular audits, and prioritizing transparency and accountability. Furthermore, responsible AI service providers can be their go-to place for streamlining the ethical and fair use of artificial intelligence technologies.",
  },
  {
    value: "question-2",
    question:
      "What Challenges Are Faced by Businesses in Integrating BI Solutions?",
    answer:
      "Organizations face several challenges while implementing BI solutions independently and without external help. These include understanding algorithms, integration complexities, data privacy issues, user adoption, and system monitoring.",
  },
  {
    value: "question-3",
    question: "How Does Business Intelligence (BI) Support Data Usage?",
    answer:
      "BI helps businesses integrate and manage responsible data usage by implementing data privacy policies, promoting ethical practices, and ensuring compliance with regulatory standards. Hence, organizations need to choose wisely for their BI service providers that fall on both ethical and legal criteria.",
  },
  {
    value: "question-4",
    question:
      "What are the Key Considerations for Choosing a Cloud Service Provider?",
    answer:
      "Businesses should consider before selecting a cloud service provider including security measures, compliance status, pricing models, reputation in the market, scalability, types of services, and the provider's track record in service reliability. If enterprises trust any service provider, they will more likely fall prey to an illicit moneymaker or con company.",
  },
];

const Home = async () => {
  return (
    <main className="bg-gray-200 h-full">
      <HeroSection />
      <IntroSection />
      <FeatureSection data={featuresData} />
      <CarouselSection />
      <section className="container px-6 sm:px-8 lg:h-screen 2xl:max-h-[800px] my-8 flex items-center justify-between gap-4 flex-wrap lg:flex-nowrap">
        <Resources />
        <Separator
          className="bg-custom-purple-300 hidden sm:block h-[1px] w-full lg:h-full lg:w-[1.5px]"
          orientation="vertical"
        />
        <Faqs faqItems={faqItems} />
      </section>
      <GetInTouch />
    </main>
  );
};

export default Home;
