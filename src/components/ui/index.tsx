import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu as MenuIcon,
  Star,
  MapPin,
  Instagram,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
import heroImg from "@/assets/hero-coffee.jpg";
import roastingImg from "@/assets/roasting.jpg";
import espressoImg from "@/assets/menu-espresso.jpg";
import icedImg from "@/assets/menu-iced.jpg";
import pastryImg from "@/assets/menu-pastry.jpg";
import pourImg from "@/assets/menu-pourover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aura Coffee — A small roastery in Brooklyn" },
      {
        name: "description",
        content:
          "A neighborhood roastery and coffee bar in Brooklyn. Small-batch beans roasted every Tuesday, pour-overs on the bar, and a quiet corner for the afternoon.",
      },
      { property: "og:title", content: "Aura Coffee — A small roastery in Brooklyn" },
      {
        property: "og:description",
        content:
          "Roasted in small batches every Tuesday. Drop by for a pour-over or stay for the ambient noise.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Landing,
});

type MenuItem = {
  name: string;
  origin: string;
  notes: string;
  price: string;
  img: string;
};

const MENU: Record<string, MenuItem[]> = {
  "The Bar": [
    { name: "House Espresso", origin: "Guatemala · Huehuetenango", notes: "Cocoa, brown sugar, a hint of orange peel.", price: "4.50", img: espressoImg },
    { name: "Pour-Over of the Day", origin: "Ethiopia · Yirgacheffe", notes: "Jasmine and bergamot. Tastes like a garden in April.", price: "6.80", img: pourImg },
    { name: "Oat Flat White", origin: "Blend · Warm Corner", notes: "Silky, nutty, honest. Our most-ordered drink.", price: "5.75", img: espressoImg },
  ],
  "Cold Things": [
    { name: "Iced Caramel Cortado", origin: "Blend · Warm Corner", notes: "House salted caramel, a heavy pour of cream.", price: "6.20", img: icedImg },
    { name: "Slow Cold Brew", origin: "Colombia · Nariño", notes: "Steeped 18 hours. Dark cacao and vanilla.", price: "5.90", img: icedImg },
    { name: "Espresso Tonic", origin: "Guatemala · Huehuetenango", notes: "Bright, fizzy, a little bitter. An acquired favorite.", price: "6.00", img: icedImg },
  ],
  "From the Oven": [
    { name: "Almond Croissant", origin: "Baked daily by Rosa", notes: "Twice-baked, buttery, dusted with sugar at 7am.", price: "4.20", img: pastryImg },
    { name: "Chocolate Babka", origin: "Baked daily by Rosa", notes: "Cocoa, brown butter, a pinch of Maldon salt.", price: "5.50", img: pastryImg },
    { name: "Cardamom Bun", origin: "Baked daily by Rosa", notes: "Warm spice, orange zest, a sugar crust that shatters.", price: "4.80", img: pastryImg },
  ],
};

const TABS = Object.keys(MENU);

const MARQUEE_ITEMS = [
  "Roasted every Tuesday, on Linden Ave.",
  "Ethiopia Yirgacheffe just landed — ask at the bar.",
  "Open until 10pm on weekends.",
  "Bring your own cup, take $0.50 off.",
  "Sunday cupping at 11am — walk-ins welcome.",
  "The croissants are gone by 10am. Sorry.",
];

function Landing() {
  const [tab, setTab] = useState(TABS[0]);
  const [open, setOpen] = useState(false);

  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return (
    <div className="min-h-screen font-sans text-cream">
      {/* NAVBAR — flat, editorial, not glassy */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-espresso/80 backdrop-blur-md border-b border-stone-line">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 sm:px-10">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-serif text-2xl italic text-cream">Aura</span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-cream-dim">Coffee · Est. 2018</span>
          </a>
          <ul className="hidden items-center gap-10 text-sm text-cream-dim md:flex">
            {[
              ["Menu", "#menu"],
              ["Our Story", "#story"],
              ["The Space", "#space"],
              ["Visit", "#visit"],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="ink-link text-cream hover:text-amber transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="#visit"
              className="btn-outline-amber hidden rounded-full px-5 py-2 text-xs uppercase tracking-[0.2em] sm:inline-flex"
            >
              Reserve a seat
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="text-cream md:hidden"
            >
              <MenuIcon size={20} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-stone-line px-6 py-5 md:hidden">
            <ul className="flex flex-col gap-4 text-sm text-cream">
              {["Menu", "Our Story", "The Space", "Visit"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(" ", "-")}`}
                    onClick={() => setOpen(false)}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* HERO — 60/40 asymmetric */}
      <section id="top" className="relative pt-32 sm:pt-40">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-cream-dim">
                <span className="h-px w-8 bg-amber" />
                <span>Vol. 07 · {today}</span>
              </div>
              <h1 className="mt-8 font-serif text-[3.25rem] leading-[0.95] text-cream sm:text-[5rem] lg:text-[6.5rem]">
                A small roastery,<br />
                <span className="italic text-cream-dim">and a very</span> quiet room.
              </h1>
              <div className="mt-10 grid grid-cols-12 gap-6">
                <p className="col-span-12 max-w-md text-[15px] leading-relaxed text-cream-dim sm:col-span-8 lg:col-span-7">
                  We roast on Tuesdays, bake on Wednesdays, and open the door at seven.
                  There's a pour-over on the bar, a corner for your book, and someone
                  who'll remember how you take it.
                </p>
                <div className="col-span-12 flex flex-col gap-3 sm:col-span-4 lg:col-span-5">
                  <a
                    href="#menu"
                    className="btn-outline-amber inline-flex items-center justify-between rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em]"
                  >
                    See the menu <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="#visit"
                    className="ink-link self-start text-sm text-cream-dim"
                  >
                    218 Linden Ave, Brooklyn
                  </a>
                </div>
              </div>
            </div>

            {/* image column — offset, taller */}
            <div className="relative col-span-12 lg:col-span-5 lg:-mt-16">
              <div className="grain relative overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] border border-stone-line">
                <img
                  src={heroImg}
                  alt="A barista pouring milk into a small black cup"
                  width={1600}
                  height={1200}
                  className="h-[420px] w-full object-cover transition-transform duration-[2000ms] ease-out hover:scale-[1.03] sm:h-[560px] lg:h-[640px]"
                />
              </div>
              {/* offset caption */}
              <figcaption className="absolute -bottom-4 -left-4 max-w-[240px] border border-stone-line bg-espresso px-5 py-4 sm:-left-8 lg:-left-16">
                <div className="text-[10px] uppercase tracking-[0.3em] text-amber">On the bar</div>
                <div className="mt-1 font-serif text-lg italic text-cream">
                  Ethiopia Yirgacheffe
                </div>
                <div className="mt-1 text-xs text-cream-dim">Roasted three days ago.</div>
              </figcaption>
            </div>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="mt-24 overflow-hidden border-y border-stone-line py-4 sm:mt-32">
          <div className="flex w-max animate-marquee gap-16 whitespace-nowrap text-sm text-cream-dim">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((t, i) => (
              <span key={i} className="flex items-center gap-16">
                <span className="italic font-serif text-cream">{t}</span>
                <span className="text-amber">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MENU — editorial list, not a card grid */}
      <section id="menu" className="relative py-28 sm:py-40">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
              <div className="text-[11px] uppercase tracking-[0.35em] text-amber">The menu</div>
              <h2 className="mt-4 font-serif text-5xl leading-[0.95] text-cream sm:text-6xl">
                What's on
                <br />
                <span className="italic text-cream-dim">the bar</span> today.
              </h2>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-cream-dim">
                A short list, changed when a bean tells us it's ready. Prices are for
                the 8oz. Ask us anything.
              </p>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-stone-line pt-6">
                {TABS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`ink-link text-left font-serif text-2xl italic transition-colors ${
                      tab === t ? "text-amber" : "text-cream-dim hover:text-cream"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <ul className="divide-y divide-stone-line border-y border-stone-line">
                {MENU[tab].map((item, i) => (
                  <li key={item.name} className="group py-8">
                    <div className="grid grid-cols-12 items-start gap-4">
                      {/* thumbnail — offset every other row */}
                      <div
                        className={`col-span-4 sm:col-span-3 ${
                          i % 2 === 1 ? "sm:order-2" : ""
                        }`}
                      >
                        <div className="grain overflow-hidden rounded-tl-2xl rounded-br-2xl">
                          <img
                            src={item.img}
                            alt={item.name}
                            loading="lazy"
                            className="aspect-[4/5] w-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                          />
                        </div>
                      </div>
                      <div className="col-span-8 sm:col-span-8">
                        <div className="flex items-baseline justify-between gap-4">
                          <h3 className="font-serif text-2xl text-cream sm:text-3xl">
                            {item.name}
                          </h3>
                          <span className="font-mono text-sm text-cream-dim">${item.price}</span>
                        </div>
                        <div className="mt-1 text-[11px] uppercase tracking-[0.25em] text-amber">
                          {item.origin}
                        </div>
                        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-cream-dim">
                          {item.notes}
                        </p>
                        <button className="ink-link mt-5 text-xs uppercase tracking-[0.25em] text-cream">
                          Add to order
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs italic text-cream-dim">
                Menu updated {today}. Something out of season? We'll swap it happily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY — asymmetric split with offset image */}
      <section id="story" className="relative py-28 sm:py-40">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="relative col-span-12 lg:col-span-5">
              <div className="grain overflow-hidden rounded-tr-[3rem] rounded-bl-[3rem] border border-stone-line">
                <img
                  src={roastingImg}
                  alt="Beans in the roaster under warm light"
                  width={1200}
                  height={1400}
                  loading="lazy"
                  className="h-[500px] w-full object-cover sm:h-[640px]"
                />
              </div>
              <div className="absolute -bottom-6 right-4 border border-stone-line bg-espresso px-4 py-3 sm:right-8">
                <div className="text-[10px] uppercase tracking-[0.3em] text-amber">Roast log</div>
                <div className="mt-1 font-mono text-xs text-cream">
                  Tue 06:14 · Guatemala · 11:42 dev · +4°C drop
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <div className="text-[11px] uppercase tracking-[0.35em] text-amber">
                Our story · a footnote
              </div>
              <h2 className="mt-4 font-serif text-5xl leading-[0.95] text-cream sm:text-6xl">
                We started with
                <span className="italic text-cream-dim"> one bag </span>
                of beans and
                <span className="italic text-cream-dim"> a borrowed grinder.</span>
              </h2>
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-cream-dim">
                <p>
                  In 2018, Yousef and Priya opened the door on Linden Avenue with a
                  countertop, three stools, and a promise to their neighbor Rosa that
                  they'd always carry her almond croissants.
                </p>
                <p>
                  Six years later, the countertop is the same, the stools have grown to
                  eleven, and the beans come from four farms we now know by first name —
                  Elias in Huehuetenango, Kebede in Yirgacheffe, Camila in Nariño, Rina
                  in Aceh.
                </p>
                <p className="italic text-cream">
                  We're a small shop. We plan to stay small.
                </p>
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-stone-line pt-8">
                {[
                  { k: "4", v: "farms we visit yearly" },
                  { k: "Tues.", v: "roast day, always" },
                  { k: "11", v: "stools, and counting" },
                ].map((s) => (
                  <div key={s.v}>
                    <dt className="font-serif text-4xl italic text-cream">{s.k}</dt>
                    <dd className="mt-2 text-[11px] uppercase tracking-[0.25em] text-cream-dim">
                      {s.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* THE SPACE — staggered zigzag, not 3-col */}
      <section id="space" className="relative py-28 sm:py-40">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.35em] text-amber">The space</div>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] text-cream sm:text-6xl">
              Come in. <span className="italic text-cream-dim">Stay a while.</span>
            </h2>
          </div>

          <div className="mt-20 space-y-24">
            {[
              {
                num: "01",
                title: "The bar",
                copy: "Eleven stools around a wraparound counter. Talk to the barista, or don't — we won't take it personally.",
                aside: "Loud in the mornings. Quiet by 3.",
              },
              {
                num: "02",
                title: "The back room",
                copy: "Two long tables, warm lamps, and the kind of silence that makes work possible. Wi-Fi is fast; the outlets are plentiful.",
                aside: "Laptops welcome until 6pm.",
              },
              {
                num: "03",
                title: "The window",
                copy: "One bench. West-facing. If you sit here in the afternoon you'll understand why we bought the lease.",
                aside: "First come, first served.",
              },
            ].map((f, i) => (
              <article
                key={f.num}
                className={`grid grid-cols-12 items-start gap-x-6 gap-y-6 ${
                  i % 2 === 1 ? "lg:pl-32" : ""
                }`}
              >
                <div className="col-span-3 sm:col-span-2">
                  <div className="font-serif text-6xl italic text-amber sm:text-7xl">{f.num}</div>
                </div>
                <div className="col-span-9 sm:col-span-7">
                  <h3 className="font-serif text-3xl text-cream sm:text-4xl">{f.title}</h3>
                  <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-cream-dim">
                    {f.copy}
                  </p>
                </div>
                <div className="col-span-12 border-l border-amber/40 pl-4 sm:col-span-3">
                  <p className="text-xs italic text-cream-dim">— {f.aside}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NOTES FROM REGULARS — offset editorial quotes */}
      <section className="relative py-28 sm:py-40">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="grid grid-cols-12 gap-x-6 gap-y-4">
            <div className="col-span-12 lg:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.35em] text-amber">Notes on the corkboard</div>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-cream sm:text-5xl">
                Left by <span className="italic text-cream-dim">people who came back.</span>
              </h2>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-14">
            {[
              {
                q: "The Yirgacheffe pour-over ruined every other coffee for me. In the best way.",
                who: "Amara O.",
                since: "Regular since 2020",
                stars: 5,
                col: "lg:col-span-5 lg:col-start-1",
              },
              {
                q: "I wrote two thirds of a novel at the back table. They kept the lamp on for me past close.",
                who: "Julien R.",
                since: "Writer, Fort Greene",
                stars: 5,
                col: "lg:col-span-4 lg:col-start-8 lg:mt-24",
              },
              {
                q: "The oat flat white. The cardamom bun. That's it. That's the review.",
                who: "Maya L.",
                since: "Comes in Saturdays",
                stars: 5,
                col: "lg:col-span-5 lg:col-start-3 lg:mt-8",
              },
            ].map((t) => (
              <figure
                key={t.who}
                className={`col-span-12 border-t border-stone-line pt-6 ${t.col ?? ""}`}
              >
                <div className="flex items-center gap-1 text-amber">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-4 font-serif text-2xl italic leading-snug text-cream sm:text-3xl">
                  "{t.q}"
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.25em] text-cream-dim">
                  {t.who} <span className="text-cream/40">·</span> {t.since}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="relative py-28 sm:py-40">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-6">
              <div className="text-[11px] uppercase tracking-[0.35em] text-amber">Visit</div>
              <h2 className="mt-4 font-serif text-5xl leading-[0.95] text-cream sm:text-7xl">
                Drop by for a <span className="italic text-cream-dim">pour-over,</span>
                <br />
                or stay for the <span className="italic text-cream-dim">ambient noise.</span>
              </h2>

              <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-stone-line pt-8">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-cream-dim">The address</div>
                  <div className="mt-2 font-serif text-xl italic text-cream">
                    218 Linden Avenue
                  </div>
                  <div className="text-sm text-cream-dim">Brooklyn, NY 11217</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-cream-dim">The hours</div>
                  <div className="mt-2 space-y-1 text-sm text-cream">
                    <div>Mon – Fri · <span className="text-cream-dim">7am – 9pm</span></div>
                    <div>Sat – Sun · <span className="text-cream-dim">8am – 10pm</span></div>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-cream-dim">Say hello</div>
                  <div className="mt-2 text-sm text-cream">hello@auracoffee.co</div>
                  <div className="text-sm text-cream-dim">(347) 555-0138</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-cream-dim">Cupping</div>
                  <div className="mt-2 font-serif text-xl italic text-cream">Sundays, 11am</div>
                  <div className="text-sm text-cream-dim">Walk-ins welcome.</div>
                </div>
              </div>

              {/* newsletter — inline, editorial */}
              <div className="mt-14 border-t border-stone-line pt-8">
                <p className="max-w-md font-serif text-2xl italic text-cream">
                  A short letter, once a month. New arrivals, the odd recipe, a note
                  from the roaster.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-6 flex max-w-md items-end gap-4 border-b border-cream/30 pb-3"
                >
                  <input
                    type="email"
                    required
                    placeholder="your email"
                    className="min-w-0 flex-1 bg-transparent text-sm text-cream placeholder:text-cream-dim/70 focus:outline-none"
                  />
                  <button className="ink-link text-xs uppercase tracking-[0.25em] text-amber">
                    Subscribe
                  </button>
                </form>
                <p className="mt-3 text-xs italic text-cream-dim">
                  10% off your first visit, if that's what tipped you over.
                </p>
              </div>
            </div>

            {/* offset map */}
            <div className="relative col-span-12 lg:col-span-5 lg:col-start-8 lg:mt-24">
              <div className="grain relative h-[520px] overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] border border-stone-line">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 40%, oklch(0.26 0.03 60) 0%, transparent 45%), radial-gradient(circle at 70% 65%, oklch(0.24 0.04 70) 0%, transparent 45%), linear-gradient(180deg, oklch(0.18 0.02 40), oklch(0.14 0.02 40))",
                  }}
                />
                <svg className="absolute inset-0 h-full w-full opacity-25" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="streets" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(12)">
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="oklch(0.72 0.10 65)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#streets)" />
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute -inset-6 rounded-full bg-amber/25 blur-2xl" />
                    <div className="relative grid h-10 w-10 place-items-center rounded-full border border-cream/30 bg-espresso text-amber">
                      <MapPin size={16} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 border border-stone-line bg-espresso px-5 py-3 sm:-left-10">
                <div className="text-[10px] uppercase tracking-[0.3em] text-amber">You'll find us</div>
                <div className="mt-1 font-serif text-lg italic text-cream">
                  Between the bookshop and the bakery.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-line py-14">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="grid grid-cols-12 items-end gap-y-8">
            <div className="col-span-12 md:col-span-5">
              <div className="font-serif text-5xl italic text-cream">Aura.</div>
              <p className="mt-3 max-w-xs text-sm text-cream-dim">
                A small roastery and coffee bar. Brooklyn, NY. Since a rainy
                Tuesday in October, 2018.
              </p>
            </div>
            <div className="col-span-6 md:col-span-3">
              <div className="text-[10px] uppercase tracking-[0.3em] text-cream-dim">Follow along</div>
              <div className="mt-4 flex items-center gap-5">
                <a href="#" aria-label="Instagram" className="text-cream hover:text-amber transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" aria-label="Twitter" className="text-cream hover:text-amber transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 md:text-right">
              <p className="text-xs italic text-cream-dim">
                Handset in Instrument Serif & Inter.
                <br />
                © {new Date().getFullYear()} Aura Coffee. Made slowly.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
