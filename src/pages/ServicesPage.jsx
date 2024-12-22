import React from "react";
import { Link } from "react-router";
import imgSrc from "../assets/images/logo.png";

import list, { serviceData } from "@/data/Services";
import mainImg1 from "../assets/images/products/service1/product1.png";
import { Link as LinkScroll } from "react-scroll";
import Card from "@/components/Card";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <div>
      <div className="flex gap-2 justify-between p-8">
        {/* HOME BUTTON */}
        <Link to={"/"}>
          <div className=" bg-[#095DAB] p-3 rounded-full flex items-center justify-center">
            <svg
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538407 7.04738 0.538407 6.65685 0.928932L0.292893 7.29289ZM13 7L1 7L1 9L13 9L13 7Z"
                fill="white"
              />
            </svg>
          </div>
        </Link>
        <span className="w-[30px] md:w-[45px]">
          <img
            className="w-[30px] md:w-[45px]"
            src={imgSrc}
            alt="Transcon logo"
          />
        </span>
      </div>
      {/* <div className="max-w-[80%] grid place-items-center justify-self-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {list.map((item, index) => (
          <Card
            key={index}
            img={item.mainImg}
            title={item.title}
            description={
              item.description ? item.description : "Description coming soon..."
            }
            to={item.to}
          />
        ))}
      </div> */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center p-4">
        {list.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <Card
              img={card.mainImg}
              title={card.title}
              description={card.description}
              to={card.to}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center gap-4">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            images={service.images}
            title={service.title}
            description={service.description}
            id={service.to}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
