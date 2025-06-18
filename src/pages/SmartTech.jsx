import Container from "@/components/Container";
import React from "react";
import img1 from "../assets/images/smartTech/2.jpg";
import img2 from "../assets/images/smartTech/3.jpg";
import imgSrc from "../assets/images/logo.png";
import FooterSection from "@/components/Footer";
import { NavLink } from "react-router";

const SmartTech = () => {
  return (
    <div>
      <nav>
        <div className="fixed z-50 w-full top-0 ">
          <Container>
            <div
              className="bg-white border-[3px] border-[#0F75BC]  border-opacity-40 flex p-3 rounded-full mt-4 justify-between items-center"
              style={{
                boxShadow:
                  "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
              }}
            >
              <div>
                <a href="#" className="text-2xl font-bold text-gray-800">
                  <NavLink to="/" smooth={true} duration={500}>
                    <span className="w-[30px] md:w-[45px]">
                      <img
                        className="w-[30px] md:w-[45px] ml-2"
                        src={imgSrc}
                        alt="Bohner logo"
                      />
                    </span>
                  </NavLink>
                </a>
              </div>
            </div>
          </Container>
        </div>
      </nav>
      <div className="py-[120px]">
        <div className="px-8 md:px-12 mx-auto">
          <Container>
            <h1 className="text-center text-3xl sm:text-4xl  md:text-5xl font-semibold pb-5">
              Our Solution
            </h1>
            <p className="text-center text-sm sm:text-base lg:text-lg">
              <b> Intelligent Surveillance for Safer Public Spaces </b>
              At<b> Bonheur Consulting</b>, public safety is not just a
              priority—it is a purpose. Recognizing the increasing need for
              secure environments, especially for<b> women and children</b>, we
              offer a cutting-edge surveillance solution designed to protect
              lives through real-time monitoring, early threat detection, and
              immediate alerts.
              <br />
              <br />
              Our system integrates AI-enabled cameras with advanced Video
              Management Software (VMS) to provide proactive surveillance in
              high-risk or high-traffic public spaces such as schools, colleges,
              hospitals, and government institutions. This solution is a direct
              extension of Bonheur Consulting’s mission to create safer, more
              responsible public environments.
            </p>
          </Container>
        </div>
        <div className="px-8 md:px-12 mx-auto">
          <Container>
            <div className="grid gap-4 grid-cols-1 justify-center items-center md:grid-cols-2 py-12">
              <div className="">
                <div className="flex justify-center py-8">
                  <div className="relative rounded-lg">
                    {/* Outer shadow box */}
                    <img
                      src={img1} // Replace with the correct image path
                      alt="Team working together"
                      className="rounded-lg shadow-lg object-cover"
                    />
                    <div className="absolute w-full h-full -left-3 top-3 bg-[#0F75BC] shadow-lg rounded-lg -z-10 "></div>
                    <div className="absolute w-full h-full -left-6 top-6 bg-[#87bade] shadow-lg rounded-lg -z-30 "></div>

                    {/* Inner shadow box */}

                    {/* Image */}
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-xl lg:text-2xl xl:text-3xl font-light mb-2 xl:mb-4">
                  Key Features
                </h1>

                <ul className="list-disc list-inside text-sm lg:text-base xl:text-lg leading-relaxed">
                  <li>
                    <b>Intruder Detection: </b>
                    Identifies unauthorized access and generates real-time
                    alerts to prevent potential breaches.
                  </li>
                  <li>
                    <b>Loitering Detection: </b>
                    Monitors for prolonged or suspicious presence in sensitive
                    areas, helping prevent unsafe situations before they
                    develop.
                  </li>
                  <li>
                    <b>Facial Recognition: </b>
                    Enables identification of individuals for tracking and
                    enhanced oversight.
                  </li>
                  <li>
                    <b>Auto-Tracking: </b>
                    Seamlessly follows the movement of flagged individuals
                    across camera zones, minimizing blind spots.
                  </li>
                  <li>
                    <b>Emergency Alert Mechanism: </b>
                    Sends instant notifications to security personnel or
                    designated authorities when a potential threat is detected,
                    allowing timely response and intervention.
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <div className="px-8 md:px-12 mx-auto">
          <Container>
            <h1 className="text-center text-3xl sm:text-4xl  md:text-5xl font-semibold pb-5">
              Public Safety Through Proactive Technology
            </h1>
            <p className="text-center text-sm sm:text-base lg:text-lg">
              Bonheur Consulting believes that{" "}
              <b>freedom of movement should not come at the cost of safety</b>.
              Our surveillance system is engineered to empower institutions with
              real-time situational awareness, ensuring early detection of
              irregular behavior or potential threats. Whether it’s a child left
              unattended in a school corridor or a suspicious individual
              loitering near a hospital entrance, our system acts
              immediately—before incidents can escalate. By prioritizing{" "}
              <b> prevention over reaction</b>, the solution supports a secure
              ecosystem where women and children can feel protected and
              confident in public spaces.
            </p>
          </Container>
        </div>
        <div className="px-8 md:px-12 mx-auto">
          <Container>
            <div className="grid gap-4 grid-cols-1 justify-center items-center md:grid-cols-2 py-12">
              <div className="">
                <div className="flex justify-center py-8">
                  <div className="relative rounded-lg">
                    {/* Outer shadow box */}
                    <img
                      src={img2} // Replace with the correct image path
                      alt="Team working together"
                      className="rounded-lg shadow-lg object-cover"
                    />
                    <div className="absolute w-full h-full -left-3 top-3 bg-[#0F75BC] shadow-lg rounded-lg -z-10 "></div>
                    <div className="absolute w-full h-full -left-6 top-6 bg-[#87bade] shadow-lg rounded-lg -z-30 "></div>

                    {/* Inner shadow box */}

                    {/* Image */}
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-xl lg:text-2xl xl:text-3xl font-light mb-2 xl:mb-4">
                  Made for Institutions That Prioritize Protection
                </h1>

                <ul className="list-disc list-inside text-sm lg:text-base xl:text-lg leading-relaxed">
                  This solution is ideal for:
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
                <p>
                  By deploying Bonheur Consulting’s smart surveillance
                  technology, institutions demonstrate their commitment to
                  safety, responsibility, and social accountability. More than a
                  product, this is a step toward a safer and more inclusive
                  public space for all.
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
