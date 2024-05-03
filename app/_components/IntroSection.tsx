import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const IntroSection = () => {
  return (
    <Card className="bg-custom-purple-500 max-w-[95%] md:max-w-[70%] 2xl:max-w-[1400px] mx-auto px-4 py-8 mt-4 sm:-mt-10 lg:-mt-20 z-30 relative border-none">
      <strong className="text-custom-purple-50 font-bold text-lg uppercase">
        Who are We?
      </strong>
      <CardTitle className="text-white uppercase text-3xl font-tommy font-normal">
        BigO Comprehensive Services: Transforming Data into{" "}
        <span className="font-bold">Insights</span>
      </CardTitle>

      <CardDescription className="text-white mt-4">
        The business sector depends heavily on applying cutting-edge technology,
        such as artificial intelligence (AI), machine learning (ML), and more,
        to refine the decision-making process, accelerate growth and maintain a
        competitive advantage. However, the challenge is determining how to spur
        creativity and replicate success rather than technological chaos.
      </CardDescription>

      <CardDescription className="text-white mt-4">
        At BigO, we strive to leverage technological innovation with our
        efficient responsible AI-driven Business Intelligence (BI) solutions. We
        empower Small and Medium Enterprises (SMEs) to stay ahead of the
        competitive curve with data-driven insights and analytics. With a
        comprehensive suite of advanced AI and BI services, excel with enhanced
        decision-making prowess.
      </CardDescription>
    </Card>
  );
};

export default IntroSection;
