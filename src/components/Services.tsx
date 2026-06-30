import { useState } from 'react';
import { HardHat, Layers, Truck, ArrowRight, CheckCircle2, ChevronRight, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Service } from '../types';

interface ServicesProps {
  onBookService: (serviceName: string) => void;
}

export default function Services({ onBookService }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const servicesData: Service[] = [
    {
      id: 'site-dev',
      title: 'Site Development',
      description: 'Comprehensive clearing, excavation, and structural grading for commercial and residential foundations.',
      fullDetails: 'Our Site Development team possesses the heavy horsepower and engineering precision required to turn raw Florida woodland into build-ready foundations. We handle tree removal, structural leveling, lime rock base layout, and full retention pond excavation. Operating a modern fleet equipped with automated grade controls, we guarantee the highest precision for drainage profiles and load-bearing requirements.',
      icon: 'HardHat',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
      basePriceRange: '$5,000 - $150,000+'
    },
    {
      id: 'pipe-install',
      title: 'Pipe Installation',
      description: 'High-integrity storm drainage, sewer lines, fire mains, and underground potable water mains.',
      fullDetails: 'Underground utility installation is our signature craft. We lay high-diameter concrete piping (RCP), PVC sewer installations, ductile iron water lines, and sanitary tie-ins. Our experienced pipe crew uses state-of-the-art pipe lasers and trench boxes to protect operators and ensure exact fall-rates. We have a solid record of compliance with Hernando County codes and Florida environmental mandates.',
      icon: 'Layers',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80',
      basePriceRange: '$8,000 - $200,000+'
    },
    {
      id: 'material-sales',
      title: 'Material Sales',
      description: 'Direct dispatch of lime rock, crushed aggregate, screened fill-dirt, washed sand, and topsoil.',
      fullDetails: 'Need reliable heavy supplies delivered on-schedule? We sell and deliver premium Florida structural materials directly to your site or home. Whether you need aggregate for a driveway, clean fill-dirt for elevation leveling, or local lime rock for subgrade stabilization, we provide flexible truckloads (single axle, tandem, or semi-dumps) with prompt dispatch and clear volume billing.',
      icon: 'Truck',
      image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80',
      basePriceRange: '$350 - $4,500+ (per truckload load)'
    }
  ];

  // Helper to map string to Icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'HardHat':
        return <HardHat className="h-6 w-6 text-white" />;
      case 'Layers':
        return <Layers className="h-6 w-6 text-white" />;
      case 'Truck':
        return <Truck className="h-6 w-6 text-white" />;
      default:
        return <HardHat className="h-6 w-6 text-white" />;
    }
  };

  const serviceSpecs = {
    'site-dev': [
      'Site Clearing & Grubbing',
      'Erosion Control & Silt Fencing',
      'Mass Earthwork & Rough Grading',
      'Structural Pad Stabilization',
      'Retention Basin Digging'
    ],
    'pipe-install': [
      'Stormwater RCP Installation',
      'Gravity Sanitary Sewers',
      'Underground Fire Service Mains',
      'Force Mains & Lift Stations',
      'Trench Safety & De-watering'
    ],
    'material-sales': [
      'Florida DOT Approved Lime Rock',
      '#57 Crushed Concrete / Granite',
      'Clean Structural Fill-Dirt',
      'Screened Topsoil & Red Clay',
      'Tailgate Spreading Available'
    ]
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-950 text-white relative border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Content */}
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-mono text-orange-500 font-black tracking-widest block uppercase">
            OUR CAPABILITIES
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tighter uppercase">
            Our Primary Programs & Services
          </h2>
          <div className="h-1.5 w-20 bg-orange-600 mx-auto" />
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
            LA Contractors offers full-scale heavy site solutions. We own our fleet, hire local operators, and guarantee a standard of Brooksville work that stands the test of time.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="services-cards-grid">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="bg-slate-900 border-2 border-slate-800 rounded-none overflow-hidden shadow-2xl flex flex-col h-full group hover:border-orange-600/60"
            >
              {/* Image Preview with overlay */}
              <div className="relative h-48 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/10 transition-colors duration-300 z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Floating Icon Badging */}
                <div className="absolute top-4 left-4 z-20 bg-orange-600 p-3 rounded-none shadow-lg flex items-center justify-center border border-orange-400/20">
                  {renderIcon(service.icon)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div>
                  <h3 className="text-xl font-display font-black text-white uppercase tracking-tight group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider font-bold">
                    Estimate: <span className="text-orange-500 font-extrabold">{service.basePriceRange}</span>
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed flex-grow font-medium">
                  {service.description}
                </p>

                {/* Bullets previews */}
                <div className="space-y-1.5 pt-3 border-t-2 border-slate-800">
                  {serviceSpecs[service.id as keyof typeof serviceSpecs]?.slice(0, 3).map((spec, index) => (
                    <div key={index} className="flex items-center space-x-2 text-[11px] text-slate-300 font-semibold">
                      <CheckCircle2 className="h-4 w-4 text-orange-500 flex-shrink-0" />
                      <span className="truncate">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Card CTA Buttons */}
                <div className="flex gap-2 pt-2">
                  <button
                    id={`service-learn-more-${service.id}`}
                    onClick={() => setSelectedService(service)}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-mono text-[10px] font-black tracking-widest uppercase py-3 rounded-none border-2 border-slate-700 transition-all flex items-center justify-center space-x-1"
                  >
                    <span>DETAILS</span>
                    <ChevronRight className="h-3.5 w-3.5 text-orange-500 stroke-[3]" />
                  </button>
                  <button
                    id={`service-book-now-${service.id}`}
                    onClick={() => onBookService(service.title)}
                    className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-display font-black text-[10px] tracking-widest uppercase py-3 rounded-none transition-all flex items-center justify-center space-x-1"
                  >
                    <span>BOOK NOW</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Modal Overlay for Service Information */}
        <AnimatePresence>
          {selectedService && (
            <div 
              id="service-details-modal"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-900 border-2 border-slate-800 w-full max-w-2xl rounded-none overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
              >
                {/* Modal Header */}
                <div className="relative h-56 bg-slate-950">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50" />
                  
                  {/* Close button */}
                  <button
                    id="close-service-modal"
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 bg-slate-900 border-2 border-slate-700 p-2 rounded-none text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <X className="h-4.5 w-4.5 stroke-[2.5]" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-orange-600 text-white text-[10px] font-mono font-black tracking-widest uppercase px-3 py-1 border border-orange-500/20 rounded-none">
                      PRESTIGE PROGRAM
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-white mt-2 uppercase tracking-tight">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Content Scrollable Area */}
                <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono text-orange-500 font-black uppercase tracking-widest">
                      PROGRAM DESCRIPTION & CAPABILITY
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-medium">
                      {selectedService.fullDetails}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t-2 border-slate-800">
                    {/* List of full specifications */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono text-slate-400 font-black uppercase tracking-widest">
                        OUR INCLUDED WORK SCOPES
                      </h4>
                      <ul className="space-y-2">
                        {serviceSpecs[selectedService.id as keyof typeof serviceSpecs]?.map((spec, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300 font-semibold">
                            <CheckCircle2 className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Estimates and Direct Contact */}
                    <div className="bg-slate-950 p-4 rounded-none border-2 border-slate-800 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-black">
                          ESTIMATED CONTRACT RANGE
                        </span>
                        <div className="text-2xl font-display font-black text-orange-500">
                          {selectedService.basePriceRange}
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Prices are highly dependent on geological tests, permit logistics, grading area size, and pipe diameter specifications. Contact us for a free engineered site assessment.
                        </p>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <button
                          id="modal-direct-call"
                          onClick={() => window.open('tel:3525550199')}
                          className="px-3 py-2.5 rounded-none bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border-2 border-slate-700 transition-colors"
                          title="Call Us Directly"
                        >
                          <PhoneCall className="h-4 w-4" />
                        </button>
                        <button
                          id="modal-book-now"
                          onClick={() => {
                            onBookService(selectedService.title);
                            setSelectedService(null);
                          }}
                          className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-display font-black text-xs tracking-widest uppercase py-2.5 rounded-none transition-colors flex items-center justify-center space-x-2"
                        >
                          <span>BOOK SERVICES NOW</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
