import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import img1 from "../assets/images/products/product1.jpg";
import img2 from "../assets/images/products/product2.png";
import img3 from "../assets/images/products/product3.jpg";
import img4 from "../assets/images/products/product4.jpg";
import img5 from "../assets/images/products/product5.jpg";

import React, { useState } from "react";
import Container from "@/components/Container";
import Modal from "@/components/Modal";

const Products = () => {
  const [open, setOpen] = useState(false);
  const tags = ["electronics", "phones"];
  const items = [
    {
      type: "electronics",
      name: "Smart Classroom Solutions",
      img: img1,
      description: "lorem lorem lorem lorem",
      price: "$250",
      tag: "best",
    },
    {
      type: "electronics",
      name: "consoles",
      img: img2,
      description: "lorem lorem lorem lorem",
      price: "$250",
      tag: "best",
    },
    {
      type: "electronics",
      name: "headphones",
      img: img3,
      description: "lorem lorem lorem lorem",
      price: "$50",
      tag: "best",
    },
    {
      type: "electronics",
      name: "headphones",
      img: img4,
      description: "lorem lorem lorem lorem",
      price: "$50",
      tag: "best",
    },
    {
      type: "electronics",
      name: "headphones",
      img: img5,
      description: "lorem lorem lorem lorem",
      price: "$50",
      tag: "best",
    },
    {
      type: "phones",
      name: "consoles",
      img: img2,
      description: "lorem lorem lorem lorem",
      price: "$250",
      tag: "best",
    },
    {
      type: "phones",
      name: "headphones",
      img: img3,
      description: "lorem lorem lorem lorem",
      price: "$50",
      tag: "best",
    },
  ];
  const [filterItem, setFilterItem] = useState("electronics");
  const [filteredList, setFilteredList] = useState(
    items.filter((item) => item.type.toLowerCase() === "electronics")
  );

  const handleFiltering = (tag) => {
    setFilterItem(tag);
    filtering(tag);
  };
  const filtering = (tag) => {
    setFilteredList(
      items.filter((item) => item.type.toLowerCase() === tag.toLowerCase())
    );
  };

  return (
    <div className="px-8 md:px-12 mx-auto">
      <Container>
        <div className="flex flex-col gap-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
            <h3 className=" text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Our services
            </h3>

            {/* <p className="text-sm lg:text-base xl:text-lg">
              Our core focus lies in delivering tailored solutions that blend
              cutting-edge technology, eco-conscious practices, and a commitment
              to skill development.
            </p> */}
          </div>
          <div className="flex flex-wrap gap-4">
            {tags.map((tag, index) => (
              <button
                key={index}
                onClick={() => handleFiltering(tag)}
                className={`text-sm xl:text-base
              ${
                tag === filterItem
                  ? "bg-[#0F75BC] text-white"
                  : "text-[#0F75BC] bg-white"
              }
              py-2 px-3 xl:py-3 xl:px-4 rounded-full font-semibold capitalize`}
              >
                {tag}
              </button>
            ))}
          </div>
          <div>
            <Carousel>
              <CarouselContent>
                {filteredList?.map((list, index) => (
                  <CarouselItem
                    key={index}
                    onClick={() => setOpen(true)}
                    className="relative cursor-pointer sm:basis-1/2 md:basis-1/3 flex flex-col justify-center items-center"
                  >
                    <img
                      src={list.img}
                      alt="..."
                      className="w-full h-full object-cover"
                    />
                    <span className="text-xs md:text-base top-4 right-4 rounded-full capitalize text-white absolute py-2 px-4 bg-[#0F75BC]">
                      {list.tag}
                    </span>
                    <div className="p-4 w-full  items-center">
                      <div>
                        <h3 className="text-2xl xl:text-3xl font-semibold capitalize">
                          {list.name}
                        </h3>
                        <p className="text-sm xl:text-base">
                          {list.description}
                        </p>
                      </div>
                      {/* <div>
                        <h1 className="text-xl xl:text-3xl font-bold">
                          {list.price}
                        </h1>
                      </div> */}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <Modal isOpen={open} onClose={() => setOpen(false)}>
            <h2 className="text-xl font-bold mb-2">Welcome</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              We empower institutions to create future-ready, immersive learning
              environments by integrating smart technologies that enhance
              teaching and student engagement. Our offerings include:
              Interactive Smart Panels PTZ Cameras & High-Lumen Projectors Video
              Conferencing Equipment Microphones and Speaker Phones for hybrid
              learning environments These tools are designed to optimize both
              physical and virtual classroom experiences, ensuring seamless
              communication and interactive learning. Authorized Partners:
              Panasonic, Ekin, AVer, A&T
            </p>
            <button
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Close
            </button>
          </Modal>
        </div>
      </Container>
    </div>
  );
};

export default Products;
