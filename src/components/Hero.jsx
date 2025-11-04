import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Star } from 'lucide-react';
import { useRef } from 'react';

export default function Hero({ onOpenContact }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={ref} className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0a1222] to-[#0b1a33] text-white">
      {/* Parallax glow orbs */}
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-[72px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 sm:pt-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-cyan-300 ring-1 ring-white/10">
          <Star className="h-4 w-4 text-cyan-400" />
          5-Star Rated Web Experiences
        </div>

        <h1 className="text-center text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Websites That Don’t Just Look Good. <span className="text-cyan-400">They Sell.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-center text-base text-white/80 sm:text-lg">
          High-converting, lightning-fast, and meticulously crafted. We design and build websites that turn clicks into customers.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenContact}
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-[#071225] transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Start My Project
          </button>
          <a href="#why" className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/90 transition hover:border-white/40 hover:text-white">
            Why choose us
          </a>
        </div>

        {/* Trust logos row */}
        <div className="mt-14 w-full max-w-5xl">
          <p className="mb-4 text-center text-xs uppercase tracking-widest text-white/50">Trusted by modern teams</p>
          <div className="grid grid-cols-2 place-items-center gap-6 opacity-80 sm:grid-cols-4">
            {['Nova','Aster','Pioneer','Vertex'].map((brand) => (
              <div key={brand} className="text-white/60">
                <span className="font-semibold tracking-wider">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
