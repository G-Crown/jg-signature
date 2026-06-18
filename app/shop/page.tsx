import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/shopify";

export default async function ShopPage() {

  const products =
    await getProducts();

  return (
    <div className="pt-32">

      <div className="container-custom">

        <h1 className="heading-font text-6xl mb-12">
          Shop
        </h1>

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

    </div>
  );
}
