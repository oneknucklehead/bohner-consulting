import Container from "@/components/Container";
import React, { useState } from "react";
import img1 from "../assets/images/smartTech/2.webp";
import img2 from "../assets/images/smartTech/3.webp";
import FooterSection from "@/components/Footer";
import { NavLink } from "react-router";

// Skeleton-aware Image component
const ImageWithSkeleton = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg z-10" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`rounded-lg shadow-lg object-cover w-full h-full transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
};

const SmartTech = () => {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <div className="fixed z-50 w-full top-0 ">
          <Container>
            <div
              className="bg-white border-[3px] border-[#0F75BC] border-opacity-40 flex p-3 rounded-full mt-4 justify-between items-center"
              style={{
                boxShadow:
                  "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
              }}
            >
              <NavLink to="/" smooth={true} duration={500}>
                <button className="font-semibold flex items-center gap-1">
                  <span className="flex md:hidden">
                    <svg
                      width="25"
                      height="18"
                      viewBox="0 0 80 68"
                      fill="#0F75BC"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32 68V44H48V68H68V36H80L40 0L0 36H12V68H32Z"
                        fill="#0F75BC"
                      />
                    </svg>
                  </span>
                  <span className="hidden md:flex">
                    <svg
                      width="35"
                      height="23"
                      viewBox="0 0 80 68"
                      fill="#0F75BC"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32 68V44H48V68H68V36H80L40 0L0 36H12V68H32Z"
                        fill="#0F75BC"
                      />
                    </svg>
                  </span>
                </button>
              </NavLink>
            </div>
          </Container>
        </div>
      </nav>

      <div className="pt-[120px] pb-[40px]">
        {/* Section 1 */}
        <div className="px-8 md:px-12 mx-auto">
          <Container>
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold pb-5">
              Our Solution
            </h1>
            <p className="text-center text-sm sm:text-base lg:text-lg">
              <b> Intelligent Surveillance for Safer Public Spaces </b> At
              <b> Bonheur Consulting</b>, public safety is not just a
              priority—it is a purpose.
              <br />
              <br />
              Our system integrates AI-enabled cameras with advanced Video
              Management Software (VMS) to provide proactive surveillance in
              high-risk or high-traffic public spaces such as schools, colleges,
              hospitals, and government institutions.
            </p>
          </Container>
        </div>

        {/* Image & Features Block */}
        <div className="px-8 md:px-12 mx-auto">
          <Container>
            <div className="grid gap-4 grid-cols-1 justify-center items-center md:grid-cols-2 py-12">
              <div className="flex justify-center py-8">
                <div className="relative rounded-lg">
                  <ImageWithSkeleton src={img1} alt="Surveillance solution" />
                  <div className="absolute w-full h-full -left-3 top-3 bg-[#0F75BC] shadow-lg rounded-lg -z-10"></div>
                  <div className="absolute w-full h-full -left-6 top-6 bg-[#87bade] shadow-lg rounded-lg -z-30"></div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-xl lg:text-2xl xl:text-3xl font-light mb-2 xl:mb-4">
                  Key Features
                </h1>
                <ul className="list-disc list-inside text-sm lg:text-base xl:text-lg leading-relaxed">
                  <li>
                    <b>Intruder Detection:</b> Real-time alerts for unauthorized
                    access.
                  </li>
                  <li>
                    <b>Loitering Detection:</b> Monitors suspicious presence.
                  </li>
                  <li>
                    <b>Facial Recognition:</b> Identifies and tracks
                    individuals.
                  </li>
                  <li>
                    <b>Auto-Tracking:</b> Seamlessly follows movement.
                  </li>
                  <li>
                    <b>Emergency Alerts:</b> Instant threat notifications.
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>

        {/* Section 2 */}
        <div className="px-8 md:px-12 mx-auto">
          <Container>
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold pb-5">
              Public Safety Through Proactive Technology
            </h1>
            <p className="text-center text-sm sm:text-base lg:text-lg">
              Bonheur Consulting believes{" "}
              <b>freedom of movement should not come at the cost of safety</b>.
              Our system empowers institutions to detect irregular behavior and
              threats in real time—<b>before</b> they escalate.
            </p>
          </Container>
        </div>

        {/* Image & Use Cases Block */}
        <div className="px-8 md:px-12 mx-auto">
          <Container>
            <div className="grid gap-4 grid-cols-1 justify-center items-center md:grid-cols-2 py-12">
              <div className="flex justify-center py-8">
                <div className="relative rounded-lg">
                  <ImageWithSkeleton src={img2} alt="Public safety" />
                  <div className="absolute w-full h-full -left-3 top-3 bg-[#0F75BC] shadow-lg rounded-lg -z-10"></div>
                  <div className="absolute w-full h-full -left-6 top-6 bg-[#87bade] shadow-lg rounded-lg -z-30"></div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-xl lg:text-2xl xl:text-3xl font-light mb-2 xl:mb-4">
                  Made for Institutions That Prioritize Protection
                </h1>
                <ul className="list-disc list-inside text-sm lg:text-base xl:text-lg leading-relaxed">
                  <p>This solution is ideal for:</p>
                  <li className="font-semibold">
                    Educational Campuses & Hostels
                  </li>
                  <li className="font-semibold">
                    Hospitals, Clinics & Health Centres
                  </li>
                  <li className="font-semibold">
                    Transit Points, Government Buildings & Civic Areas
                  </li>
                </ul>
                <p className="mt-4">
                  By deploying Bonheur’s smart surveillance, institutions show
                  their commitment to safety and inclusion.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default SmartTech;
