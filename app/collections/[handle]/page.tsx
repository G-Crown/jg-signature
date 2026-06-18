import ProductCard
from "@/components/ProductCard";

import {
  getCollection
}
from "@/lib/shopify";

export default async function CollectionPage({
  params
}: any) {

  const collection =
    await getCollection(
      params.handle
    );

  return (
    <div className="pt-32">

      <div className="container-custom">

        <h1 className="heading-font text-6xl mb-12">
          {
            collection.title
          }
        </h1>

        <div className="grid md:grid-cols-4 gap-8">

          {collection.products.edges.map(
            ({ node }: any) => (
              <ProductCard
                key={node.id}
                title={node.title}
                image={
                  node
                    .featuredImage
                    ?.url
                }
                price={
                  node
                    .priceRange
                    .minVariantPrice
                    .amount
                }
                handle={node.handle}
              />
            )
          )}

        </div>

      </div>

    </div>
  );
}
