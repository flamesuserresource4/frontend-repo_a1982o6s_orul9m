import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Brush, ShieldCheck, Wrench } from 'lucide-react';
import { useRef } from 'react';

function Character({ color = '#22d3ee', progress, delay = 0 }) {
  const y = useTransform(progress, [0, 1], [0, -30]);
  const rotate = useTransform(progress, [0, 1], [0, 6]);
  return (
    <motion.svg
      style={{ y, rotate }}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      className="drop-shadow-[0_4px_16px_rgba(34,211,238,0.25)]"
    >
      <circle cx="32" cy="32" r="24" fill={`${color}30`} />
      <circle cx="28" cy="28" r="6" fill={color} />
      <circle cx="40" cy="34" r="4" fill={color} />
      <rect x="20" y="40" width="24" height="6" rx="3" fill={color} />
    </motion.svg>
  );
}

const items = [
  {
    title: 'Strategy & UX',
    desc: 'We map your goals to a conversion-first journey that feels effortless.',
    icon: Brush,
    color: '#22d3ee',
  },
  {
    title: 'Custom Development',
    desc: 'Clean, scalable code optimized for speed, SEO, and security.',
    icon: Code2,
    color: '#60a5fa',
  },
  {
    title: 'Launch & QA',
    desc: 'Rigorous testing across devices and browsers to ensure perfection.',
    icon: ShieldCheck,
    color: '#34d399',
  },
  {
    title: 'Ongoing Support',
    desc: 'We stay with you—iteration, updates, and growth insights.',
    icon: Wrench,
    color: '#fbbf24',
  },
];

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });

  return (
    <section ref={ref} id="services" className="relative w-full bg-[#0b1a33] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl font-bold sm:text-3xl">Our Process</h2>
          <p className="mt-2 max-w-2xl text-white/70">A simple, powerful four-step framework that keeps you moving fast and launching smarter.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-cyan-300" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <Character color={item.color} progress={scrollYProgress} />
              </div>
              <p className="text-sm text-white/70">{item.desc}</p>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/20 blur-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
