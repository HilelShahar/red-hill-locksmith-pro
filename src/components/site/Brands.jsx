const BRANDS = [
  { name: "Lockwood", logo: "/images/brands/lockwood.png" },
  { name: "Dormakaba", logo: "/images/brands/dormakaba.svg" },
  { name: "Whitco", logo: "/images/brands/whitco.jpg" },
  { name: "Brava", logo: "/images/brands/brava.png" },
  { name: "Carbine", logo: "/images/brands/carbine.svg" },
  { name: "McGrath", logo: "/images/brands/mcgrath.png" },
  { name: "Lockton", logo: "/images/brands/lockton.png" }
];

export default function Brands() {
  return (
    <section id="brands" aria-label="Brands we work with" className="scroll-mt-16 border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Brands we work with</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Leading locks &amp; hardware, installed right
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            We source, install and stand behind products from Australia's most
            trusted security brands — so every lock we fit is built to last.
          </p>
        </div>

        <ul className="mt-10 flex flex-wrap items-stretch justify-center gap-3 sm:gap-4">
          {BRANDS.map((brand) => (
            <li
              key={brand.name}
              className="flex h-24 flex-1 basis-28 items-center justify-center rounded-xl border border-border bg-background px-4 shadow-sm transition hover:border-primary/40 hover:shadow-md sm:basis-32 lg:flex-none lg:px-5"
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="h-12 w-auto max-w-[110px] object-contain grayscale opacity-75 transition hover:opacity-100 hover:grayscale-0"
                  loading="lazy"
                />
              ) : (
                <span className="font-display text-lg font-bold uppercase tracking-widest text-foreground/70">
                  {brand.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}