import Container from "@/components/Container";
import img from "../assets/images/about.webp";

const About = () => {
  return (
    <div className="px-8 md:px-12 mx-auto">
      <Container>
        <div className="grid gap-4 grid-cols-1 justify-center items-center md:grid-cols-2 py-12">
          <div className="">
            <div className="flex justify-center py-8">
              <div className="relative rounded-lg">
                <img
                  loading="lazy"
                  src={img}
                  alt="Team working together"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute w-full h-full -left-3 top-3 bg-[#0F75BC] shadow-lg rounded-lg -z-10 "></div>
                <div className="absolute w-full h-full -left-6 top-6 bg-[#87bade] shadow-lg rounded-lg -z-30 "></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-light mb-2 xl:mb-4">
              Why choose us?
            </h2>
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-900 mb-2 xl:mb-4">
              Innovation with no limits—our products redefine potential
            </h3>
            <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
              <b>Trusted Partnerships & Authorizations:</b> We hold premium
              partnerships and authorized distributorships with leading global
              brands, including Panasonic, ViewSonic, Grandstream, Godrej
              Interio, and others, ensuring access to best-in-class technology.
              <br />
              <b>Comprehensive & Integrated Technology Solutions:</b> We offer a
              diverse portfolio of solutions, covering Smart Classrooms,
              Surveillance, Healthcare AV, Telecom, and more, providing a single
              source for your technology needs.
              <br />
              <b>Customized & Scalable Solutions:</b> Our solutions are tailored
              to meet the specific requirements of organizations of all sizes,
              from small schools to large enterprises, and designed to scale as
              your needs evolve.
              <br />
              <b>Nationwide Project Expertise:</b> We possess a strong presence
              and proven track record across India, with successful
              implementations in education and judicial institutions,
              demonstrating our capabilities and reach.
              <br />
              <b>Future-Focused Technology Innovations:</b> We provide
              next-generation solutions, including AI-powered security,
              cloud-based monitoring, and hybrid learning tools, ensuring you
              stay ahead of the curve.
              <br />
              <b>Seamless End-to-End Service Delivery:</b> Our in-house team
              manages every stage of the process, from initial consultation and
              design to procurement, installation, training, and ongoing
              support, guaranteeing a cohesive and efficient experience.
              <br />
              <b>Unwavering Commitment to Quality & Integrity:</b> We adhere to
              the highest standards of quality, transparency, and reliability in
              every project, prioritizing client satisfaction and long-term
              partnerships.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
