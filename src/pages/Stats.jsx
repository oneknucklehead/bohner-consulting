import Container from "@/components/Container";
import React from "react";
import img from "../assets/images/stats.jpg";

const Stats = () => {
  const cardDetails = [
    {
      heading: "500+",
      description:
        "Over 34 years of excellent service and thousands of Happy customers",
    },
    {
      heading: "35%",
      description:
        "Over 34 years of excellent service and thousands of Happy customers",
    },
    {
      heading: "40",
      description:
        "Over 34 years of excellent service and thousands of Happy customers",
    },
    {
      heading: "20+",
      description:
        "Over 34 years of excellent service and thousands of Happy customers",
    },
  ];

  return (
    <div className="bg-[#0F75BC]">
      <Container>
        <div className="py-12">
          <div className="text-white py-8 flex flex-col justify-center items-center">
            <p className="font-light md:text-lg">Our success</p>
            <h3 className="text-3xl md:text-5xl font-light pt-2 text-center leading-tight">
              We have a proven track <br /> record of success.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-center items-center">
              <img
                src={img}
                alt="..."
                className="aspect-square object-cover rounded-lg max-h-[300px] md:max-h-[500px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 h-full w-full">
              <div className="flex flex-col gap-4 justify-evenly">
                <StatCard
                  heading={cardDetails[0]?.heading}
                  description={cardDetails[0]?.description}
                />
                <StatCard
                  heading={cardDetails[1]?.heading}
                  description={cardDetails[1]?.description}
                />
              </div>
              <div className="flex flex-col gap-4 justify-evenly">
                <StatCard
                  heading={cardDetails[2]?.heading}
                  description={cardDetails[2]?.description}
                />
                <StatCard
                  heading={cardDetails[3]?.heading}
                  description={cardDetails[3]?.description}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const StatCard = ({ heading, description }) => {
  return (
    <div className="bg-white p-6 xl:p-8 flex flex-col justify-center items-center rounded-lg">
      <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
        {heading}
      </h1>
      <p className="text-center text-xs sm:text-sm lg:text-base xl:text-lg pt-2 xl:pt-4">
        {description}
      </p>
    </div>
  );
};

export default Stats;
