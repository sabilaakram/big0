import Image from "next/image";

interface servicesCardsProps {
  title: string;
  description: string;
  application?: string;
  image?: string;
}

interface contentProps {
  title: string;
  description: string;
}

const ServicesCardsSection = ({
  serviceCards,
  content,
}: {
  serviceCards: servicesCardsProps[];
  content: contentProps;
}) => {
  return (
    <section className="h-full w-full bg-custom-purple-600">
      <div className="container pt-12 pb-8 sm:py-12 px-8 sm:px-10 md:px-20 space-y-4">
        <h2 className="text-custom-purple-300 uppercase text-4xl font-bold text-center">
          {content.title}
        </h2>
        <p className="text-white text-center mx-auto max-w-[850px] text-base md:text-lg">
          {content.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8">
          {serviceCards.map((service) => (
            <div className="flex items-start gap-4" key={service.title}>
              {service.image ? (
                <Image
                  src={service.image}
                  alt={service.title}
                  width={100}
                  height={100}
                  className="w-[50px] h-[50px]"
                />
              ) : null}
              <div className="space-y-3">
                <h3 className="text-white font-bold uppercase text-xl">
                  {service.title}
                </h3>
                <p className="text-white">{service.description}</p>

                {service.application && (
                  <p className="text-white">
                    <span className="text-custom-purple-300 font-bold">
                      Application:{" "}
                    </span>
                    {service.application}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCardsSection;
