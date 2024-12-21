import React from "react";
import { Link } from "react-router";

import list, { serviceData } from "@/data/Services";
import mainImg1 from "../assets/images/products/service1/product1.png";
import { Link as LinkScroll } from "react-scroll";
import Card from "@/components/Card";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <div>
      <div className="">
        {/* HOME BUTTON */}
        <Link to={"/"}>Home</Link>
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
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
