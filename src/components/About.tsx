import { useState } from 'react';
import { Users, Shield, Heart, Trophy, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'history' | 'values' | 'community'>('history');

  const tabs = [
    {
      id: 'history' as const,
      label: 'OUR STORY',
      icon: Trophy,
      title: 'Roots in Brooksville, Built on Trust',
      subtitle: 'Serving Hernando County since 2004',
      content: 'Founded as a small family operation, LA Contractors has grown to become Brooksville’s premier choice for site work and utility infrastructure. We started with a single backhoe and a promise: treat every jobsite like it’s in our own backyard. Over two decades later, we have laid hundreds of miles of underground pipe and shaped the ground for local neighborhoods, shopping centers, and parks.',
      bullets: [
        'Over 20 years of active local operation',
        'Built on client referrals and long-term contracts',
        '100% locally owned and operated in Florida'
      ]
    },
    {
      id: 'values' as const,
      label: 'OUR WORKMANSHIP',
      icon: Shield,
      title: 'Precision Grade & Zero Compromise',
      subtitle: 'Where heavy iron meets absolute accuracy',
      content: 'We take pride in our precision. Underground utility work requires rigorous engineering and meticulous execution; we use cutting-edge grade technology and laser leveling systems to make sure every grade is perfect and every pipe runs true. Our team consists of highly certified operators who prioritize safety and durability over shortcuts.',
      bullets: [
        'Rigorous OSHA safety standards on all sites',
        'State-of-the-art GPS grading & pipe-laying lasers',
        'Highly skilled local crew of professional operators'
      ]
    },
    {
      id: 'community' as const,
      label: 'COMMUNITY PILLAR',
      icon: Heart,
      title: 'Generations of Giving Back',
      subtitle: 'Supporting Brooksville beyond the job site',
      content: 'We don’t just construct in Brooksville; we live here, raise our kids here, and invest our profits back into Hernando County. We sponsor local Little League teams, support regional agricultural fairs, and volunteer our heavy equipment and crew for community park restorations. We believe a strong business is a pillar that holds the community high.',
      bullets: [
        'Proud sponsors of Brooksville youth sports',
        'Emergency response support for local flood clearance',
        'Annual apprenticeship program for high school graduates'
      ]
    }
  ];

  const activeTabData = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase & Stats */}
          <div className="lg:col-span-5 space-y-6" id="about-left-col">
            <div className="relative">
              {/* Square borders, solid bold alignment */}
              <div className="absolute -inset-1.5 bg-orange-600 opacity-25" />
              <div className="relative rounded-none overflow-hidden shadow-xl border-2 border-slate-900 bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80"
                  alt="LA Contractors Crew"
                  className="w-full h-80 object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
                {/* Local Trust Badge overlay */}
                <div className="absolute bottom-4 left-4 bg-slate-950 border-l-4 border-orange-600 px-4 py-3 shadow-lg flex items-center space-x-3 rounded-none">
                  <Users className="h-5 w-5 text-orange-500" />
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-orange-500 uppercase tracking-widest">Brooksville Roots</h4>
                    <p className="text-xs text-white font-bold">40+ Local Employees</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat Blocks - Square grid with thick text */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-slate-50 p-4 border-2 border-slate-900 rounded-none">
                <div className="text-3xl font-display font-black text-orange-600">20+</div>
                <div className="text-[10px] text-slate-800 font-mono font-black uppercase mt-1 tracking-widest">Years Active</div>
              </div>
              <div className="bg-slate-50 p-4 border-2 border-slate-900 rounded-none">
                <div className="text-3xl font-display font-black text-orange-600">450+</div>
                <div className="text-[10px] text-slate-800 font-mono font-black uppercase mt-1 tracking-widest">Jobs Done</div>
              </div>
              <div className="bg-slate-50 p-4 border-2 border-slate-900 rounded-none">
                <div className="text-3xl font-display font-black text-orange-600">100%</div>
                <div className="text-[10px] text-slate-800 font-mono font-black uppercase mt-1 tracking-widest">On-Spec</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Interactive Tab Switcher */}
          <div className="lg:col-span-7 space-y-6" id="about-right-col">
            <div className="space-y-3">
              <span className="text-xs font-mono text-orange-600 font-black uppercase tracking-widest block">
                MEET LA CONTRACTORS
              </span>
              <h2 className="text-4xl sm:text-5xl font-display font-black text-slate-950 tracking-tighter leading-tight uppercase">
                Our Foundation is the Brooksville Community
              </h2>
              <p className="text-base text-slate-700 font-medium leading-relaxed max-w-2xl">
                We believe a contract is more than a handshake—it is a community obligation. We handle heavy site preparations, laying high-integrity storm and sanitary lines, with clear transparency and local goodwill.
              </p>
            </div>

            {/* Tab Nav Buttons - Solid blocks */}
            <div className="flex flex-wrap gap-2 border-b-2 border-slate-200 pb-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    id={`about-tab-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-none text-xs font-black tracking-widest uppercase transition-all duration-200 border-2 ${
                      activeTab === tab.id
                        ? 'bg-orange-600 border-orange-600 text-white shadow-md'
                        : 'text-slate-700 bg-white border-slate-300 hover:text-slate-950 hover:bg-slate-50 hover:border-slate-400'
                    }`}
                  >
                    <Icon className="h-4 w-4 stroke-[2.5]" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content Display - Solid flat card */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-50 p-6 rounded-none border-2 border-slate-900 space-y-4"
              id="about-tab-content-panel"
            >
              <div>
                <span className="text-[10px] font-mono text-orange-600 font-black tracking-widest uppercase block">
                  {activeTabData.subtitle}
                </span>
                <h3 className="text-2xl font-display font-black text-slate-950 mt-1 uppercase tracking-tight">
                  {activeTabData.title}
                </h3>
              </div>
              
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                {activeTabData.content}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 pt-2">
                {activeTabData.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start space-x-2.5 text-xs text-slate-800 font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
