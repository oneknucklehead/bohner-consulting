import Container from "@/components/Container";
import React from "react";
import img from "../assets/images/stats.jpg";
import founder from "../assets/images/founder.jpg";

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
                          <span>Healthcare</span>
                        </p>
                      </li>

                      <li className="cursor-pointer hover:bg-white/50  p-1 sm:p-3">
                        <p className="text-sm lg:text-lg  flex gap-1">
                          <span>3.</span>
                          <span>Enterprises</span>
                        </p>
                      </li>
                      <li className="cursor-pointer hover:bg-white/50  p-1 sm:p-3">
                        <p className="text-sm lg:text-lg   flex gap-1">
                          <span>4.</span>
                          <span>Education Sector</span>
                        </p>
                      </li>
                      <li className="cursor-pointer hover:bg-white/50  p-1 sm:p-3">
                        <p className="text-sm lg:text-lg  flex gap-1">
                          <span>5.</span>
                          <span>Home security solutions</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-12">
            <div className="bg-white flex flex-col sm:flex-row max-w-[700px] gap-12 rounded-lg p-8">
              <div className="flex justify-center items-center">
                <div className="rounded-full w-40 h-40">
                  <img
                    src={founder}
                    className=" object-cover w-full h-full rounded-full "
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-center">
                <p className="text-center sm:text-left text-xs lg:text-sm text-gray-400">
                  Founder
                </p>
                <h3 className="text-center sm:text-left text-lg lg:text-xl">
                  Jane Doe
                </h3>
                <p className="text-center sm:text-left text-sm lg:text-base">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <div className="py-4 flex justify-center sm:justify-start gap-4 items-center">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 72 72"
                      fill="#0F75BC"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0V72H72V0H0ZM60 8C62.208 8 64 9.792 64 12C64 14.208 62.208 16 60 16C57.792 16 56 14.208 56 12C56 9.792 57.792 8 60 8ZM36 16C47.044 16 56 24.956 56 36C56 47.044 47.044 56 36 56C24.956 56 16 47.044 16 36C16 24.956 24.956 16 36 16ZM36 24C32.8174 24 29.7652 25.2643 27.5147 27.5147C25.2643 29.7652 24 32.8174 24 36C24 39.1826 25.2643 42.2348 27.5147 44.4853C29.7652 46.7357 32.8174 48 36 48C39.1826 48 42.2348 46.7357 44.4853 44.4853C46.7357 42.2348 48 39.1826 48 36C48 32.8174 46.7357 29.7652 44.4853 27.5147C42.2348 25.2643 39.1826 24 36 24Z"
                        fill="#0F75BC"
                      />
                    </svg>
                  </span>
                  <span className="">
                    <svg
                      width="10"
                      height="20"
                      viewBox="0 0 43 80"
                      fill="#0F75BC"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M42.1 28H28V20C28 15.872 28.336 13.272 34.252 13.272H41.724V0.552006C38.088 0.176006 34.432 -0.00799414 30.772 5.85933e-06C19.92 5.85933e-06 12 6.62801 12 18.796V28H0V44L12 43.996V80H28V43.988L40.264 43.984L42.1 28Z"
                        fill="#0F75BC"
                      />
                    </svg>
                  </span>
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
