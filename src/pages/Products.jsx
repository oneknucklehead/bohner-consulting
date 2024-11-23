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

const Products = () => {
  const tags = ["electronics", "phones"];
  const items = [
    {
      type: "electronics",
      name: "Printers",
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
            <h3 className="text-4xl font-semibold">
              Our new exclusive collections
            </h3>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {tags.map((tag, index) => (
              <button
                key={index}
                onClick={() => handleFiltering(tag)}
                className={`
              ${
                tag === filterItem
                  ? "bg-[#0F75BC] text-white"
                  : "text-[#0F75BC] bg-white"
              }
              py-3 px-4 rounded-full font-semibold capitalize`}
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
                    className="relative sm:basis-1/2 md:basis-1/3 flex flex-col justify-center items-center"
                  >
                    <img
                      src={list.img}
                      alt="..."
                      className="w-full h-full object-cover"
                    />
                    <span className="text-xs md:text-base top-4 right-4 rounded-full capitalize text-white absolute py-2 px-4 bg-[#0F75BC]">
                      {list.tag}
                    </span>
                    <div className="p-4 w-full flex justify-between gap-4 items-center">
                      <div>
                        <h3 className="text-2xl xl:text-3xl font-semibold capitalize">
                          {list.name}
                        </h3>
                        <p className="text-sm xl:text-base">
                          {list.description}
                        </p>
                      </div>
                      <div>
                        <h1 className="text-xl xl:text-3xl font-bold">
                          {list.price}
                        </h1>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
