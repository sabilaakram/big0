import Image from "next/image";
import { Suspense } from "react";
import Loading from "../../loading";

interface valuesDataProps {
  title: string;
  description: string;
  imageSrc: string;
}

const valuesData: valuesDataProps[] = [
  {
    title: "Innovation",
    description:
      "We are curious to incorporate advanced technology, and look out for breakthroughs.",
    imageSrc: "/innovation.png",
  },
  {
    title: "Commitment",
    description:
      "We are dedicated to helping businesses grow and progress like never before.",
    imageSrc: "/commitment.png",
  },
  {
    title: "Integrity",
    description:
      "We are reliable, transparent, and genuine partners for our clients.",
    imageSrc: "/integrity.png",
  },
  {
    title: "Customer Centric Approach",
    description:
      "Customers are our pride, and customer satisfaction is at the heart of our operations.",
    imageSrc: "/customer-centric-approach.png",
  },
];

const CoreValues = () => {
  return (
    <Suspense fallback={<Loading />}>
      <section className="py-20 px-8 sm:px-10 md:px-20 space-y-8 container">
        <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy text-center">
          Core Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center">
          {valuesData.map((value, index) => (
            <div key={index} className="flex flex-col gap-2 items-center">
              <Image
                src={value.imageSrc}
                alt={value.title}
                width={150}
                height={150}
              />
              <h4 className="text-custom-purple-300 uppercase text-lg font-bold text-center">
                {value.title}
              </h4>
              <p className="text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Suspense>
  );
};

export default CoreValues;
