import React, { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ServiceCard = ({ images, title, description, id }) => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", onSelect);

    // Cleanup listener on unmount
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div id={id} className="flex flex-col justify-center">
      <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-gray-200 bg-white">
        {/* Carousel Section */}
        <div className="w-full md:w-1/3 bg-white">
          <Carousel
            setApi={setApi}
            className="w-full max-w-full"
            // loop
            // autoplay={Autoplay()}
          >
            {" "}
            {/* Added loop and autoplay */}
            <CarouselContent className="rounded-xl">
              {images.map((image, index) => (
                <CarouselItem key={index} className="w-full max-h-48">
                  <img
                    src={image}
                    alt={`carousel-image-${index}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <div className="">
              <CarouselPrevious className=""></CarouselPrevious>
              <CarouselNext className=""></CarouselNext>
            </div> */}
          </Carousel>
          <div className="text-end p-2 text-xs">
            {current}/{count}
          </div>
          {/* Text Section */}
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-between space-y-2 p-3">
          <div>
            <h3 className="font-bold text-gray-800 text-xl md:text-2xl">
              {title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">{description}</p>
          </div>
          <div className="flex justify-end gap-2 flex-wrap">
            <div className="">
              <button
                className="bg-[#095DAB] text-white rounded-full px-2.5 py-2"
                onClick={() => api?.scrollPrev()}
                disabled={!api}
              >
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
              </button>
            </div>
            <div className="">
              <button
                className="bg-[#095DAB] text-white rounded-full px-2.5 py-2"
                onClick={() => api?.scrollNext()}
                disabled={!api}
              >
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9L12 9V7L0 7L0 9Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
