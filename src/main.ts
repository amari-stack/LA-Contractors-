import './index.css';

// --- DATA STRUCTURES ---

const aboutTabsData = {
  history: {
    subtitle: 'Serving Hernando County since 2004',
    title: 'Roots in Brooksville, Built on Trust',
    desc: 'Founded as a small family operation, LA Contractors has grown to become Brooksville’s premier choice for site work and utility infrastructure. We started with a single backhoe and a promise: treat every jobsite like it’s in our own backyard. Over two decades later, we have laid hundreds of miles of underground pipe and shaped the ground for local neighborhoods, shopping centers, and parks.',
    bullets: [
      'Over 20 years of active local operation',
      'Built on client referrals and long-term contracts',
      '100% locally owned and operated in Florida'
    ]
  },
  values: {
    subtitle: 'Where heavy iron meets absolute accuracy',
    title: 'Precision Grade & Zero Compromise',
    desc: 'We take pride in our precision. Underground utility work requires rigorous engineering and meticulous execution; we use cutting-edge grade technology and laser leveling systems to make sure every grade is perfect and every pipe runs true. Our team consists of highly certified operators who prioritize safety and durability over shortcuts.',
    bullets: [
      'Rigorous OSHA safety standards on all sites',
      'State-of-the-art GPS grading & pipe-laying lasers',
      'Highly skilled local crew of professional operators'
    ]
  },
  community: {
    subtitle: 'Supporting Brooksville beyond the job site',
    title: 'Generations of Giving Back',
    desc: 'We don’t just construct in Brooksville; we live here, raise our kids here, and invest our profits back into Hernando County. We sponsor local Little League teams, support regional agricultural fairs, and volunteer our heavy equipment and crew for community park restorations. We believe a strong business is a pillar that holds the community high.',
    bullets: [
      'Proud sponsors of Brooksville youth sports',
      'Emergency response support for local flood clearance',
      'Annual apprenticeship program for high school graduates'
    ]
  }
};

const servicesDetailsData = {
  'site-dev': {
    title: 'Site Development',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    desc: 'Our Site Development team possesses the heavy horsepower and engineering precision required to turn raw Florida woodland into build-ready foundations. We handle tree removal, structural leveling, lime rock base layout, and full retention pond excavation. Operating a modern fleet equipped with automated grade controls, we guarantee the highest precision for drainage profiles and load-bearing requirements.',
    price: '$5,000 - $150,000+',
    specs: [
      'Site Clearing & Grubbing',
      'Erosion Control & Silt Fencing',
      'Mass Earthwork & Rough Grading',
      'Structural Pad Stabilization',
      'Retention Basin Digging'
    ]
  },
  'pipe-install': {
    title: 'Pipe Installation',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80',
    desc: 'Underground utility installation is our signature craft. We lay high-diameter concrete piping (RCP), PVC sewer installations, ductile iron water lines, and sanitary tie-ins. Our experienced pipe crew uses state-of-the-art pipe lasers and trench boxes to protect operators and ensure exact fall-rates. We have a solid record of compliance with Hernando County codes and Florida environmental mandates.',
    price: '$8,000 - $200,000+',
    specs: [
      'Stormwater RCP Installation',
      'Gravity Sanitary Sewers',
      'Underground Fire Service Mains',
      'Force Mains & Lift Stations',
      'Trench Safety & De-watering'
    ]
  },
  'material-sales': {
    title: 'Material Sales',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80',
    desc: 'Need reliable heavy supplies delivered on-schedule? We sell and deliver premium Florida structural materials directly to your site or home. Whether you need aggregate for a driveway, clean fill-dirt for elevation leveling, or local lime rock for subgrade stabilization, we provide flexible truckloads (single axle, tandem, or semi-dumps) with prompt dispatch and clear volume billing.',
    price: '$350 - $4,500+ (per truckload load)',
    specs: [
      'Florida DOT Approved Lime Rock',
      '#57 Crushed Concrete / Granite',
      'Clean Structural Fill-Dirt',
      'Screened Topsoil & Red Clay',
      'Tailgate Spreading Available'
    ]
  }
};

const materialPrices = {
  limerock: { name: 'DOT Lime Rock', perLoad: 380 },
  crushed: { name: '#57 Crushed Concrete', perLoad: 450 },
  filldirt: { name: 'Structural Fill-Dirt', perLoad: 280 },
  topsoil: { name: 'Screened Gardening Topsoil', perLoad: 350 },
};

const testimonialsData = [
  {
    name: 'Darrell Vance',
    role: 'Project Manager • Vance Commercial Properties',
    quote: 'LA Contractors is easily the most reliable site preparation crew in Hernando County. Their operator grade accuracy is unmatched. They excavated our foundation pads ahead of schedule and the civil engineers signed off with zero adjustments. A true Brooksville pillar.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
  },
  {
    name: 'Sarah Mitchell',
    role: 'County Engineer Coordinator • Hernando Public Works (Consultant)',
    quote: 'Laying large diameter utility drainage near commercial corridors is highly risk-sensitive. LA Contractors followed state utility safety standards flawlessly, managed the trench boxes with care, and finished the pipe run with laser precision. Excellent contractors to work with.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80'
  },
  {
    name: 'Gene Hollister',
    role: 'Owner & President • Hollister Agricultural Feed',
    quote: 'We ordered over 80 tons of DOT-grade lime rock for heavy tractor lanes. The team dispatched drivers who tailgate-spread it beautifully. They saved our operators hours of blade work. Great price, friendly local dispatch, honest company.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80'
  }
];


// --- STATE VARIABLE HOLDERS ---

let currentCalcService: 'site' | 'pipe' | 'materials' = 'site';
let activeTestimonialIndex = 0;


// --- DOM INTERACTION ROUTINES ---

document.addEventListener('DOMContentLoaded', () => {

  // Initialize copyrights year dynamically
  const copyrightYear = document.getElementById('copyright-year');
  if (copyrightYear) {
    copyrightYear.innerText = new Date().getFullYear().toString();
  }

  // Sticky Header Styling on Scroll
  const appHeader = document.getElementById('app-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      appHeader?.classList.add('shadow-xl', 'bg-slate-950/95', 'h-18');
      appHeader?.classList.remove('h-20');
    } else {
      appHeader?.classList.remove('shadow-xl', 'bg-slate-950/95', 'h-18');
      appHeader?.classList.add('h-20');
    }
  });

  // Mobile Menu Toggle logic
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        hamburgerIcon?.classList.add('hidden');
        closeIcon?.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        hamburgerIcon?.classList.remove('hidden');
        closeIcon?.classList.add('hidden');
      }
    });

    // Close mobile menu on clicking links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        hamburgerIcon?.classList.remove('hidden');
        closeIcon?.classList.add('hidden');
      });
    });
  }


  // ABOUT SECTION TAB INTERACTION
  const tabButtons = document.querySelectorAll('.about-tab-btn');
  const tabSubtitle = document.getElementById('tab-subtitle');
  const tabTitle = document.getElementById('tab-title');
  const tabDesc = document.getElementById('tab-desc');
  const tabBullets = document.getElementById('tab-bullets');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedTab = btn.getAttribute('data-tab') as 'history' | 'values' | 'community';
      if (!selectedTab || !aboutTabsData[selectedTab]) return;

      // Update button visual styles
      tabButtons.forEach(b => {
        b.classList.remove('bg-orange-600', 'border-orange-600', 'text-white', 'shadow-md');
        b.classList.add('text-slate-700', 'bg-white', 'border-slate-300', 'hover:text-slate-950', 'hover:bg-slate-50');
      });
      btn.classList.add('bg-orange-600', 'border-orange-600', 'text-white', 'shadow-md');
      btn.classList.remove('text-slate-700', 'bg-white', 'border-slate-300');

      // Update contents
      const data = aboutTabsData[selectedTab];
      if (tabSubtitle) tabSubtitle.innerText = data.subtitle;
      if (tabTitle) tabTitle.innerText = data.title;
      if (tabDesc) tabDesc.innerText = data.desc;

      if (tabBullets) {
        tabBullets.innerHTML = '';
        data.bullets.forEach(bullet => {
          const li = document.createElement('li');
          li.className = 'flex items-start space-x-2.5 text-xs text-slate-800 font-semibold';
          li.innerHTML = `<svg class="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg><span>${bullet}</span>`;
          tabBullets.appendChild(li);
        });
      }
    });
  });


  // SERVICES DETAILS MODAL INTERACTION
  const serviceDetailsModal = document.getElementById('service-details-modal');
  const closeServiceModal = document.getElementById('close-service-modal');
  const modalImg = document.getElementById('modal-img') as HTMLImageElement;
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalPrice = document.getElementById('modal-price');
  const modalSpecs = document.getElementById('modal-specs');
  const modalBookBtn = document.getElementById('modal-book-btn') as HTMLButtonElement;

  document.querySelectorAll('.service-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceId = btn.getAttribute('data-service') as 'site-dev' | 'pipe-install' | 'material-sales';
      if (!serviceId || !servicesDetailsData[serviceId]) return;

      const data = servicesDetailsData[serviceId];
      if (modalImg) modalImg.src = data.image;
      if (modalTitle) modalTitle.innerText = data.title;
      if (modalDesc) modalDesc.innerText = data.desc;
      if (modalPrice) modalPrice.innerText = data.price;
      if (modalBookBtn) modalBookBtn.setAttribute('data-service-name', data.title);

      if (modalSpecs) {
        modalSpecs.innerHTML = '';
        data.specs.forEach(spec => {
          const li = document.createElement('li');
          li.className = 'flex items-start space-x-2 text-xs text-slate-300 font-semibold';
          li.innerHTML = `<svg class="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg><span>${spec}</span>`;
          modalSpecs.appendChild(li);
        });
      }

      serviceDetailsModal?.classList.remove('hidden');
    });
  });

  const closeModalRoutine = () => {
    serviceDetailsModal?.classList.add('hidden');
  };

  closeServiceModal?.addEventListener('click', closeModalRoutine);
  serviceDetailsModal?.addEventListener('click', (e) => {
    if (e.target === serviceDetailsModal) {
      closeModalRoutine();
    }
  });

  // Handle ESC key to close modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModalRoutine();
    }
  });


  // BOOK NOW REDIRECT & PRE-FILL
  const serviceSelect = document.getElementById('service-select') as HTMLSelectElement;
  const scaleInput = document.getElementById('scale-input') as HTMLInputElement;
  const notesTextarea = document.getElementById('notes-textarea') as HTMLTextAreaElement;
  const estimateBadge = document.getElementById('estimate-loaded-badge');

  const routeBookingForm = (serviceName: string, scaleText: string = '', noteText: string = '') => {
    if (serviceSelect) {
      // Prefill values
      if (serviceName.includes('Material')) {
        serviceSelect.value = 'Material Sales';
      } else if (serviceName.includes('Pipe')) {
        serviceSelect.value = 'Pipe Installation';
      } else {
        serviceSelect.value = 'Site Development';
      }
    }

    if (scaleInput && scaleText) {
      scaleInput.value = scaleText;
    }

    if (notesTextarea && noteText) {
      notesTextarea.value = noteText;
    }

    if (estimateBadge) {
      if (noteText) {
        estimateBadge.classList.remove('hidden');
      } else {
        estimateBadge.classList.add('hidden');
      }
    }

    // Scroll to contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  document.querySelectorAll('.service-book-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceName = btn.getAttribute('data-service-name') || '';
      routeBookingForm(serviceName, 'Standard Contract Run', '');
    });
  });

  modalBookBtn?.addEventListener('click', () => {
    const serviceName = modalBookBtn.getAttribute('data-service-name') || '';
    routeBookingForm(serviceName, 'Standard Contract Run', '');
    closeModalRoutine();
  });


  // --- ESTIMATOR COST CALCULATOR ---

  const calcTabs = document.querySelectorAll('.calc-service-tab');
  const siteInputs = document.getElementById('calc-inputs-site');
  const pipeInputs = document.getElementById('calc-inputs-pipe');
  const materialsInputs = document.getElementById('calc-inputs-materials');

  const siteAcreage = document.getElementById('site-acreage') as HTMLInputElement;
  const siteAcreageVal = document.getElementById('site-acreage-val');
  const pipeLFInput = document.getElementById('pipe-linear-feet') as HTMLInputElement;
  const pipeLFVal = document.getElementById('pipe-lf-val');
  const materialTypeSelect = document.getElementById('material-type') as HTMLSelectElement;
  const materialLoadsInput = document.getElementById('material-loads') as HTMLInputElement;
  const materialLoadsVal = document.getElementById('material-loads-val');

  const costMaterials = document.getElementById('calc-cost-materials');
  const costLabor = document.getElementById('calc-cost-labor');
  const costMobilization = document.getElementById('calc-cost-mobilization');
  const costTotal = document.getElementById('calc-cost-total');

  let computedTotalString = '$7,650';
  let computedScopeString = '1 Acre(s) Clearing & Grading';

  const runEstimateCalculations = () => {
    let materials = 0;
    let labor = 0;
    let mobilization = 250;

    if (currentCalcService === 'site') {
      const acreage = Number(siteAcreage?.value || 1);
      if (siteAcreageVal) siteAcreageVal.innerText = `${acreage} Acre(s)`;

      materials = Math.round(acreage * 2800);
      labor = Math.round(acreage * 4500);
      mobilization = acreage > 3 ? 750 : 350;

      computedScopeString = `${acreage} Acre(s) Clearing & Grading`;
    } else if (currentCalcService === 'pipe') {
      const lf = Number(pipeLFInput?.value || 100);
      if (pipeLFVal) pipeLFVal.innerText = `${lf} LF`;

      materials = Math.round(lf * 38);
      labor = Math.round(lf * 52);
      mobilization = lf > 200 ? 600 : 400;

      computedScopeString = `${lf} Linear Feet of Utility Piping`;
    } else if (currentCalcService === 'materials') {
      const type = (materialTypeSelect?.value || 'limerock') as keyof typeof materialPrices;
      const loads = Number(materialLoadsInput?.value || 5);
      if (materialLoadsVal) materialLoadsVal.innerText = `${loads} Loads`;

      const unitPrice = materialPrices[type]?.perLoad || 380;
      materials = unitPrice * loads;
      labor = 80 * loads;
      mobilization = 150;

      computedScopeString = `${loads} Truckloads of ${materialPrices[type]?.name || 'DOT Lime Rock'}`;
    }

    const grandTotal = materials + labor + mobilization;
    computedTotalString = `$${grandTotal.toLocaleString()}`;

    // Update UI elements
    if (costMaterials) costMaterials.innerText = `$${materials.toLocaleString()}`;
    if (costLabor) costLabor.innerText = `$${labor.toLocaleString()}`;
    if (costMobilization) costMobilization.innerText = `$${mobilization.toLocaleString()}`;
    if (costTotal) costTotal.innerText = computedTotalString;
  };

  calcTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetService = tab.getAttribute('data-calc') as 'site' | 'pipe' | 'materials';
      if (!targetService) return;

      currentCalcService = targetService;

      // Toggle tab styling
      calcTabs.forEach(t => {
        t.classList.remove('bg-slate-950', 'border-slate-950', 'text-white');
        t.classList.add('bg-white', 'border-slate-300', 'text-slate-700', 'hover:bg-slate-50');
      });
      tab.classList.add('bg-slate-950', 'border-slate-950', 'text-white');
      tab.classList.remove('bg-white', 'border-slate-300', 'text-slate-700');

      // Toggle input panels
      siteInputs?.classList.add('hidden');
      pipeInputs?.classList.add('hidden');
      materialsInputs?.classList.add('hidden');

      if (targetService === 'site') siteInputs?.classList.remove('hidden');
      if (targetService === 'pipe') pipeInputs?.classList.remove('hidden');
      if (targetService === 'materials') materialsInputs?.classList.remove('hidden');

      runEstimateCalculations();
    });
  });

  // Attach event listeners to all estimator controls
  siteAcreage?.addEventListener('input', runEstimateCalculations);
  pipeLFInput?.addEventListener('input', runEstimateCalculations);
  materialTypeSelect?.addEventListener('change', runEstimateCalculations);
  materialLoadsInput?.addEventListener('input', runEstimateCalculations);

  // Cost lock-in book proposal button
  const lockInBtn = document.getElementById('lock-in-estimate-btn');
  lockInBtn?.addEventListener('click', () => {
    let serviceLabel = 'Site Development';
    if (currentCalcService === 'pipe') serviceLabel = 'Pipe Installation';
    if (currentCalcService === 'materials') serviceLabel = 'Material Sales';

    const notesText = `Automated Ballpark Estimate: ${computedTotalString}. Based on ${computedScopeString}. Please confirm subgrade requirements and scheduling availability.`;
    routeBookingForm(serviceLabel, computedScopeString, notesText);
  });


  // --- PORTFOLIO CATEGORY FILTERING ---

  const portfolioFilterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  portfolioFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedFilter = btn.getAttribute('data-filter') || 'All';

      // Toggle button active styling
      portfolioFilterBtns.forEach(b => {
        b.classList.remove('bg-orange-600', 'border-orange-600', 'text-white', 'shadow-md');
        b.classList.add('bg-slate-900', 'text-slate-400', 'border-slate-800');
      });
      btn.classList.add('bg-orange-600', 'border-orange-600', 'text-white', 'shadow-md');
      btn.classList.remove('bg-slate-900', 'text-slate-400', 'border-slate-800');

      // Show/Hide cards
      portfolioCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (selectedFilter === 'All' || category === selectedFilter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });


  // --- TESTIMONIALS SLIDER ---

  const testimonialQuote = document.getElementById('testimonial-quote');
  const testimonialName = document.getElementById('testimonial-name');
  const testimonialRole = document.getElementById('testimonial-role');
  const testimonialAvatar = document.getElementById('testimonial-avatar') as HTMLImageElement;
  const prevTestimonialBtn = document.getElementById('testimonial-prev-btn');
  const nextTestimonialBtn = document.getElementById('testimonial-next-btn');
  const dots = document.querySelectorAll('.testimonial-dot');

  const displayTestimonial = (idx: number) => {
    activeTestimonialIndex = idx;
    const item = testimonialsData[idx];

    // Fade effect simulation via simple transition
    if (testimonialQuote) {
      testimonialQuote.style.opacity = '0';
      setTimeout(() => {
        testimonialQuote.innerText = `"${item.quote}"`;
        testimonialQuote.style.opacity = '1';
      }, 150);
    }

    if (testimonialName) testimonialName.innerText = item.name;
    if (testimonialRole) testimonialRole.innerText = item.role;
    if (testimonialAvatar) testimonialAvatar.src = item.avatar;

    // Dot highlighted state
    dots.forEach((dot, dIdx) => {
      if (dIdx === idx) {
        dot.classList.add('bg-orange-600');
        dot.classList.remove('bg-slate-800', 'hover:bg-slate-700');
      } else {
        dot.classList.remove('bg-orange-600');
        dot.classList.add('bg-slate-800', 'hover:bg-slate-700');
      }
    });
  };

  prevTestimonialBtn?.addEventListener('click', () => {
    let nextIdx = activeTestimonialIndex - 1;
    if (nextIdx < 0) nextIdx = testimonialsData.length - 1;
    displayTestimonial(nextIdx);
  });

  nextTestimonialBtn?.addEventListener('click', () => {
    let nextIdx = activeTestimonialIndex + 1;
    if (nextIdx >= testimonialsData.length) nextIdx = 0;
    displayTestimonial(nextIdx);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = Number(dot.getAttribute('data-idx') || 0);
      displayTestimonial(idx);
    });
  });


  // --- BOOKING FORM SUBMISSION ---

  const bookingForm = document.getElementById('booking-form') as HTMLFormElement;
  const successPanel = document.getElementById('contact-success-panel');
  const successClientName = document.getElementById('success-client-name');
  const successTicketId = document.getElementById('success-ticket-id');
  const submitProposalBtn = document.getElementById('submit-proposal-btn') as HTMLButtonElement;

  bookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameVal = (document.getElementById('name-input') as HTMLInputElement)?.value || 'Partner';

    // Show sending proposal loading state
    if (submitProposalBtn) {
      submitProposalBtn.disabled = true;
      submitProposalBtn.innerHTML = `
        <svg class="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
        <span>SENDING PROPOSAL...</span>
      `;
    }

    // Simulate direct secure DB route write
    setTimeout(() => {
      if (successClientName) successClientName.innerText = `Thank You, ${nameVal}!`;
      
      const randomTicketId = `LA-${Math.floor(100000 + Math.random() * 900000)}`;
      if (successTicketId) successTicketId.innerText = randomTicketId;

      bookingForm.classList.add('hidden');
      successPanel?.classList.remove('hidden');

      // Scroll to contact form header
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1200);
  });

  // Submit another proposal reset button
  const submitAnotherBtn = document.getElementById('submit-another-proposal');
  submitAnotherBtn?.addEventListener('click', () => {
    bookingForm.reset();
    if (submitProposalBtn) {
      submitProposalBtn.disabled = false;
      submitProposalBtn.innerHTML = `
        <span>SUBMIT REQUEST</span>
        <svg class="h-4 w-4 stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      `;
    }

    if (estimateBadge) estimateBadge.classList.add('hidden');

    successPanel?.classList.add('hidden');
    bookingForm.classList.remove('hidden');

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });


  // --- BACK TO TOP BUTTON ---

  const backToTopBtn = document.getElementById('footer-back-to-top');
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

});
