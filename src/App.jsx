import { useState } from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import WhyUs from './components/WhyUs.jsx';
import FooterCTA from './components/FooterCTA.jsx';

function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', budget: '', description: '' });

  if (!open) return null;

  function handleSubmit(e) {
    e.preventDefault();
    // Simulate submission
    alert('Thanks! Your inquiry has been sent. We will get back to you shortly.');
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-[#0b1a33] text-white shadow-2xl ring-1 ring-white/10">
        <div className="border-b border-white/10 p-5">
          <h3 className="text-lg font-semibold">Start Your Project</h3>
          <p className="mt-1 text-sm text-white/70">Tell us a bit about your goals and we’ll reply within 24 hours.</p>
        </div>
        <form onSubmit={handleSubmit} className="p-5">
          <div className="grid grid-cols-1 gap-4">
            <label className="text-sm">
              <span className="mb-1 block text-white/80">Name</span>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400"
                placeholder="Jane Doe"
              />
            </label>
            <label className="text-sm">
              <span className="mb-1 block text-white/80">Email Address</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400"
                placeholder="you@company.com"
              />
            </label>
            <label className="text-sm">
              <span className="mb-1 block text-white/80">Project Budget Range</span>
              <select
                required
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="w-full appearance-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-cyan-400"
              >
                <option className="bg-[#0b1a33]" value="" disabled>Select a range</option>
                <option className="bg-[#0b1a33]" value="< $3k">Under $3,000</option>
                <option className="bg-[#0b1a33]" value="$3k–$8k">$3,000 – $8,000</option>
                <option className="bg-[#0b1a33]" value="$8k–$20k">$8,000 – $20,000</option>
                <option className="bg-[#0b1a33]" value="> $20k">Above $20,000</option>
              </select>
            </label>
            <label className="text-sm">
              <span className="mb-1 block text-white/80">Brief Project Description</span>
              <textarea
                required
                rows={4}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400"
                placeholder="What are you building? What does success look like?"
              />
            </label>
          </div>
          <div className="mt-5 flex items-center justify-end gap-3">
            <button type="button" onClick={onClose} className="rounded-md px-4 py-2 text-sm text-white/80 hover:text-white">Cancel</button>
            <button type="submit" className="rounded-md bg-cyan-500 px-5 py-2 text-sm font-semibold text-[#071225] hover:bg-cyan-400">Send Inquiry</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#060e1c]">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#060e1c]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
          <div className="font-semibold">BlueWave Studio</div>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#why" className="hover:text-white">Why Us</a>
          </nav>
          <button
            onClick={() => setOpen(true)}
            className="rounded-full bg-cyan-500 px-4 py-2 text-xs font-semibold text-[#071225] hover:bg-cyan-400"
          >
            Get a Free Quote
          </button>
        </div>
      </header>

      <main>
        <Hero onOpenContact={() => setOpen(true)} />
        <Services />
        <WhyUs />
      </main>

      <FooterCTA onOpenContact={() => setOpen(true)} />

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default App;
