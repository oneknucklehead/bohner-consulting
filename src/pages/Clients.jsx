import Container from "@/components/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import React from "react";
import img1 from "../assets/images/clients/pic1.png";
import img2 from "../assets/images/clients/pic2.png";
import img3 from "../assets/images/clients/pic3.png";
import img4 from "../assets/images/clients/pic4.png";
import img5 from "../assets/images/clients/pic5.png";
import img6 from "../assets/images/clients/pic6.png";
import img7 from "../assets/images/clients/pic7.png";

const Clients = () => {
  const clients = [img1, img2, img3, img4, img5, img6, img7];
  return (
    <div className="bg-[#0F75BC] px-8 md:px-12">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 py-12">
          <div className="col-span-1 md:col-span-2 xl:col-span-3">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
              <CarouselContent>
                {clients.map((client, index) => (
                  <CarouselItem
                    key={index}
                    className=" md:basis-1/2 xl:basis-1/3 rounded-lg"
                  >
                    <ClientCard imgSrc={client} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="col-span-1">
            <div className="text-white text-sm lg:text-base flex flex-col justify-center h-full gap-3">
              <p className="font-light">Our clients</p>
              <h3 className="font-semibold text-2xl lg:text-3xl">
                Our innovative solutions are designed to
              </h3>
              <p className="text-sm lg:text-lg">
                We provide to enhance your lorem ipsum We provide to enhance
                your lorem ipsum
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const ClientCard = ({ imgSrc, index }) => {
  return (
    <div className="p-5  rounded-lg bg-white flex items-center justify-center w-full h-full">
      <img src={imgSrc} alt={`client ${index}`} className="object-contain" />
    </div>
  );
};

export default Clients;
