import { Separator } from "@/components/ui/separator";

const TooltipSteps = () => {
  const stepsData = [
    {
      title: "Needs Assessment and Planning",
      description:
        "We conduct a comprehensive assessment of the client's business requirements and objectives. After that, we collaborate closely with stakeholders to understand specific data needs and desired outcomes. Then, we develop a customized plan outlining the scope, goals, and milestones for the Business Intelligence implementation.",
    },
    {
      title: "Data Integration and Execution",
      description:
        "Our business intelligence experts gather and consolidate information from diverse sources. Further, we develop a scalable and efficient data warehouse architecture, ensuring data quality and integrity.",
    },
    {
      title: "Decision-Making Through Analytics",
      description:
        "The designed interactive dashboards and visualizations advance intuitive data exploration. It provides analytical data that plays a vital role in decision-making. We utilize advanced analytics tools to extract valuable insights from the integrated data.",
    },
  ];
  return (
    <>
      <div className="flex items-start justify-between flex-col gap-6 md:gap-10 md:flex-row">
        {stepsData.map((step, index) => (
          <div
            key={index}
            className="flex items-center justify-between flex-col gap-8"
          >
            <div className="w-40 h-40 p-4 flex flex-col items-center justify-center text-center gap-2 bg-white shadow-[inset_0_0_8px_rgba(0,0,0,0.75)] rounded-full border-[20px] border-custom-purple-400 relative">
              <h3 className="uppercase text-xl tracking-widest text-gray-400">
                Step
              </h3>
              <span className="text-gray-400 text-4xl tracking-widest font-bold block">
                0 {index + 1}
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-[30px] border-r-[30px] border-t-[45px] border-t-custom-purple-400 border-transparent "></div>
            </div>

            <div className="space-y-2 text-center md:max-w-sm">
              <h2 className="font-bold text-xl">{step.title} </h2>
              <p className="">{step.description}</p>
            </div>
            <Separator
              orientation="vertical"
              className="bg-custom-purple-400"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TooltipSteps;
