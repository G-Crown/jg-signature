"use client";

import { useCart }
from "@/context/CartContext";

export default function AddToCart({
  id,
  title,
  price,
  image
}: any) {

  const { addItem } =
    useCart();

  return (
    <button
      onClick={() =>
        addItem({
          id,
          title,
          price,
          image,
          quantity: 1
        })
      }
      className="btn-primary w-full"
    >
      Add To Cart
    </button>
  );
}
