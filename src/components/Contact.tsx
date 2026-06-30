import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Calendar, CheckCircle, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactProps {
  initialService: string;
  initialSize: string;
  initialTotal: string;
  onClearInitial: () => void;
}

export default function Contact({ initialService, initialSize, initialTotal, onClearInitial }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    service: 'Site Development',
    scale: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // If initial details are supplied by Pricing estimate, pre-populate the form!
  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({
        ...prev,
        service: initialService.includes('Material') ? 'Material Sales' : initialService,
        scale: initialSize,
        notes: `Automated Ballpark Estimate: ${initialTotal}. Based on ${initialSize}. Please confirm subgrade requirements and scheduling availability.`,
      }));

      // Scroll to the contact form so the user sees it populated!
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [initialService, initialSize, initialTotal]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTicketId(`LA-${Math.floor(100000 + Math.random() * 900000)}`);
      onClearInitial(); // clear parent's calculation state
    }, 1500);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      address: '',
      service: 'Site Development',
      scale: '',
      notes: '',
    });
    setIsSuccess(false);
    setTicketId('');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-b border-slate-200 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-mono text-orange-600 font-black tracking-widest block uppercase">
            GET ON THE SCHEDULE
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tighter text-slate-950 uppercase">
            Book LA Contractors Today
          </h2>
          <div className="h-1.5 w-20 bg-orange-600 mx-auto" />
          <p className="text-sm sm:text-base text-slate-700 font-medium">
            Let us know what your project needs. Fill out the booking request below to schedule a direct site walk or aggregate material dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left panel: Info cards (5 cols) */}
          <div className="lg:col-span-5 space-y-8" id="contact-info-panel">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-black text-slate-950 uppercase tracking-tight">
                Brooksville Yard Hub
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Our heavy fleet yard is centrally stationed in Hernando County, allowing rapid dispatch to sites across Citrus, Pasco, and Sumter counties.
              </p>
            </div>

            {/* Contact channels list */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 bg-slate-50 p-4 border-2 border-slate-200 rounded-none">
                <MapPin className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                <div>
                  <h4 className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest">Headquarters Yard</h4>
                  <p className="text-sm text-slate-950 mt-1 font-bold">104 Cobb Road, Brooksville, FL 34601</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-slate-50 p-4 border-2 border-slate-200 rounded-none">
                <Phone className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                <div>
                  <h4 className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest">Direct Estimates Line</h4>
                  <a href="tel:3525550199" className="text-sm text-slate-950 hover:text-orange-600 block mt-1 font-black transition-colors">
                    (352) 555-0199
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-slate-50 p-4 border-2 border-slate-200 rounded-none">
                <Mail className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                <div>
                  <h4 className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest">Bid Invitations</h4>
                  <a href="mailto:contract@lacontractors.com" className="text-sm text-slate-950 hover:text-orange-600 block mt-1 font-bold transition-colors">
                    contract@lacontractors.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-slate-50 p-4 border-2 border-slate-200 rounded-none">
                <Clock className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                <div>
                  <h4 className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest">Operating Hours</h4>
                  <p className="text-xs text-slate-950 mt-1 font-bold">Mon - Fri: 7:00 AM - 5:00 PM</p>
                  <p className="text-xs text-slate-600 font-bold">Saturday: 8:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            {/* Trust credentials block */}
            <div className="bg-slate-950 border-2 border-slate-900 p-5 rounded-none space-y-3 text-white">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-5 w-5 text-orange-500 stroke-[2.5]" />
                <span className="text-[10px] font-mono font-black tracking-widest text-white uppercase">
                  Contracting Safeguards
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                LA Contractors holds complete State of Florida utility licenses, general commercial liability insurance, and worker compensation coverages to guarantee absolute job site safety.
              </p>
            </div>
          </div>

          {/* Right panel: Dynamic Form / Success display (7 cols) */}
          <div className="lg:col-span-7 bg-white border-2 border-slate-900 p-6 sm:p-10 rounded-none shadow-2xl" id="contact-form-panel">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-5"
                >
                  <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-display font-black text-slate-950 uppercase tracking-tight">Booking Proposal Form</h3>
                      <p className="text-xs text-slate-500 mt-1 font-semibold">Enter your details to receive a formal contract proposal.</p>
                    </div>
                    {initialService && (
                      <span className="bg-orange-600 border-2 border-orange-600 text-white text-[10px] font-mono px-3 py-1 rounded-none uppercase tracking-widest font-black animate-pulse">
                        Estimate Loaded
                      </span>
                    )}
                  </div>

                  {/* Dual columns for name and email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name-input" className="text-xs font-mono font-black text-slate-700 uppercase tracking-widest">
                        Full Name *
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border-2 border-slate-200 focus:border-slate-950 focus:bg-white rounded-none px-4 py-3 text-sm text-slate-950 font-medium transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email-input" className="text-xs font-mono font-black text-slate-700 uppercase tracking-widest">
                        Email Address *
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border-2 border-slate-200 focus:border-slate-950 focus:bg-white rounded-none px-4 py-3 text-sm text-slate-950 font-medium transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="phone-input" className="text-xs font-mono font-black text-slate-700 uppercase tracking-widest">
                        Phone Number *
                      </label>
                      <input
                        id="phone-input"
                        type="tel"
                        name="phone"
                        required
                        placeholder="(352) 555-0100"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border-2 border-slate-200 focus:border-slate-950 focus:bg-white rounded-none px-4 py-3 text-sm text-slate-950 font-medium transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="company-input" className="text-xs font-mono font-black text-slate-700 uppercase tracking-widest">
                        Company Name (Optional)
                      </label>
                      <input
                        id="company-input"
                        type="text"
                        name="company"
                        placeholder="Mitchell Developments"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border-2 border-slate-200 focus:border-slate-950 focus:bg-white rounded-none px-4 py-3 text-sm text-slate-950 font-medium transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Project Address */}
                  <div className="space-y-1.5">
                    <label htmlFor="address-input" className="text-xs font-mono font-black text-slate-700 uppercase tracking-widest">
                      Site / Delivery Address *
                    </label>
                    <input
                      id="address-input"
                      type="text"
                      name="address"
                      required
                      placeholder="Street, City, FL (e.g., Cobb Road, Brooksville)"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border-2 border-slate-200 focus:border-slate-950 focus:bg-white rounded-none px-4 py-3 text-sm text-slate-950 font-medium transition-all outline-none"
                    />
                  </div>

                  {/* Service type and scale */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="service-select" className="text-xs font-mono font-black text-slate-700 uppercase tracking-widest">
                        Required Service Program
                      </label>
                      <select
                        id="service-select"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border-2 border-slate-200 focus:border-slate-950 focus:bg-white rounded-none px-4 py-3 text-sm text-slate-950 font-medium transition-all outline-none cursor-pointer"
                      >
                        <option>Site Development</option>
                        <option>Pipe Installation</option>
                        <option>Material Sales</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="scale-input" className="text-xs font-mono font-black text-slate-700 uppercase tracking-widest">
                        Project Scope Scale
                      </label>
                      <input
                        id="scale-input"
                        type="text"
                        name="scale"
                        placeholder="e.g. 2 Acres, 150 LF"
                        value={formData.scale}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border-2 border-slate-200 focus:border-slate-950 focus:bg-white rounded-none px-4 py-3 text-sm text-slate-950 font-medium transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Notes and detail descriptions */}
                  <div className="space-y-1.5">
                    <label htmlFor="notes-textarea" className="text-xs font-mono font-black text-slate-700 uppercase tracking-widest">
                      Specific Requirements or Message
                    </label>
                    <textarea
                      id="notes-textarea"
                      name="notes"
                      rows={4}
                      placeholder="Please detail any soil excavation specs, utility piping scopes, or specific aggregate requests..."
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border-2 border-slate-200 focus:border-slate-950 focus:bg-white rounded-none px-4 py-3 text-sm text-slate-950 font-medium transition-all outline-none"
                    />
                  </div>

                  {/* Form Action buttons */}
                  <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-[10px] text-slate-500 max-w-[280px] font-semibold leading-relaxed">
                      By submitting, you agree to allow LA Contractors crew to review your property grading on public records.
                    </p>
                    <button
                      id="submit-proposal-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-orange-600 hover:bg-orange-700 text-white font-display font-black text-xs tracking-widest uppercase px-6 py-4 rounded-none shadow-2xl transition-all duration-200 active:scale-95 disabled:opacity-50 flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>SENDING PROPOSAL...</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT REQUEST</span>
                          <ArrowRight className="h-4 w-4 stroke-[3px]" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-6 flex flex-col items-center"
                  id="contact-success-panel"
                >
                  <div className="bg-orange-600 text-white p-4 rounded-none shadow-2xl">
                    <CheckCircle className="h-10 w-10 stroke-[3]" />
                  </div>

                  <div className="space-y-2 max-w-md">
                    <span className="text-[10px] font-mono text-orange-600 font-black tracking-widest block uppercase">
                      PROPOSAL RECEIVED SUCCESSFULLY
                    </span>
                    <h3 className="text-2xl font-display font-black text-slate-950 uppercase tracking-tight">
                      Thank You, {formData.name}!
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                      We have copy-routed your contract proposal request directly to our Brooksville estimation crew. An engineer will follow up with you within 24 working hours.
                    </p>
                  </div>

                  {/* Receipt code */}
                  <div className="bg-slate-950 border-2 border-slate-900 p-4 rounded-none text-center text-white max-w-sm w-full space-y-2">
                    <div className="text-[10px] font-mono text-slate-400 uppercase font-black tracking-widest">Proposal Reference ID</div>
                    <div className="text-xl font-mono font-black text-orange-500 tracking-wider">
                      {ticketId}
                    </div>
                    <div className="text-[9px] text-slate-500 font-mono font-bold uppercase tracking-widest">
                      State of Florida Dispatch Hub • UTC Timestamped
                    </div>
                  </div>

                  <button
                    id="submit-another-proposal"
                    onClick={handleResetForm}
                    className="bg-slate-900 hover:bg-slate-950 text-slate-200 hover:text-white px-5 py-2.5 rounded-none text-xs font-black tracking-widest uppercase border-2 border-slate-900 transition-all duration-200"
                  >
                    SUBMIT ANOTHER PROPOSAL
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
