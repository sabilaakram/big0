import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface Feature {
  id: number;
  heading: string;
  subHeading: string;
  image: {
    url: string;
    alternativeText: string;
  };
}

const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <Card
      key={feature.id}
      className="space-y-4 px-6 py-4 bg-custom-purple-500 border-none z-20"
    >
      <CardHeader className="items-center p-0 lg:-mt-14">
        <Image
          width={150}
          height={150}
          alt={feature.image.alternativeText}
          src={feature.image.url ?? "https://placehold.co/150x150"}
        />
      </CardHeader>
      <CardContent className="p-0 flex justify-between flex-col gap-2">
        <CardTitle className="mb-4 text-2xl font-bold text-white">
          {feature.heading}
        </CardTitle>
        <CardDescription className="text-gray-100">
          {feature.subHeading}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
