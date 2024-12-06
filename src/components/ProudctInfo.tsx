"use client";
import { ProductProps } from "../../type";
import Price from "./Price";

interface Props {
  product: ProductProps;
}
const ProudctInfo = ({ product }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{product?.title}</h2>
      <div className="flex items-center gap-4">


        <Price amount={product?.price} className="text-lg font-bold" />


      </div>
      <p className="text-sm tracking-wide text-gray-600">
        {product?.description}
      </p>

      <button className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg rounded-md">
        Add to Cart
      </button>

    </div>
  );
};

export default ProudctInfo;
