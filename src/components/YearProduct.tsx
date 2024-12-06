import React from "react";
import Container from "./Container";
import Image from "next/image";
import productOfTheYear from "@/assets/logo.jpg";
import Link from "next/link";

const YearProduct = () => {
  return (
    <div className="w-full bg-[#f3f3f3]">
      <Container className="md:bg-transparent relative py-0 mb-10">
        <Image
          src={productOfTheYear}
          alt="product"
          className="w-full h-full object-cover hidden md:inline-block"
        />
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-3xl font-semibold text-primeColor">
            Product of the year
          </h1>
          <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
            Explore our most popular products that customers love! These top-rated items have proven to be the best in quality, value, and satisfaction. From customer favorites to trending must-haves, find out what makes these products stand out and why they’re flying off the shelves.
          </p>
          <Link
            href={"/shop"}
            className="bg-primeColor text-white text-lg w-[185px] h-[50px] hover:bg-black duration-300 font-bold flex items-center justify-center rounded-md"
          >
            Shop Now
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default YearProduct;
