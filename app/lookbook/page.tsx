export default function LookbookPage() {
  return (
    <div className="pt-32">

      <div className="container-custom">

        <h1 className="heading-font text-7xl mb-10">
          Lookbook
        </h1>

        <p className="max-w-2xl mb-12">
          Explore our campaigns,
          editorials and seasonal
          collections.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {[1,2,3,4,5,6].map((item)=>(
            <div
              key={item}
              className="aspect-[3/4] bg-neutral-200"
            />
          ))}

        </div>

      </div>

    </div>
  );
}
