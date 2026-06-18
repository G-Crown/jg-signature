"use client";

import Link from "next/link";
import { ShoppingBag, Search, User } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link
          href="/"
          className="heading-font text-2xl tracking-[0.15em]"
        >
          JG SIGNATURE
        </Link>

        <nav className="hidden lg:flex gap-10 uppercase tracking-[0.15em] text-xs">
          <Link href="/shop">Shop</Link>
          <Link href="/collections">
            Collections
          </Link>
          <Link href="/lookbook">
            Lookbook
          </Link>
          <Link href="/journal">
            Journal
          </Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="flex gap-5">
          <Search size={18} />
          <User size={18} />
          <ShoppingBag size={18} />
        </div>
      </div>
    </header>
  );
}
