import Image from "next/image";

interface beyondSectionProps {
  title: string;
  description: string;
  serviceHeading?: string;
  image: string;
  href?: string;
}

const BeyondSection = ({
  data,
  servicesList,
}: {
  data: beyondSectionProps;
  servicesList: string[];
}) => {
  return (
    <section className="py-8 sm:py-12 px-8 sm:px-10 md:px-20 container">
      <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy">
        {data.title}{" "}
      </h2>
      <p className="mt-2 max-w-6xl">{data.description}</p>

      <div className="flex items-start justify-between flex-col lg:flex-row gap-8 mt-8">
        <div className="lg:min-w-[450px]">
          <h6 className="font-bold">{data.serviceHeading}</h6>

          <ul className="space-y-2 pt-4">
            {servicesList.map((service, index) => (
              <li
                key={index}
                className="relative before:content-[''] before:w-1 before:h-1 before:bg-black before:inline-block before:rounded-full flex items-center gap-3"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={data.image}
          alt=""
          width={800}
          height={500}
          className="w-full h-full max-w-[850px]"
        />
      </div>
    </section>
  );
};

export default BeyondSection;
