import Container from "@/components/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import img1 from "../assets/images/clients/pic1.png";
import img2 from "../assets/images/clients/pic2.png";
import img3 from "../assets/images/clients/pic3.png";
import img4 from "../assets/images/clients/pic4.png";

const Clients = () => {
  const clients = [img1, img2, img3, img4];
  return (
    <div className="bg-[#0F75BC]">
      <Container>
        <div className="grid grid-cols-4 gap-4 py-12">
          <div className="col-span-3">
            <Carousel>
              <CarouselContent>
                {clients.map((client, index) => (
                  <CarouselItem key={index} className="basis-1/3 rounded-lg">
                    <ClientCard imgSrc={client} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="col-span-1">
            <div className="text-white  flex flex-col justify-center h-full gap-3">
              <p className="font-light">Our clients</p>
              <h3 className="font-semibold text-3xl">
                Our innovative solutions are designed to
              </h3>
              <p className="text-lg">
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
