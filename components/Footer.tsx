import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-32">
      <div className="container-custom py-24">
        <div className="grid md:grid-cols-4 gap-12">

          <div>
            <h2 className="heading-font text-3xl mb-5">
              JG SIGNATURE
            </h2>

            <p className="text-white/60">
              Luxury fashion rooted in African
              excellence.
            </p>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.2em] text-xs mb-4">
              Shop
            </h3>

            <ul className="space-y-3 text-white/60">
              <li>
                <Link href="/shop">
                  New Arrivals
                </Link>
              </li>

              <li>
                <Link href="/collections">
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.2em] text-xs mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-white/60">
              <li>
                <Link href="/about">About</Link>
              </li>

              <li>
                <Link href="/journal">
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.2em] text-xs mb-4">
              Contact
            </h3>

            <ul className="space-y-3 text-white/60">
              <li>
                jedidahogidi@gmail.com
              </li>

              <li>
                Lagos, Nigeria
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-sm text-white/40">
          © 2026 JG Signature. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
