import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import img1 from "../assets/images/products/airconditioning.webp";
import img2 from "../assets/images/products/healthcare.webp";
import img3 from "../assets/images/products/institutional.webp";
import img4 from "../assets/images/products/security.webp";
import img5 from "../assets/images/products/smartclassroom.webp";
import img6 from "../assets/images/products/telecom.webp";

import React, { useState } from "react";
import Container from "@/components/Container";
import Modal from "@/components/Modal";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const items = [
    {
      name: "Smart Classrooms",
      img: img5,
      taglines: "Interactive, Immersive, Future-Ready Learning",
      description:
        "We design and implement state-of-the-art Smart Classroom solutions...",
      industries: " Education (K-12, Higher Ed, Coaching Institutes)",
      brands: "Panasonic, ViewSonic, AVer, A&T, Ekin",
      tag: "best",
    },
    {
      name: "Security & Surveillance",
      img: img4,
      taglines: "Smart, Secure, Always Vigilant",
      description:
        "Our AI-powered surveillance solutions provide round-the-clock security...",
      industries:
        "Education, Enterprise, Government, Residential, Retail, Construction",
      brands: "Panasonic (Authorized Distributor)",
      tag: "popular",
    },
    {
      name: "Telecom & Connectivity",
      img: img6,
      taglines: "Unified, Scalable, Seamless Communication",
      description:
        "We offer a full range of Telecom and Communication solutions...",
      industries:
        " Education, Enterprise, Government, Hospitality, Residential",
      brands: "Panasonic, Grandstream",
      tag: "new",
    },
    {
      name: "Healthcare AV & Streaming",
      img: img2,
      taglines: "Precision, Clarity, Medical Reach",
      description:
        "Our Healthcare AV solutions are tailored for hospitals, medical colleges...",
      industries: "Healthcare, Medical Education, Research Institutions",
      brands: "Panasonic, AVer",
      tag: "best",
    },
    {
      name: "Institutional Furniture",
      taglines: "Ergonomic, Functional, Space-Smart Solutions",
      img: img3,
      description:
        "As authorized partners of Godrej Interio, we supply ergonomically designed furniture...",
      industries: "Education, Enterprise, Government",
      brands: "Godrej Interio (Authorized Project Partner)",
      tag: "featured",
    },
    {
      name: "Air Conditioning Projects",
      taglines: "Efficient, Scalable Climate Control",
      img: img1,
      description:
        "We are institutional distributors for Panasonic Air Conditioning Systems...",
      industries: " Education, Healthcare, Government, Commercial",
      brands: "Panasonic (Institutional Distributor)",
      tag: "featured",
    },
  ];

  return (
    <div className="px-8 md:px-12 mx-auto">
      <Container>
        <div className="flex flex-col gap-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Our Services
            </h3>
          </div>

          <div>
            <Carousel>
              <CarouselContent>
                {items.map((item, index) => (
                  <CarouselItem
                    key={index}
                    onClick={() => setSelectedProduct(item)}
                    className="relative cursor-pointer sm:basis-1/2 md:basis-1/3 flex h-full flex-col justify-center items-center"
                  >
                    <ImageWithSkeleton src={item.img} alt={item.name} />
                    <span className="text-xs md:text-base top-4 right-4 rounded-full capitalize text-white absolute py-2 px-4 bg-[#0F75BC]">
                      {item.tag}
                    </span>
                    <div className="p-4 w-full items-center">
                      <h3 className="text-2xl xl:text-3xl font-semibold capitalize">
                        {item.name}
                      </h3>
                      <p className="text-sm xl:text-base">{item.taglines}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {selectedProduct && (
            <Modal
              isOpen={!!selectedProduct}
              onClose={() => setSelectedProduct(null)}
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="mb-2 p-2 rounded-full text-white hover:bg-gray-100 transition"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.82812 0.171875L0.171875 5.82812L29.3438 35L0.171875 64.1719L5.82812 69.8281L35 40.6562L64.1719 69.8281L69.8281 64.1719L40.6562 35L69.8281 5.82812L64.1719 0.171875L35 29.3438L5.82812 0.171875Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
              <ImageWithSkeleton
                src={selectedProduct.img}
                alt={selectedProduct.name}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">
                {selectedProduct.name}
              </h2>
              <p className="mb-4 ">{selectedProduct.description}</p>
              <p className="mb-2">
                <span className="font-bold">Industries:</span>{" "}
                {selectedProduct.industries}
              </p>
              <p className="mb-2">
                <span className="font-bold">Brands:</span>{" "}
                {selectedProduct.brands}
              </p>
            </Modal>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Products;

// Helper Component
const ImageWithSkeleton = ({ src, alt, className = "" }) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className={`w-full h-56 relative`}>
      {!loaded && !errored && (
        <div className="absolute inset-0 animate-pulse bg-gray-300 rounded-lg" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setErrored(true);
          setLoaded(true); // still hide skeleton
        }}
        className={`w-full h-56 object-cover rounded-lg transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
};
