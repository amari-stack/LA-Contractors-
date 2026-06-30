import { useState } from 'react';
import { Star, MapPin, Calendar, Check, MessageSquare, Image, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioItem, Testimonial } from '../types';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Site Work' | 'Underground Pipe' | 'Material Sales'>('All');
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 'p1',
      title: 'Brooksville Shopping Center Base',
      category: 'Site Work',
      description: 'Mass earth excavation, structural stabilization, and base preparation for a 12,000 sq ft retail pad.',
      location: 'South Broad St, Brooksville',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
      completedDate: 'March 2026'
    },
    {
      id: 'p2',
      title: 'Oak Hills Storm Drainage Install',
      category: 'Underground Pipe',
      description: 'Laying 1,800 linear feet of 36-inch Reinforced Concrete Piping (RCP) to mitigate local regional flooding.',
      location: 'Oak Hills Subdivision, FL',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
      completedDate: 'January 2026'
    },
    {
      id: 'p3',
      title: 'Hernando County Park Civil Prep',
      category: 'Site Work',
      description: 'Topsoil stripping, retention pond excavation, and structural grade work for new public park layouts.',
      location: 'State Road 50, Brooksville',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
      completedDate: 'November 2025'
    },
    {
      id: 'p4',
      title: 'Sewer Bypass & Sanitary Tie-In',
      category: 'Underground Pipe',
      description: 'Meticulous deep-trench sanitary pipe connections and compliance flow test sign-offs under live highway route.',
      location: 'US-98 Bypass, Brooksville',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80',
      completedDate: 'September 2025'
    },
    {
      id: 'p5',
      title: 'Lime Rock Delivery Subgrade',
      category: 'Material Sales',
      description: 'Fast dispatch and tailgate spread of 120 loads of DOT approved aggregate for parking subbase grading.',
      location: 'Cobb Road Warehouse, FL',
      image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80',
      completedDate: 'June 2025'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 't1',
      name: 'Darrell Vance',
      role: 'Project Manager',
      company: 'Vance Commercial Properties',
      quote: 'LA Contractors is easily the most reliable site preparation crew in Hernando County. Their operator grade accuracy is unmatched. They excavated our foundation pads ahead of schedule and the civil engineers signed off with zero adjustments. A true Brooksville pillar.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
    },
    {
      id: 't2',
      name: 'Sarah Mitchell',
      role: 'County Engineer Coordinator',
      company: 'Hernando Public Works (Consultant)',
      quote: 'Laying large diameter utility drainage near commercial corridors is highly risk-sensitive. LA Contractors followed state utility safety standards flawlessly, managed the trench boxes with care, and finished the pipe run with laser precision. Excellent contractors to work with.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80'
    },
    {
      id: 't3',
      name: 'Gene Hollister',
      role: 'Owner & President',
      company: 'Hollister Agricultural Feed',
      quote: 'We ordered over 80 tons of DOT-grade lime rock for heavy tractor lanes. The team dispatched drivers who tailgate-spread it beautifully. They saved our operators hours of blade work. Great price, friendly local dispatch, honest company.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80'
    }
  ];

  const filteredPortfolio = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="work" className="py-20 sm:py-28 bg-slate-950 text-white relative border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-14 max-w-3xl mx-auto">
          <span className="text-xs font-mono text-orange-500 font-black tracking-widest block uppercase">
            RECENT JOBSITES
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tighter uppercase">
            Our Work Speaks for Itself
          </h2>
          <div className="h-1.5 w-20 bg-orange-600 mx-auto" />
          <p className="text-sm text-slate-300 font-medium">
            Take a look at how we shape Hernando County’s commercial developments and municipal layouts. Use the filters below to browse our project sectors.
          </p>
        </div>

        {/* Portfolio Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" id="portfolio-filters">
          {(['All', 'Site Work', 'Underground Pipe', 'Material Sales'] as const).map((filter) => (
            <button
              key={filter}
              id={`filter-btn-${filter.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-none text-xs font-black tracking-widest uppercase transition-all duration-200 border-2 ${
                activeFilter === filter
                  ? 'bg-orange-600 border-orange-600 text-white font-black shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border-slate-800 hover:border-slate-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
          id="portfolio-items-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                key={item.id}
                id={`portfolio-item-${item.id}`}
                className="bg-slate-900 border-2 border-slate-800 rounded-none overflow-hidden shadow-2xl group flex flex-col justify-between hover:border-orange-600/60"
              >
                <div>
                  {/* Photo area */}
                  <div className="relative h-48 overflow-hidden bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category Overlay */}
                    <span className="absolute top-3 left-3 bg-slate-950 text-orange-500 text-[10px] font-mono font-black tracking-widest uppercase px-3 py-1.5 border border-slate-800">
                      {item.category}
                    </span>
                  </div>

                  {/* Body text */}
                  <div className="p-5 space-y-2">
                    <h4 className="text-lg font-display font-black text-white uppercase tracking-tight group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="px-5 pb-5 pt-3 border-t-2 border-slate-850 flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3.5 w-3.5 text-orange-600" />
                    <span className="truncate max-w-[120px]">{item.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3.5 w-3.5 text-orange-600" />
                    <span>{item.completedDate}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Testimonials Bento Section */}
        <div className="mt-24 border-t-2 border-slate-900 pt-20" id="testimonials-block">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Quote narrative info */}
            <div className="lg:col-span-5 space-y-4" id="testimonials-left">
              <span className="text-xs font-mono text-orange-500 font-black tracking-widest block uppercase">
                COMMUNITY VOICE
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight leading-none">
                What the Locals Say About LA Contractors
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                As a pillar company, we value our reputation on every Brooksville job site. Our work speaks through the developers, municipal crew members, and neighbors we support.
              </p>
              <div className="flex items-center space-x-2 bg-slate-900 border-2 border-slate-800 p-3.5 rounded-none max-w-xs">
                <ShieldCheck className="h-5 w-5 text-orange-600 flex-shrink-0" />
                <span className="text-[10px] font-mono font-black text-slate-300 uppercase tracking-widest">
                  Licensed State Utility Contractor
                </span>
              </div>
            </div>

            {/* Interactive review slider */}
            <div className="lg:col-span-7" id="testimonials-right">
              <div className="bg-slate-900 border-2 border-slate-800 p-6 sm:p-8 rounded-none shadow-2xl relative overflow-hidden">
                <MessageSquare className="absolute -top-4 -right-4 h-24 w-24 text-slate-850 opacity-20 pointer-events-none" />
                
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonials[activeTestimonialIdx].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-600 text-orange-600 stroke-orange-600" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed mb-6 font-sans font-medium">
                  "{testimonials[activeTestimonialIdx].quote}"
                </p>

                {/* User info */}
                <div className="flex justify-between items-center border-t-2 border-slate-850 pt-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonials[activeTestimonialIdx].avatar}
                      alt={testimonials[activeTestimonialIdx].name}
                      className="h-12 w-12 rounded-none object-cover border-2 border-slate-700"
                    />
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider">{testimonials[activeTestimonialIdx].name}</h4>
                      <p className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-widest mt-0.5">
                        {testimonials[activeTestimonialIdx].role}, <span className="text-orange-500 font-extrabold">{testimonials[activeTestimonialIdx].company}</span>
                      </p>
                    </div>
                  </div>

                  {/* Simple Carousel Controls */}
                  <div className="flex space-x-1">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        id={`testimonial-dot-${i}`}
                        onClick={() => setActiveTestimonialIdx(i)}
                        className={`h-2.5 transition-all duration-300 ${
                          activeTestimonialIdx === i ? 'w-6 bg-orange-600' : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                        }`}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
