import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#111] overflow-hidden">
      
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="JG Signature"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="container-custom relative z-10 text-white">

        <span className="uppercase tracking-[0.3em] text-sm text-[#C9A96E]">
          New Collection
        </span>

        <h1 className="heading-font text-6xl md:text-8xl mt-6 leading-none">
          Designed For
          <br />
          Women Of
          <br />
          Distinction
        </h1>

        <p className="max-w-xl mt-8 text-white/70 text-lg">
          Luxury fashion rooted in African excellence.
          Worn by women who lead with elegance,
          confidence and influence.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/shop"
            className="btn-primary"
          >
            Shop Collection
          </Link>

          <Link
            href="/lookbook"
            className="border border-white px-8 py-4 uppercase tracking-[0.2em]"
          >
            View Lookbook
          </Link>
        </div>

      </div>
    </section>
  );
}
