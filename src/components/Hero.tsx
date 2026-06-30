import { ArrowRight, ShieldCheck, Award, HardHat } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onBookNow: () => void;
  onExploreWork: () => void;
}

export default function Hero({ onBookNow, onExploreWork }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-900 pt-28 overflow-hidden"
    >
      {/* Background Image with Dark & Orange Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-700 scale-100"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80')`,
        }}
      />
      {/* Skew-x geometric overlay from design HTML */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-orange-600 opacity-15 skew-x-12 translate-x-20 z-10 pointer-events-none hidden lg:block"></div>

      {/* Heavy dark linear gradients */}
      <div className="absolute inset-0 z-10 bg-slate-950/85" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            {/* Tagline / Local Indicator Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-slate-950 border border-orange-600/40 px-4 py-2 rounded-none text-xs font-mono font-bold text-orange-500 tracking-widest uppercase shadow-lg"
              id="hero-badge"
            >
              <span className="h-2 w-2 rounded-full bg-orange-600 animate-pulse" />
              <span>Brooksville's Trusted Site & Pipe Specialists</span>
            </motion.div>

            {/* Main Headline - Bold Typography Theme Special */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-[110px] font-display font-black text-white tracking-tighter leading-none uppercase"
              id="hero-headline"
            >
              LA CONTRACTORS
            </motion.h1>

            {/* Sub-headline / Short Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-sans font-medium leading-relaxed"
              id="hero-paragraph"
            >
              Building the foundation for Florida's future. From comprehensive site development and heavy earth moving to precision underground pipe installation, we deliver Brooksville's most reliable and professional commercial contracting work.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
              id="hero-cta-group"
            >
              <button
                id="hero-book-now-btn"
                onClick={onBookNow}
                className="bg-orange-600 hover:bg-orange-700 text-white font-display font-black text-xs tracking-widest uppercase px-10 py-5 rounded-none shadow-2xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 flex items-center justify-center space-x-2"
              >
                <span>BOOK NOW</span>
                <ArrowRight className="h-4 w-4 stroke-[3px]" />
              </button>
              <button
                id="hero-explore-work-btn"
                onClick={onExploreWork}
                className="bg-slate-950/80 hover:bg-slate-900 text-white border-2 border-slate-700 hover:border-orange-600 font-display font-bold text-xs tracking-widest uppercase px-8 py-5 rounded-none transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>EXPLORE PROJECTS</span>
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-12 max-w-lg border-t-2 border-slate-800"
              id="hero-trust-badges"
            >
              <div className="flex items-center space-x-3">
                <ShieldCheck className="h-5.5 w-5.5 text-orange-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-white">Licensed & Insured</h4>
                  <p className="text-[10px] text-slate-400 font-mono">State of Florida</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5.5 w-5.5 text-orange-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-white">Community Pillar</h4>
                  <p className="text-[10px] text-slate-400 font-mono">Brooksville Proud</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center space-x-3">
                <HardHat className="h-5.5 w-5.5 text-orange-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-white">Heavy Machinery</h4>
                  <p className="text-[10px] text-slate-400 font-mono">Full Fleet Available</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Side Box containing Local Pride */}
          <div className="lg:col-span-4 hidden lg:block" id="hero-sidebox">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-slate-950 border-t-4 border-orange-600 rounded-none p-6 shadow-2xl relative overflow-hidden"
            >
              <div className="relative z-10 space-y-4">
                <h3 className="font-display font-black text-sm uppercase tracking-wider text-white border-b border-slate-800 pb-2">
                  Why Brooksville Contracts LA
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-900/60 rounded-none border-l-2 border-orange-600">
                    <span className="text-orange-500 font-mono text-[10px] font-black block tracking-widest">01 / GEOGRAPHY</span>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">Deep familiarity with Hernando County geological conditions and code compliance.</p>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-none border-l-2 border-orange-600">
                    <span className="text-orange-500 font-mono text-[10px] font-black block tracking-widest">02 / INTEGRITY</span>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">Veteran operators committed to finishing on budget with no hidden fees.</p>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-none border-l-2 border-orange-600">
                    <span className="text-orange-500 font-mono text-[10px] font-black block tracking-widest">03 / PERFORMANCE</span>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">State-of-the-art pipe lasers, grade controls, and modern excavating machinery.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Elegant Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-orange-600" />
    </section>
  );
}
