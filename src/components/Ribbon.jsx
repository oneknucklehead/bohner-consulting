import React from "react";
import Container from "./Container";
import img1 from "../assets/images/associations/brand1.png";
import img2 from "../assets/images/associations/brand2.png";
import img3 from "../assets/images/associations/brand3.png";
import img4 from "../assets/images/associations/brand4.png";

const Ribbon = () => {
  return (
    <div className="ribbon-container max-w-7xl mx-auto">
      <Container>
        <div className="flex justify-center sm:justify-between flex-wrap gap-4 items-center h-fit py-12">
          <img src={img1} className="h-5 m-4 object-contain" alt={`image 1`} />
          <img src={img2} className="h-10 m-4 object-contain" alt={`image 1`} />
          <img src={img3} className="h-10 m-4 object-contain" alt={`image 1`} />
          <img src={img4} className="h-10 m-4 object-contain" alt={`image 1`} />
        </div>
      </Container>
    </div>
  );
};

export default Ribbon;
