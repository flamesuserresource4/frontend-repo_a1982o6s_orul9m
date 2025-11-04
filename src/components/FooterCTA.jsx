import { Rocket } from 'lucide-react';

export default function FooterCTA({ onOpenContact }) {
  return (
    <footer className="w-full bg-gradient-to-t from-[#060e1c] to-[#081224] py-14 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-white/5 p-8 text-center ring-1 ring-white/10 sm:flex-row sm:text-left">
          <div>
            <h3 className="text-xl font-semibold">Ready to launch something great?</h3>
            <p className="mt-1 text-white/70">Let’s design a website that converts more visitors into customers.</p>
          </div>
          <button
            onClick={onOpenContact}
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-[#071225] transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Get a Free Quote
          </button>
        </div>
        <p className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
