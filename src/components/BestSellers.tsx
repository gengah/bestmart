"use client";
import React from "react";
import Container from "./Container";
import Slider from "react-slick";
import Heading from "./Heading";
import { ProductProps } from "../../type";
import Product from "./Product";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

interface Props {
  products: ProductProps[];
  title?: string;
}

const BestSellers = ({ products, title }: Props) => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Container className="w-full pb-20">
      {/* Heading with consistent styling */}
      {title && (
        <Heading
          heading={title}
          className="text-3xl font-semibold text-center text-gray-900 mb-8"
        />
      )}

      {/* Slider Integration */}
      <div className="w-full">
        <Slider {...sliderSettings}>
          {products?.map((item: ProductProps) => (
            <div key={item?._id} className="px-2">
              <Product product={item} bg="#ffffff" />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default BestSellers;





