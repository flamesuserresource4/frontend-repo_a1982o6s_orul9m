import { motion } from 'framer-motion';
import { Clock, Zap, ShieldCheck, Handshake } from 'lucide-react';

export default function WhyUs() {
  const items = [
    { icon: Zap, title: 'Speed Obsessed', desc: 'We build blazing-fast sites that boost SEO and conversion.' },
    { icon: Clock, title: 'On-Time Delivery', desc: 'Structured sprints and proactive communication keep you on schedule.' },
    { icon: ShieldCheck, title: 'Quality & Security', desc: 'Rigorous QA and best-practice security baked into every build.' },
    { icon: Handshake, title: 'Post-Launch Support', desc: 'Iterate with us—A/B tests, updates, and growth-focused tweaks.' },
  ];

  return (
    <section id="why" className="w-full bg-[#081224] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl font-bold sm:text-3xl">Why Choose Us</h2>
          <p className="mt-2 max-w-2xl text-white/70">We blend design, psychology, and engineering to maximize conversions from day one.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <div className="mb-2 flex items-center gap-3">
                <item.icon className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
