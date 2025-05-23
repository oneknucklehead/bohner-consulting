import Container from "@/components/Container";
import React from "react";
import img from "../assets/images/about.webp";

const About = () => {
  return (
    <div className="px-8 md:px-12 mx-auto">
      <Container>
        <div className="grid gap-4 grid-cols-1 justify-center items-center md:grid-cols-2 py-12">
          <div className="">
            <div className="flex justify-center py-8">
              <div className="relative rounded-lg">
                {/* Outer shadow box */}
                <img
                  src={img} // Replace with the correct image path
                  alt="Team working together"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute w-full h-full -left-3 top-3 bg-[#0F75BC] shadow-lg rounded-lg -z-10 "></div>
                <div className="absolute w-full h-full -left-6 top-6 bg-[#87bade] shadow-lg rounded-lg -z-30 "></div>

                {/* Inner shadow box */}

                {/* Image */}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-light mb-2 xl:mb-4">
              Why us?
            </h2>
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-900 mb-2 xl:mb-4">
              Innovation with no limits—our products redefine potential
            </h3>
            <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
              We provide high-quality, sustainable products supported by strong
              processes and reliable, tested methods. Our products are designed
              for use in multiple areas, allowing our customers to save money.
              Continuous development reduces defects, resulting in less rework
              and foster business sustainability. We offer quick service with a
              24-hour turnaround time, emphasising clear communication, seamless
              coordination
            </p>
          </div>
        </div>
      </Container>
    </div>
    // <section className="flex items-center justify-between p-8 bg-white">
    //   {/* Left side - Image */}
    //   <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-md">
    //     <img
    //       src="/path-to-your-image.jpg" // Replace with your actual image path or use the uploaded image path
    //       alt="Team working together"
    //       className="w-full h-full object-cover"
    //     />
    //   </div>

    //   {/* Right side - Text content */}
    //   <div className="ml-8 flex flex-col justify-center">
    //     <h2 className="text-3xl font-bold text-gray-800 mb-4">Why us?</h2>
    //     <h3 className="text-2xl font-semibold text-gray-900 mb-4">
    //       We make products with infinite possibilities
    //     </h3>
    //     <p className="text-lg text-gray-600 leading-relaxed">
    //       Lorem Ipsum is simply dummy text of the printing and typesetting
    //       industry. Lorem Ipsum has been the industry's standard dummy text ever
    //       since the 1500s, when an unknown printer took a galley of type and
    //       scrambled it to make a type specimen book.
    //     </p>
    //   </div>
    // </section>
  );
};

export default About;
