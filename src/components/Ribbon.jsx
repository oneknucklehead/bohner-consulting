import React, { useState } from "react";
import Container from "./Container";
import img1 from "../assets/images/associations/brand1.webp";
import img2 from "../assets/images/associations/brand2.webp";
import img3 from "../assets/images/associations/brand3.webp";

// Skeleton box matching logo size
const SkeletonImage = ({ className }) => (
  <div className={`bg-gray-300 animate-pulse rounded ${className}`} />
);

// Lazy Image Component with no layout shift
const LazyImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!loaded && <SkeletonImage className="absolute inset-0 w-full h-full" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`object-contain transition-opacity duration-300 ease-in-out w-full h-full ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

const Ribbon = () => {
  return (
    <div className="ribbon-container max-w-7xl mx-auto">
      <Container>
        <h3 className="text-center text-2xl sm:text-4xl font-semibold text-gray-900 mt-8">
          Our partners
        </h3>
        <p className="text-center text-sm sm:text-base text-gray-900 mt-2">
          We are proud to be authorized partners and distributors for:
          Panasonic, ViewSonic, Grandstream, AVer, A&T, and Godrej Interio.
        </p>
        <div className="flex justify-center sm:justify-between flex-wrap gap-4 items-center h-fit py-6 sm:py-12">
          <div className="w-24 sm:w-32 h-5 sm:h-7 m-4">
            <LazyImage src={img1} alt="image 1" className="w-full h-full" />
          </div>
          <div className="w-24 sm:w-32 h-10 m-4">
            <LazyImage src={img2} alt="image 2" className="w-full h-full" />
          </div>
          <div className="w-24 sm:w-32 h-10 m-4">
            <LazyImage src={img3} alt="image 3" className="w-full h-full" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Ribbon;
