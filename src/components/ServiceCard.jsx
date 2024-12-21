import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ServiceCard = ({ images, title, description }) => {
  return (
    <div className="bg-[#0F75BC] max-w-6xl mx-auto rounded-xl p-8 flex flex-col md:flex-row items-center">
      {/* Product Image Section */}
      <div className=" w-full md:w-1/2">
        <Carousel
          //   plugins={[
          //     Autoplay({
          //       delay: 3000,
          //     }),
          //   ]}
          className="h-full w-full"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="w-full h-full">
                <img
                  className="rounded-lg aspect-square w-full max-h-[300px] object-cover bg-white"
                  src={image}
                  alt={`Carousel Slide ${index + 1}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Product Info Section */}
      <div className="mt-6 md:mt-0 md:ml-8 flex-1 text-white">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="mt-4 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
