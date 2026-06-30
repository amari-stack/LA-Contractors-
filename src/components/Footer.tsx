import { HardHat, Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="app-footer" className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t-2 border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row with brand and navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b-2 border-slate-900">
          
          {/* Brand details */}
          <div className="md:col-span-5 space-y-4" id="footer-brand-section">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={handleScrollToTop}>
              <div className="bg-orange-600 text-white p-2 rounded-none font-bold">
                <HardHat className="h-5 w-5" />
              </div>
              <span className="text-xl font-display font-black text-white tracking-tighter uppercase">
                LA CONTRACTORS
              </span>
            </div>
            <p className="text-xs text-slate-300 max-w-sm leading-relaxed font-semibold">
              Brooksville’s trusted partner in complete site development, grading, excavations, and high-spec underground utilities. We build the infrastructure Florida thrives on.
            </p>
            <div className="flex items-center space-x-2 text-[11px] text-slate-400 font-bold uppercase tracking-wider font-mono">
              <ShieldCheck className="h-4 w-4 text-orange-500" />
              <span>Certified Florida Utility Contractor • Lic #CUC1224558</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-4" id="footer-links-section">
            <h4 className="text-xs font-mono font-black text-white uppercase tracking-widest">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-1 gap-2.5 text-xs font-bold uppercase tracking-wider">
              <button
                id="footer-nav-home"
                onClick={() => handleNavClick('home')}
                className="text-left text-slate-400 hover:text-orange-500 transition-colors"
              >
                HOME
              </button>
              <button
                id="footer-nav-about"
                onClick={() => handleNavClick('about')}
                className="text-left text-slate-400 hover:text-orange-500 transition-colors"
              >
                ABOUT
              </button>
              <button
                id="footer-nav-services"
                onClick={() => handleNavClick('services')}
                className="text-left text-slate-400 hover:text-orange-500 transition-colors"
              >
                SERVICES
              </button>
              <button
                id="footer-nav-pricing"
                onClick={() => handleNavClick('pricing')}
                className="text-left text-slate-400 hover:text-orange-500 transition-colors"
              >
                PRICING ESTIMATOR
              </button>
              <button
                id="footer-nav-work"
                onClick={() => handleNavClick('work')}
                className="text-left text-slate-400 hover:text-orange-500 transition-colors"
              >
                OUR WORK
              </button>
              <button
                id="footer-nav-contact"
                onClick={() => handleNavClick('contact')}
                className="text-left text-slate-400 hover:text-orange-500 transition-colors"
              >
                CONTACT / BOOK NOW
              </button>
            </div>
          </div>

          {/* Core Contacts info */}
          <div className="md:col-span-4 space-y-4" id="footer-contact-section">
            <h4 className="text-xs font-mono font-black text-white uppercase tracking-widest">
              Contract Center
            </h4>
            <ul className="space-y-3 text-xs font-bold uppercase tracking-wider">
              <li className="flex items-center space-x-2.5">
                <MapPin className="h-4 w-4 text-orange-500 flex-shrink-0 stroke-[2.5]" />
                <span className="text-slate-300">104 Cobb Road, Brooksville, FL 34601</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-orange-500 flex-shrink-0 stroke-[2.5]" />
                <a href="tel:3525550199" className="hover:text-orange-500 text-white">
                  (352) 555-0199
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-orange-500 flex-shrink-0 stroke-[2.5]" />
                <a href="mailto:contract@lacontractors.com" className="hover:text-orange-500 text-white lowercase">
                  contract@lacontractors.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom row: copyright & scroll back up */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 space-y-4 sm:space-y-0 font-bold uppercase tracking-wider">
          <div>
            <p>© {new Date().getFullYear()} LA Contractors. All rights reserved.</p>
            <p className="text-[10px] text-slate-600 mt-1 font-mono font-black">
              Brooksville's premier utility and earth clearing contractors. Built locally.
            </p>
          </div>

          <button
            id="footer-back-to-top"
            onClick={handleScrollToTop}
            className="group flex items-center space-x-2 bg-slate-900 hover:bg-slate-950 border-2 border-slate-800 text-slate-300 hover:text-white px-3.5 py-2 rounded-none transition-colors font-black tracking-widest uppercase text-[10px]"
            title="Scroll Back To Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
