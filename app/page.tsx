import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CollectionCard from "@/components/CollectionCard";

import {
  getProducts,
  getCollections
} from "@/lib/shopify";

export default async function HomePage() {

  const products =
    await getProducts();

  const collections =
    await getCollections();

  return (
    <>
      <Hero />

      <section className="section-padding">

        <div className="container-custom">

          <div className="mb-12">
            <span className="gold-text uppercase tracking-[0.2em] text-sm">
              Featured
            </span>

            <h2 className="heading-font text-5xl mt-4">
              New Arrivals
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {products.map(
              ({ node }: any) => (
                <ProductCard
                  key={node.id}
                  title={node.title}
                  image={node.featuredImage?.url} 
                  price={node.priceRange.minVariantPrice.amount} 
                  handle={node.handle}
                  />
              )
            )}

          </div>

        </div>

      </section>

      <section className="section-padding bg-neutral-100">

        <div className="container-custom">

          <div className="mb-12">

            <span className="gold-text uppercase tracking-[0.2em] text-sm">
              Collections
            </span>

            <h2 className="heading-font text-5xl mt-4">
              Shop By Category
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {collections.map(
              ({ node }: any) => (
                <CollectionCard
                  key={node.id}
                  title={node.title}
                  handle={node.handle}
                />
              )
            )}

          </div>

        </div>

      </section>

      <section className="section-padding">

        <div className="container-custom text-center">

          <span className="gold-text uppercase tracking-[0.2em] text-sm">
            JG Signature
          </span>

          <h2 className="heading-font text-6xl mt-6">
            Fashion That Speaks
            <br />
            Before You Do
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-neutral-600 leading-relaxed">
            Every piece is crafted to command
            presence, drawing from African
            heritage and modern luxury.
          </p>

        </div>

      </section>
    </>
  );
}
