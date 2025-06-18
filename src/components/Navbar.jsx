import { useState } from "react";
import Container from "./Container";
import { Link } from "react-scroll";
import imgSrc from "../assets/images/logo.png";
import "../assets/styles/Navbar.css";
import { NavLink } from "react-router";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const navbarTags = [
    { name: "About Us", link: "about" },
    { name: "Services", link: "product" },
    { name: "Clients", link: "client" },
    { name: "Trust", link: "trust" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <div className="fixed z-50 w-full top-0 ">
      <Container>
        <div
          className="bg-white border-[3px] border-[#0F75BC]  border-opacity-40 flex p-3 rounded-full mt-4 justify-between items-center"
          style={{
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
          }}
        >
          <div>
            <a href="#" className="text-2xl font-bold text-gray-800">
              <Link to="home" smooth={true} duration={500}>
                <span className="w-[30px] md:w-[45px]">
                  <img
                    loading="lazy"
                    className="w-[30px] md:w-[45px] ml-2"
                    src={imgSrc}
                    alt="Transcon logo"
                  />
                </span>
              </Link>
            </a>
          </div>
          <div>
            <ul className="text-sm lg:text-lg hidden md:flex items-center space-x-4 lg:space-x-8 text-[#0F75BC]">
              {navbarTags.map((tags, index) => (
                <li key={index} className="p-1 cursor-pointer">
                  <Link
                    to={`${tags.link}`}
                    smooth={true}
                    duration={500}
                    activeClass="font-bold"
                    spy={true}
                    offset={-100}
                  >
                    {tags.name}
                  </Link>
                </li>
              ))}
              <li className="p-1 cursor-pointer">
                <NavLink to={`smart-tech`} activeClass="font-bold">
                  Smart Tech
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex">
            <button className="text-sm lg:text-base text-white bg-[#0F75BC] py-2 px-4 rounded-full font-semibold">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                Reach us
              </Link>
            </button>
          </div>
          <div className="flex items-center justify-center mr-2 md:hidden">
            <button className="space-y-[3px] group">
              <div className="w-4 h-[2px] bg-[#0F75BC]"></div>
              <div className="w-4 h-[2px] bg-[#0F75BC]"></div>
              <div className="w-4 h-[2px] bg-[#0F75BC]"></div>
              <ul className="bg-[#095DAB] text-white group-focus:-top-1 w-screen py-10 absolute -top-[999px] right-0 duration-150 flex flex-col space-y-3 justify-end">
                <button className="px-16 pb-4 relative ml-auto">
                  <div className="w-4 h-[2px] rotate-45 absolute bg-white"></div>
                  <div className="w-4 h-[2px] -rotate-45 absolute bg-white"></div>
                </button>
                {navbarTags.map((tags, index) => (
                  <Link
                    key={index}
                    to={`${tags.link}`}
                    smooth={true}
                    duration={500}
                    activeClass="font-semibold"
                    spy={true}
                    offset={-70}
                    className="flex justify-center w-full py-4 hover:bg-[#7AB3E84A]"
                  >
                    <li>{tags.name}</li>
                  </Link>
                ))}
                <NavLink
                  to={`smart-tech`}
                  activeClass="font-semibold"
                  className="flex justify-center w-full py-4 hover:bg-[#7AB3E84A]"
                >
                  <li>Smart Tech</li>
                </NavLink>
              </ul>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
