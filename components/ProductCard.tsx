import Link from "next/link";
import Image from "next/image";

interface ProductProps {
  title: string;
  image: string;
  price: string;
  handle: string;
}

export default function ProductCard({
  title,
  image,
  price,
  handle
}: ProductProps) {
  return (
    <Link href={`/products/${handle}`}>
      <div className="group cursor-pointer">

        <div className="relative aspect-[3/4] overflow-hidden">

          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

        </div>

        <div className="pt-4">

          <h3 className="heading-font text-xl">
            {title}
          </h3>

          <p className="mt-2">
            ₦{Number(price).toLocaleString()}
          </p>

        </div>

      </div>
    </Link>
  );
}
