import React from "react";
import Container from "../components/Container";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import Autoplay from "embla-carousel-autoplay";
import { Link as LinkRouter } from "react-router";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-scroll";

const Home = () => {
  const navbarHeight = 86;

  const provide = [
    {
      tag: "Solar projects implementation",
      logo: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="28" height="28" fill="url(#pattern0_8_180)" />
          <defs>
            <pattern
              id="pattern0_8_180"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_8_180" transform="scale(0.0111111)" />
            </pattern>
            <image
              id="image0_8_180"
              width="90"
              height="90"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ),
    },
    {
      tag: "Surveillance Solutions",
      logo: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 20V15.3488L4.92476 10.4241L0.683995 6.15595C0.465116 5.93707 0.3057 5.69083 0.205746 5.41724C0.105062 5.14364 0.0547195 4.87004 0.0547195 4.59644C0.0547195 4.32285 0.105062 4.05399 0.205746 3.78988C0.3057 3.52503 0.465116 3.28317 0.683995 3.0643L2.76334 0.984952C2.98222 0.766074 3.22845 0.606293 3.50205 0.505609C3.77565 0.405654 4.04925 0.355677 4.32284 0.355677C4.59644 0.355677 4.86566 0.405654 5.13051 0.505609C5.39462 0.606293 5.63612 0.766074 5.85499 0.984952L10.1231 5.25308L15.0205 0.328318C15.13 0.218878 15.2485 0.136799 15.3762 0.0820794C15.5039 0.0273598 15.6407 0 15.7866 0C15.9325 0 16.0737 0.0273598 16.2101 0.0820794C16.3473 0.136799 16.4706 0.218878 16.58 0.328318L19.6717 3.41997C19.7811 3.52941 19.8632 3.64797 19.9179 3.77565C19.9726 3.90333 20 4.04013 20 4.18605C20 4.33197 19.9726 4.47351 19.9179 4.61067C19.8632 4.7471 19.7811 4.87004 19.6717 4.97948L14.7743 9.87688L19.015 14.145C19.2339 14.3639 19.3933 14.6101 19.4933 14.8837C19.594 15.1573 19.6443 15.4309 19.6443 15.7045C19.6443 15.9781 19.594 16.247 19.4933 16.5111C19.3933 16.7759 19.2339 17.0178 19.015 17.2367L16.9357 19.316C16.7168 19.5349 16.475 19.6943 16.2101 19.7943C15.946 19.8949 15.6772 19.9453 15.4036 19.9453C15.13 19.9453 14.8564 19.8949 14.5828 19.7943C14.3092 19.6943 14.0629 19.5349 13.844 19.316L9.57592 15.0479L4.65116 20H0ZM6.48427 8.86457L8.56361 6.78523L7.25034 5.47196L5.93707 6.75787L4.40492 5.22572L5.69083 3.91245L4.29549 2.54446L2.2435 4.6238L6.48427 8.86457ZM15.3762 17.7565L17.4555 15.6772L16.0602 14.3092L14.7743 15.5951L13.2148 14.0629L14.528 12.7497L13.1874 11.4364L11.1081 13.5157L15.3762 17.7565ZM2.18878 17.8112H3.72093L14.2544 7.30506L12.6949 5.74555L2.18878 16.2791V17.8112ZM15.7866 5.74555L17.3461 4.18605L15.7866 2.6539L14.2544 4.18605L15.7866 5.74555Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      tag: "Smart Classroom Solutions",
      logo: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="30" height="30" fill="url(#pattern0_8_164)" />
          <defs>
            <pattern
              id="pattern0_8_164"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_8_164" transform="scale(0.0111111)" />
            </pattern>
            <image
              id="image0_8_164"
              width="90"
              height="90"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEYklEQVR4nO2cy48VRRSHi0AQeYwhAjIDGhMiG9igAVwgYUGAqDGa+F84w4AJzMhC3bohEB4Jwcgj4bkaSIiPxGg0gK9EloOKjwVKeAYGzVyG4SOVFInAre6q6u7quveeL+nNfZw+9eu655w61X2VEgRBEARBEARBENwBpgFrgfeA/cB3wAXgOtAwx3Xz2lnzGf3ZNcBUj1N1HsAzwEbgW+AO4eiL8A3QD8ype1zJAKwETgJjlI++YCeAFapTAVaZmReLr/VFVZ0CMBc4CNyjHo7rMKXaGeBt4Ab1oxPpW6rdAJ4AdnmKcQk4YpKarkAWAjOByeaYaV7T720AjprvuKJ/Udu1LdUOADOALx0Hfw3YASwLPNcEYDmw09hy4QtgumplgNnATw6DvWhKu2kl1+LvAn87nP8HYJZq4ZmcJ/KY+fnOqNCPqcCHpr7O4scq/agyJueFi1+AJRF9ehH4Ncenz1sqZjskviGgqwa/usziKIttqoVKuCz2A5Nq9G8isCenGkm79AO6c+rkvboySMBPXZ18nFNnp9snAQ7lhIuJKhH0ryonjBxQCfcushJfl0oM4Cngt4wQ8opKjYwG0Z2Y1YUvwEsZncOvVIKtThsfqcQBtmb4n06LNSPWXSy62gOeA/qAz4Bh4LY5hs1rvcCzJSyu/rGMYUilgM7OGTsiGwvYnWfKsLvkM27an88XON8mi+2xJNqqpkfRjGuhsxl4ExjBn1vAG4HnnG7Kumb0qboxe3zN2BFor9/M0FD0d9cHnnt3kknRdMhszZqlgTN5vIDI/xfbe2YDL1vsjQJPqrowTfdmXPJdAQLzA8NFVhjpCVgxXrbYW63qAthicepwgK1PKJ+9AX4cs9gaUHWhl6kWp/oDSri7FQitbc4vKbnvU3Vh7hJqxjpPO31UxzuevrxqsXNa1QXwh8WpBZ52PnUQTCfdzTrummPAYddEc8rTlxcsdn5XdQFctTj1tKed8w6CPRYjjdh5DHv6Msti54qqi4wZ5bUdhFu10W25GSePkYBtuGaMqgSFnuJp5z8HwXosy/Q8/g3YzE1OaFvo8K1f/woMHYMO3/vT0xcd/5MLHbZkuMjTzkkHwRomJvsmQ6/uG7A4xWR4xuLUawH9jarwaggBr6dY3u2zOPV+wE3ojQpEHvXdZAU+SHHBoh9naMaJEjtnRdgV4IctjA362hIEQRAEQWgBChVbbYQIHQkROhIidCRE6EiI0JFoB6EbDzZhA3zz6VMXohp1Hx5M1QyU4KPLpm0hylEzexBV012Cjy6btoUoR83sQVRNTwk+umzaFqIcNbMH0QqhY7BqJ8tRM3sQVdN4sAkb4Jskw3ajmmn88KwREKGjITM6EiJ0JEToSIjQkRChIyFCt5HQZT4L2KrcjCH093WPMgHOxhB6fd2jTIDeGELrh2nO0bn8HO2/8cxz2+c6VOR5UUR+ZGb3madn2zlBjphHSHpb6l8eBUEQBEEQBEEQBEEQVHXcB4Z3K2vnyoWZAAAAAElFTkSuQmCC"
            />
          </defs>
        </svg>
      ),
    },
    {
      tag: "Project Consultancy",
      logo: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="25" height="25" fill="url(#pattern0_8_172)" />
          <defs>
            <pattern
              id="pattern0_8_172"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_8_172" transform="scale(0.0111111)" />
            </pattern>
            <image
              id="image0_8_172"
              width="90"
              height="90"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC8UlEQVR4nO2cv4vUQBTHRwth/dVYCdpY2YlYaCHY2Ii1jYJWgqAg1oLn2fijURv/ALEQeysFRVAbWxE8C0HURgRFEHV3PxJuOHLcZXayyUxmku+n2eJusy+fe/eSzL55xgghhBBCCCGEEEKIXgJsBq4BH4A/9nURGHUdW98kv2Z9Xkl2S9hMdnG1rc8aNCyXCRdLXceYPcAIGM8QPe46ziwBdgCngUfATzzoOuZsAPYAF4EnwD8fuRLtAbAROFBcyIA3dcVK9Ox6exS4C3xpKlcZ3bDeSnSkeivRfvX2LR1g+goB6+3gRROp3g5SNB3U23kwqQJsBfYCR4BTjt/Lgq5qZ5GFh4ETNhtvAPdtVhYXq+++gZIJoWRuL7IQuAU8AJ4D74BfbQdKJoSQfD7EhchI9CrJxX1qEIxEr0g+BEwlen3aLBkPCYhRRq+I/irRcyXKGWB3nYyeEBDT04y2Py5K7jNgv4/oLgNNHs/4fwPHJTpOovxwlpKEAk2SmvHfkeg4oqv7QBILNDlqxv9XoiMlikTPiURHQqUjTdHvVTriiL4t0XEeWHZJdPhH8GOVku0btKjUbFHpKbDPKdm+QcukDtpcJtXCvwNvkR6iD4YsH6b6c4cl2p70ldiBMkTR9sTP2VuUKIEyVNH25LcBJ9VAE1j0jD/CFttTd4EamOrjZUFcy6sF7awR58RxnCyIa3etpG+ecY4dx1DbrofoF01Fl1EjegXAvTZFl9HWirWdp0FElxn8ZiHbzR9ctBn69jdbUxvddTRlMBs6PVf9JpFi6e8WZfvvm4TokHXddE3R/pSi6N6NkQDO5iA6+8EodkvGLKYm7Qlh6Y/6sVvlprmK9hxeVd2nERPgY+aiF2fEv2BSAHicueiRHSS4Hi+TGTAI3MxZdEl2cSu4ZEdmFq8LyUgufeWetegssA8GEp3CNEQjWpPtesz9LM/tib7kEH1dotsTvQG4DHwqZzLLQ1M2SbQQQgghhBBCCCGE6QX/Acx84EV1UD9dAAAAAElFTkSuQmCC"
            />
          </defs>
        </svg>
      ),
    },

    {
      tag: "Jute products exports",
      logo: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.70312 0L0 14.9219V72H72V14.9219L63.2969 0H61H8.70312ZM13.2969 8H58.7031L63.3672 16H8.63281L13.2969 8ZM24 24H48V32H24V24Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      tag: "Skill building internships",
      logo: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 88 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 36H12V64H20V36Z" fill="white" />
          <path d="M44 36H36V64H44V36Z" fill="white" />
          <path d="M80 20L40 0L0 20V28H80V20Z" fill="white" />
          <path
            d="M0 72V80H49.6C48.76 77.44 48.32 74.76 48.16 72H0Z"
            fill="white"
          />
          <path d="M68 45.04V36H60V49.04L68 45.04Z" fill="white" />
          <path
            d="M72 52L56 60V70.2C56 80.28 62.84 89.72 72 92C81.16 89.72 88 80.28 88 70.2V60L72 52ZM69.12 80L61 71.88L65.24 67.64L69.12 71.52L78.76 62L83 66.24L69.12 80Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[#0F75BC]">
      <div className="px-8 sm:px-12 max-w-[1000px] xl:max-w-[1200px] mx-auto">
        <div
          className={`flex justify-center gap-8 items-center h-fit min-h-screen w-full flex-col  py-[86px]`}
        >
          <h1 className="text-white text-3xl sm:text-4xl  md:text-6xl text-center">
            Revolutionize your workspace
          </h1>
          <div className="text-white grid grid-cols-12 max-h-[500px] items-center justify-center gap-4">
            <div className="col-span-12 sm:col-span-6 xl:col-span-5 flex flex-col gap-2">
              <p className="font-light text-sm sm:text-lg">
                With bohner consulting
              </p>
              <h3 className="text-xl sm:text-3xl font-semibold">
                Transform brands by digital products
              </h3>
              <p className="text-sm sm:text-base lg:text-lg">
                We are a forward-thinking organization offering diverse products
                and services to empower businesses and communities. Our focus is
                on aligning with the Government of India's flagship projects to
                enhance the eastern region of the country. We strive to deliver
                innovative, cost-effective, and sustainable solutions while
                addressing the region's unique challenges cutting-edge
                technologies.
              </p>
              <LinkRouter
                to="/services"
                className="cursor-pointer py-2 text-center rounded-lg bg-white text-[#0F75BC]"
                // smooth={true}
                // duration={500}
                // offset={-100}
              >
                Show services
              </LinkRouter>
            </div>
            <div className="col-span-12 sm:col-span-6 xl:col-span-7">
              <div className=" grid xl:grid-cols-2 gap-4 ">
                <div className="bg-white/50 overflow-y-auto max-h-[200px] sm:max-h-full flex flex-col gap-2 justify-between rounded-lg p-5">
                  {/* <div className=""> */}
                  <p className="text-lg md:text-2xl">We Provide</p>
                  {provide.map((unit, index) => (
                    <div
                      key={index}
                      className="bg-white p-1 md:p-2 rounded-lg flex items-center gap-2"
                    >
                      <span className="block bg-[#0F75BC]/50 p-1 md:p-2 rounded-md">
                        {unit.logo}
                      </span>

                      <p className="text-[#0F75BC] text-sm md:text-base font-semibold">
                        {unit.tag}
                      </p>
                    </div>
                  ))}
                  {/* </div> */}
                </div>
                <div className="hidden xl:flex h-full flex-col gap-4">
                  <div className="h-1/2 rounded-lg text-[#0F75BC] flex flex-col justify-center items-center">
                    <img
                      src={img3}
                      alt="Image 3"
                      className="aspect-square max-h-[250px] rounded-lg object-cover w-full"
                    />
                  </div>
                  <div className="flex h-1/2">
                    <img
                      src={img1}
                      alt="Image 1"
                      className="aspect-square max-h-[250px] rounded-lg object-cover w-full"
                    />
                    {/* <Carousel
                    plugins={[
                      Autoplay({
                        delay: 2000,
                      }),
                    ]}
                  >
                    <CarouselContent className="rounded-lg">
                      <CarouselItem className="">
                        <img
                          src={img1}
                          alt="Image 1"
                          className="aspect-square rounded-lg object-cover w-full h-full"
                        />
                      </CarouselItem>
                      <CarouselItem className="">
                        <img
                          src={img2}
                          alt="Image 2"
                          className="aspect-square rounded-lg object-cover w-full h-full"
                        />
                      </CarouselItem>
                    </CarouselContent>
                  </Carousel> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
