import Container from "@/components/Container";
import React, { useState } from "react";
import img from "../assets/images/stats.webp";

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
              <ImageWithSkeleton
                src={img}
                alt="Success statistics"
                className="aspect-square object-cover rounded-lg max-h-[300px] md:max-h-[500px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 h-full w-full">
              <div className="order-last md:order-first flex flex-col gap-4 justify-evenly">
                {cardDetails.map((card, i) => (
                  <StatCard
                    key={i}
                    heading={card.heading}
                    description={card.description}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-4 justify-evenly">
                <div className="">
                  <div className="text-white text-sm lg:text-base flex flex-col justify-center h-full gap-3">
                    <h3 className="font-semibold text-lg md:text-2xl lg:text-3xl">
                      Industries we cater towards
                    </h3>
                    <ul className="flex flex-col">
                      {[
                        "Government Infrastructure",
                        "Healthcare",
                        "Enterprises",
                        "Education Sector",
                        "Home security solutions",
                      ].map((item, idx) => (
                        <li
                          key={idx}
                          className="cursor-pointer hover:bg-white/50 p-1 sm:p-3"
                        >
                          <p className="text-sm lg:text-lg flex gap-1">
                            <span>{idx + 1}.</span>
                            <span>{item}</span>
                          </p>
                        </li>
                      ))}
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

const ImageWithSkeleton = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className={`relative w-full ${className}`}>
      {!loaded && !errored && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setLoaded(true);
          setErrored(true);
        }}
        className={`w-full h-full object-cover transition-opacity duration-300 rounded-lg ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default Stats;
