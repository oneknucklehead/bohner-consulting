import Container from "@/components/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import React, { useState } from "react";
import img1 from "../assets/images/clients/1.webp";
import img2 from "../assets/images/clients/2.webp";
import img3 from "../assets/images/clients/3.webp";
import img4 from "../assets/images/clients/4.webp";
import img5 from "../assets/images/clients/5.webp";
import img6 from "../assets/images/clients/pic1.webp";
import img7 from "../assets/images/clients/pic2.webp";
import img8 from "../assets/images/clients/pic3.webp";
import img9 from "../assets/images/clients/pic4.webp";
import img10 from "../assets/images/clients/pic5.webp";
import img11 from "../assets/images/clients/pic6.webp";
import img12 from "../assets/images/clients/pic7.webp";
import img13 from "../assets/images/clients/pic8.webp";
import img14 from "../assets/images/clients/pic9.webp";
import img15 from "../assets/images/clients/pic10.webp";

const Clients = () => {
  const clients = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  ];

  return (
    <div className="bg-[#0F75BC] px-8 md:px-12">
      <Container>
        <div className="pt-10">
          <h1 className="text-center text-white text-4xl">Our Clientele</h1>
        </div>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-12">
          <div className="col-span-1 sm:col-span-2 md:col-span-4">
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
                    className="basis-1/2 md:basis-1/3 xl:basis-1/4 rounded-lg"
                  >
                    <ClientCard imgSrc={client} index={index} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </Container>
    </div>
  );
};

const ClientCard = ({ imgSrc, index }) => {
  return (
    <div className="p-5 rounded-lg bg-white flex items-center justify-center w-full h-full">
      <ImageWithSkeleton src={imgSrc} alt={`client ${index}`} />
    </div>
  );
};

const ImageWithSkeleton = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      {!loaded && !errored && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 rounded-md" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setErrored(true);
          setLoaded(true);
        }}
        className={`w-auto object-contain transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default Clients;
