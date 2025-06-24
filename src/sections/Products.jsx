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
        "We empower institutions to create future-ready, immersive learning environments by integrating smart technologies that enhance teaching and student engagement. Our offerings include: 1. Interactive Smart Panels, 2. PTZ Cameras & High-Lumen Projectors, 3. Video Conferencing Equipment, 4. Microphones and Speaker Phones for hybrid learning environments, These tools are designed to optimize both physical and virtual classroom experiences, ensuring seamless communication and interactive learning.",
      industries: " Education (K-12, Higher Ed, Coaching Institutes)",
      brands: "Panasonic, ViewSonic, AVer, A&T, Ekin",
      // tag: "best",
    },
    {
      name: "Security & Surveillance",
      img: img4,
      taglines: "Smart, Secure, Always Vigilant",
      description:
        "Security is no longer optional—it’s essential. We provide a comprehensive range of high-performance surveillance products that ensure superior image quality, 24/7 monitoring, and advanced threat detection. Our systems are ideal for: 1. Schools and Universities, 2. Enterprises and Corporate Offices, 3. Government Buildings and Public Spaces, 4. Residential and Commercial Complexes. Features include AI-driven motion detection, facial recognition, and cloud-based monitoring systems, ensuring complete control and real-time alerting.",
      industries:
        "Education, Enterprise, Government, Residential, Retail, Construction",
      brands: "Panasonic (Authorized Distributor)",
      // tag: "popular",
    },
    {
      name: "Telecom & Connectivity",
      img: img6,
      taglines: "Unified, Scalable, Seamless Communication",
      description:
        "We offer robust, scalable communication infrastructure and security solutions for both commercial and residential applications: 1. IP-PBX and SIP Servers, 2. Unified Communication Platforms with SIP Phones, 3. VoIP Gateways and Conventional PBX Systems, 4. Corded and Cordless Analog Telephones. In the home security segment, we specialize in: 1. Analog, IP, and Hybrid Video Door Phones, 2. Home CCTV Systems with smart control features.",
      industries:
        " Education, Enterprise, Government, Hospitality, Residential",
      brands: "Panasonic, Grandstream",
      // tag: "new",
    },
    {
      name: "Healthcare AV & Streaming",
      img: img2,
      taglines: "Precision, Clarity, Medical Reach",
      description:
        "We enable digital healthcare delivery and medical education through state-of-the-art AV solutions, ideal for hospitals, operation theatres, and teaching institutions. Our specialized healthcare AV systems include: 1. High-Resolution Medical Cameras for Surgery Recording, 2. Live Broadcasting for Telemedicine and Remote Consultations, 3. Integration with Lecture Halls and Medical Seminars. These solutions improve accessibility, documentation, and patient care outcomes.",
      industries: "Healthcare, Medical Education, Research Institutions",
      brands: "Panasonic, AVer",
      // tag: "best",
    },
    {
      name: "Institutional Furniture",
      taglines: "Ergonomic, Functional, Space-Smart Solutions",
      img: img3,
      description:
        "We are proud to be authorized project partners for Godrej Interio, providing ergonomic, durable, and aesthetically designed furniture solutions for: 1. Educational Institutions (Classroom, Lab, and Library Furniture), 2. Corporate Offices and Administrative Spaces, Our offerings are designed to enhance comfort, collaboration, and space utilization.",
      industries: "Education, Enterprise, Government",
      brands: "Godrej Interio (Authorized Project Partner)",
      // tag: "featured",
    },
    {
      name: "Air Conditioning Projects",
      taglines: "Efficient, Scalable Climate Control",
      img: img1,
      description:
        "As an institutional distributor of Panasonic Air Conditioners, we supply and install energy-efficient, high-capacity air conditioning systems for: 1. Large Educational Campuses, 2. Hospitals and Healthcare Facilities, 3. Government and Public Sector Projects, 4. Commercial Buildings and Offices. Our HVAC solutions ensure optimal indoor climate control with long-term reliability and operational efficiency.",
      industries: " Education, Healthcare, Government, Commercial",
      brands: "Panasonic (Institutional Distributor)",
      // tag: "featured",
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
                    {/* <span className="text-xs md:text-base top-4 right-4 rounded-full capitalize text-white absolute py-2 px-4 bg-[#0F75BC]">
                      {item.tag}
                    </span> */}
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
              <h2 className="text-2xl font-bold my-2">
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
