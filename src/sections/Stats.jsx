import Container from "@/components/Container";
import React from "react";
import img from "../assets/images/stats.jpg";

const Stats = () => {
  const cardDetails = [
    {
      heading: "3+",
      description: "Years of operation",
    },
    {
      heading: "15+",
      description: "Global brands",
    },
    {
      heading: "7+",
      description: "Industries catered to",
    },
    // {
    //   heading: "20+",
    //   description:
    //     "Over 34 years of excellent service and thousands of Happy customers",
    // },
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
            <div className="grid grid-cols-2 gap-8 h-full w-full">
              <div className=" order-last md:order-first flex flex-col gap-4 justify-evenly">
                <StatCard
                  heading={cardDetails[0]?.heading}
                  description={cardDetails[0]?.description}
                />
                <StatCard
                  heading={cardDetails[1]?.heading}
                  description={cardDetails[1]?.description}
                />
                <StatCard
                  heading={cardDetails[2]?.heading}
                  description={cardDetails[2]?.description}
                />
              </div>
              <div className="flex flex-col gap-4 justify-evenly">
                {/* <StatCard
                  heading={cardDetails[3]?.heading}
                  description={cardDetails[3]?.description}
                /> */}
                <div className="">
                  <div className="text-white text-sm lg:text-base flex flex-col justify-center h-full gap-3">
                    {/* <p className="font-light">Our clients</p> */}
                    <h3 className="font-semibold text-lg md:text-2xl lg:text-3xl">
                      Industries we cater towards
                    </h3>
                    <ul className="flex flex-col">
                      <li className="cursor-pointer hover:bg-white/50 p-1 sm:p-3">
                        <p className=" text-sm lg:text-lg flex gap-1">
                          <span>1.</span>
                          <span>Government Infrastructure</span>
                        </p>
                      </li>
                      <li className="cursor-pointer hover:bg-white/50  p-1 sm:p-3">
                        <p className="text-sm lg:text-lg flex gap-1">
                          <span>2.</span>
                          <span>Education Sector</span>
                        </p>
                      </li>
                      <li className="cursor-pointer hover:bg-white/50  p-1 sm:p-3">
                        <p className="text-sm lg:text-lg  flex gap-1">
                          <span>3.</span>
                          <span>Corporates</span>
                        </p>
                      </li>
                      <li className="cursor-pointer hover:bg-white/50  p-1 sm:p-3">
                        <p className="text-sm lg:text-lg   flex gap-1">
                          <span>4.</span>
                          <span>Manufacturing Sector</span>
                        </p>
                      </li>
                      <li className="cursor-pointer hover:bg-white/50  p-1 sm:p-3">
                        <p className="text-sm lg:text-lg  flex gap-1">
                          <span>5.</span>
                          <span>Training Institutes</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
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
    <div className="bg-white p-4 sm:p-6 xl:p-8 flex flex-col justify-center items-center rounded-lg">
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
