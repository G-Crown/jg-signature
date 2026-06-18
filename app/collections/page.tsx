import CollectionCard from "@/components/CollectionCard";
import { getCollections } from "@/lib/shopify";

export default async function CollectionsPage() {

  const collections =
    await getCollections();

  return (
    <div className="pt-32">

      <div className="container-custom">

        <h1 className="heading-font text-6xl mb-12">
          Collections
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

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

    </div>
  );
}
