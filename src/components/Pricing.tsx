import { useState, useEffect } from 'react';
import { Calculator, Truck, HelpCircle, Check, Info, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

interface PricingProps {
  onApplyEstimate: (details: { service: string; size: string; total: string }) => void;
}

export default function Pricing({ onApplyEstimate }: PricingProps) {
  const [selectedService, setSelectedService] = useState<'site' | 'pipe' | 'materials'>('site');
  const [siteAcreage, setSiteAcreage] = useState<number>(1);
  const [pipeLinearFeet, setPipeLinearFeet] = useState<number>(100);
  const [materialLoads, setMaterialLoads] = useState<number>(5);
  const [materialType, setMaterialType] = useState<'limerock' | 'crushed' | 'filldirt' | 'topsoil'>('limerock');

  const [estimateResult, setEstimateResult] = useState<{
    materials: number;
    labor: number;
    mobilization: number;
    total: number;
  }>({ materials: 0, labor: 0, mobilization: 0, total: 0 });

  const materialPrices = {
    limerock: { name: 'DOT Lime Rock', perLoad: 380 },
    crushed: { name: '#57 Crushed Concrete', perLoad: 450 },
    filldirt: { name: 'Structural Fill-Dirt', perLoad: 280 },
    topsoil: { name: 'Screened Gardening Topsoil', perLoad: 350 },
  };

  useEffect(() => {
    let materials = 0;
    let labor = 0;
    let mobilization = 250; // standard flat rate from Brooksville base

    if (selectedService === 'site') {
      // Site development calculation
      // Estimate $3,200 per acre for material bases/excavation, $4,800 labor & equipment operations
      materials = Math.round(siteAcreage * 2800);
      labor = Math.round(siteAcreage * 4500);
      mobilization = siteAcreage > 3 ? 750 : 350;
    } else if (selectedService === 'pipe') {
      // Pipe installation calculation
      // Estimate $35 per linear foot for standard utility pipe materials, $45/lf labor/trenching
      materials = Math.round(pipeLinearFeet * 38);
      labor = Math.round(pipeLinearFeet * 52);
      mobilization = pipeLinearFeet > 200 ? 600 : 400;
    } else if (selectedService === 'materials') {
      // Materials Delivery
      const pricePerLoad = materialPrices[materialType].perLoad;
      materials = pricePerLoad * materialLoads;
      labor = 80 * materialLoads; // heavy driver dispatch fee
      mobilization = 150; // closer haul flat rate
    }

    setEstimateResult({
      materials,
      labor,
      mobilization,
      total: materials + labor + mobilization,
    });
  }, [selectedService, siteAcreage, pipeLinearFeet, materialLoads, materialType]);

  const handleLockInEstimate = () => {
    let serviceLabel = '';
    let specLabel = '';

    if (selectedService === 'site') {
      serviceLabel = 'Site Development';
      specLabel = `${siteAcreage} Acre(s) Clearing & Grading`;
    } else if (selectedService === 'pipe') {
      serviceLabel = 'Pipe Installation';
      specLabel = `${pipeLinearFeet} Linear Feet of Utility Piping`;
    } else if (selectedService === 'materials') {
      serviceLabel = `Material Delivery - ${materialPrices[materialType].name}`;
      specLabel = `${materialLoads} Truckloads Delivered`;
    }

    onApplyEstimate({
      service: serviceLabel,
      size: specLabel,
      total: `$${estimateResult.total.toLocaleString()}`,
    });
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-14 max-w-3xl mx-auto">
          <span className="text-xs font-mono text-orange-600 font-black tracking-widest block uppercase">
            TRANSPARENT VALUE
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tighter text-slate-950 uppercase">
            Interactive Cost Estimator
          </h2>
          <div className="h-1.5 w-20 bg-orange-600 mx-auto" />
          <p className="text-sm sm:text-base text-slate-700 font-medium">
            Get an instant budget ballpark based on standard Brooksville material rates and heavy equipment crew dispatch times. Use our selector below to build your contract scope.
          </p>
        </div>

        {/* Pricing Estimator Card */}
        <div className="bg-white border-2 border-slate-900 rounded-none overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
          
          {/* Left Panel: Inputs (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-8" id="pricing-inputs-panel">
            
            {/* Service Toggle */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-slate-500 font-black uppercase tracking-widest block">
                Select Service Classification
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <button
                  id="pricing-select-site"
                  onClick={() => setSelectedService('site')}
                  className={`py-3.5 px-2 rounded-none text-xs font-black uppercase tracking-wider transition-all border-2 ${
                    selectedService === 'site'
                      ? 'bg-orange-600 border-orange-600 text-white shadow-md'
                      : 'bg-white text-slate-700 border-slate-300 hover:text-slate-950 hover:bg-slate-50 hover:border-slate-400'
                  }`}
                >
                  Site Dev
                </button>
                <button
                  id="pricing-select-pipe"
                  onClick={() => setSelectedService('pipe')}
                  className={`py-3.5 px-2 rounded-none text-xs font-black uppercase tracking-wider transition-all border-2 ${
                    selectedService === 'pipe'
                      ? 'bg-orange-600 border-orange-600 text-white shadow-md'
                      : 'bg-white text-slate-700 border-slate-300 hover:text-slate-950 hover:bg-slate-50 hover:border-slate-400'
                  }`}
                >
                  Pipe Laying
                </button>
                <button
                  id="pricing-select-materials"
                  onClick={() => setSelectedService('materials')}
                  className={`py-3.5 px-2 rounded-none text-xs font-black uppercase tracking-wider transition-all border-2 ${
                    selectedService === 'materials'
                      ? 'bg-orange-600 border-orange-600 text-white shadow-md'
                      : 'bg-white text-slate-700 border-slate-300 hover:text-slate-950 hover:bg-slate-50 hover:border-slate-400'
                  }`}
                >
                  Materials
                </button>
              </div>
            </div>

            {/* Dynamic Slider/Inputs based on selection */}
            <div className="space-y-6 pt-4 border-t-2 border-slate-100" id="pricing-dynamic-inputs">
              {selectedService === 'site' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-black text-slate-950 uppercase tracking-tight">Project Land Scale (Acreage)</span>
                    <span className="bg-slate-950 border-2 border-slate-950 text-orange-500 px-4 py-1.5 rounded-none text-xs font-mono font-black">
                      {siteAcreage} {siteAcreage === 1 ? 'Acre' : 'Acres'}
                    </span>
                  </div>
                  <input
                    id="pricing-acreage-slider"
                    type="range"
                    min="1"
                    max="15"
                    step="0.5"
                    value={siteAcreage}
                    onChange={(e) => setSiteAcreage(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-none appearance-none cursor-pointer accent-orange-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono font-bold">
                    <span>1 Acre (Lot Clearing)</span>
                    <span>15 Acres (Subdivision Base)</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium italic">
                    Includes initial structural clearing, topsoil stripping, building pads compaction, and drainage grading.
                  </p>
                </div>
              )}

              {selectedService === 'pipe' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-black text-slate-950 uppercase tracking-tight">Total Length of Underground Pipe</span>
                    <span className="bg-slate-950 border-2 border-slate-950 text-orange-500 px-4 py-1.5 rounded-none text-xs font-mono font-black">
                      {pipeLinearFeet} Linear Feet
                    </span>
                  </div>
                  <input
                    id="pricing-feet-slider"
                    type="range"
                    min="20"
                    max="1000"
                    step="10"
                    value={pipeLinearFeet}
                    onChange={(e) => setPipeLinearFeet(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-none appearance-none cursor-pointer accent-orange-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono font-bold">
                    <span>20 Feet (Short Utility Link)</span>
                    <span>1,000 Feet (Commercial Loop)</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium italic">
                    Covers trench digging, pipe bedding placement, laying gravity sanitary or stormwater lines, backfilling, and compaction testing.
                  </p>
                </div>
              )}

              {selectedService === 'materials' && (
                <div className="space-y-6">
                  {/* Select material type */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-500 font-black uppercase tracking-widest block">
                      Florida Structural Material Type
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {Object.entries(materialPrices).map(([key, data]) => (
                        <button
                          key={key}
                          id={`pricing-material-type-${key}`}
                          onClick={() => setMaterialType(key as any)}
                          className={`p-3 rounded-none text-xs font-bold text-left transition-all flex justify-between items-center border-2 ${
                            materialType === key
                              ? 'bg-slate-950 border-orange-600 text-white'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-950 hover:border-slate-350'
                          }`}
                        >
                          <span className="font-bold">{data.name}</span>
                          <span className="text-xs text-orange-500 font-mono font-black">${data.perLoad}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Volume Slider */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-black text-slate-950 uppercase tracking-tight">Truckload Deliveries (Tandem Load)</span>
                      <span className="bg-slate-950 border-2 border-slate-950 text-orange-500 px-4 py-1.5 rounded-none text-xs font-mono font-black">
                        {materialLoads} {materialLoads === 1 ? 'Load' : 'Loads'}
                      </span>
                    </div>
                    <input
                      id="pricing-loads-slider"
                      type="range"
                      min="1"
                      max="30"
                      step="1"
                      value={materialLoads}
                      onChange={(e) => setMaterialLoads(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-none appearance-none cursor-pointer accent-orange-600"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono font-bold">
                      <span>1 Load (~15-18 Tons)</span>
                      <span>30 Loads (Commercial Subbase)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Local Assurance disclaimer */}
            <div className="bg-slate-50 p-4 rounded-none border-2 border-slate-200 flex items-start space-x-3 text-xs text-slate-700">
              <Info className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <p className="font-semibold leading-relaxed">
                <strong className="text-slate-950 uppercase tracking-wider font-black text-[10px] block mb-0.5">Brooksville Guarantee:</strong> All estimates include transport, mobilization, state-certified operators, and safety inspections. Final binding contracts are subject to geotechnical surveys and county permit pricing.
              </p>
            </div>
          </div>

          {/* Right Panel: Live breakdown and summary (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-10 border-t-2 lg:border-t-0 lg:border-l-2 border-slate-900 flex flex-col justify-between" id="pricing-results-panel">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-orange-500 font-black tracking-widest block uppercase">
                  CALCULATED BALLPARK
                </span>
                <h3 className="text-xl font-display font-black text-white mt-1 uppercase tracking-tight">
                  Scope Estimate Details
                </h3>
              </div>

              {/* Dynamic itemized list */}
              <div className="space-y-3.5 text-xs font-semibold">
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Florida Aggregate & Pipes</span>
                  <span className="font-mono text-white font-bold">${estimateResult.materials.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Operators, Fuel & Rig Ops</span>
                  <span className="font-mono text-white font-bold">${estimateResult.labor.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Mobilization (Hub Yard)</span>
                  <span className="font-mono text-white font-bold">${estimateResult.mobilization.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2.5 text-sm font-black text-orange-500">
                  <span className="uppercase tracking-wider">Estimated Total</span>
                  <span className="font-mono text-2xl text-white font-black">${estimateResult.total.toLocaleString()}</span>
                </div>
              </div>

              {/* Included value tags */}
              <div className="space-y-2 pt-4 border-t border-slate-800 font-semibold text-slate-300">
                <div className="flex items-center space-x-2 text-[11px]">
                  <Check className="h-4 w-4 text-orange-500 stroke-[3]" />
                  <span>Licensed Hernando County signoff</span>
                </div>
                <div className="flex items-center space-x-2 text-[11px]">
                  <Check className="h-4 w-4 text-orange-500 stroke-[3]" />
                  <span>Full utility locating service (811)</span>
                </div>
                <div className="flex items-center space-x-2 text-[11px]">
                  <Check className="h-4 w-4 text-orange-500 stroke-[3]" />
                  <span>On-schedule mobilization guarantee</span>
                </div>
              </div>
            </div>

            {/* Bottom button */}
            <div className="pt-8">
              <button
                id="pricing-lock-estimate-btn"
                onClick={handleLockInEstimate}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-display font-black text-xs tracking-widest uppercase py-4 rounded-none shadow-2xl transition-all duration-200 active:scale-95 flex items-center justify-center space-x-2"
              >
                <Calculator className="h-4.5 w-4.5" />
                <span>LOCK IN & BOOK CONTRACT</span>
              </button>
              <p className="text-[10px] text-slate-500 text-center mt-3 font-mono font-bold">
                NO DEPOSIT REQUIRED. LOCKING COPIES DETAILS TO THE BOOKING FORM.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
