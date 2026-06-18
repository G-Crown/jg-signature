import Link from "next/link";

interface Props {
  title: string;
  handle: string;
}

export default function CollectionCard({
  title,
  handle
}: Props) {
  return (
    <Link
      href={`/collections/${handle}`}
      className="border border-neutral-200 p-10 hover:bg-black hover:text-white transition-all"
    >
      <h3 className="heading-font text-3xl">
        {title}
      </h3>
    </Link>
  );
}
