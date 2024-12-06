
/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Container";
import Onsale from "@/components/Onsale";
import { client, urlFor } from "@/lib/sanityClient";
import { groq } from "next-sanity";
import Image from "next/image";
import { ProductProps } from "../../../../../type";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/components/RichText";
import ProudctInfo from "@/components/ProudctInfo";

interface Props {
  params: { slug: string };
}

// Generate static paths for dynamic routing
export const generateStaticParams = async (): Promise<Props["params"][]> => {
  const query = groq`*[_type == 'product']{ slug }`;

  const slugs: { slug: { current: string } }[] = await client.fetch(query);

  // Map the slugs into the expected structure
  return slugs.map((slug) => ({
    slug: slug.slug.current,
  }));
};

// Fetch the special offers products
const specialOffersQuery = groq`*[_type == 'product' && position == 'on Sale']{ ... } | order(_createdAt asc)`;

// The main page component
const SinglePage = async ({ params }: Props) => {
  // Query to fetch product details
  const query = groq`*[_type == 'product' && slug.current == $slug][0]{ ... }`;

  // Fetch the product data using the slug
  const product: ProductProps = await client.fetch(query, { slug: params.slug });

  // Fetch the special offers
  const specialOffersProduct = await client.fetch(specialOffersQuery);

  return (
    <Container className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 bg-gray-100 p-4">
        {/* Special offers section */}
        <div>
          <Onsale products={specialOffersProduct} />
        </div>

        {/* Product image */}
        <div className="h-full xl:col-span-2">
          <Image
            src={urlFor(product?.image).url()}
            alt="product image"
            className="w-full h-full object-contain"
            width={500}
            height={500}
          />
        </div>

        {/* Product info */}
        <div className="w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
          <ProudctInfo product={product} />
        </div>
      </div>

      {/* Product body rendered as rich text */}
      <PortableText value={product?.body} components={RichText} />
    </Container>
  );
};

export default SinglePage;






