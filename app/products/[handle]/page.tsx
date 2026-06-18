import Image from "next/image";

import {
  getProduct
} from "@/lib/shopify";

import AddToCart
from "@/components/AddToCart";

export default async function ProductPage({
  params
}: {
  params: {
    handle: string;
  };
}) {

  const product =
    await getProduct(
      params.handle
    );

  const firstVariant =
    product.variants.edges[0]
      .node;

  return (
    <div className="pt-32">

      <div className="container-custom grid md:grid-cols-2 gap-16">

        <div>

          <Image
            src={
              product.featuredImage
                .url
            }
            alt={product.title}
            width={900}
            height={1200}
            className="w-full"
          />

        </div>

        <div>

          <h1 className="heading-font text-6xl">
            {product.title}
          </h1>

          <p className="text-2xl mt-4">
            ₦
            {Number(
              firstVariant.price
                .amount
            ).toLocaleString()}
          </p>

          <p className="mt-8 text-neutral-600">
            {
              product.description
            }
          </p>

          <div className="mt-10">

            <AddToCart
              id={
                firstVariant.id
              }
              title={
                product.title
              }
              image={
                product
                  .featuredImage
                  .url
              }
              price={Number(
                firstVariant.price
                  .amount
              )}
            />

          </div>

        </div>

      </div>

    </div>
  );
}
