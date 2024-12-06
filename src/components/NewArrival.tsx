"use client";
import Container from "./Container";
import Slider from "react-slick";
import Product from "./Product";
import { ProductProps } from "../../type";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Heading from "./Heading";

interface Props {
  products: ProductProps[];
  title: string; // Ensure the title prop is passed correctly
}

const NewArrival = ({ products, title }: Props) => {
  const settings = {
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
    <Container className="-mt-60">
      <section className="new-arrival-section mb-12">
        {/* Using the Heading component and passing the title */}
        <Heading
          heading={title}
          className="text-3xl font-semibold text-center text-gray-900 mb-6"
        />

        <div className="product-slider">
          <Slider {...settings}>
            {products?.map((item: ProductProps) => (
              <div key={item?._id} className="px-2">
                <Product product={item} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </Container>
  );
};

export default NewArrival;

