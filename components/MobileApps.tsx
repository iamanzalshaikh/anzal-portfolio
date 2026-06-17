"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Smartphone, ChevronLeft, ChevronRight, X, Sparkles, 
  Layers, Zap, CheckCircle2, ShieldCheck, Play 
} from "lucide-react";

interface MobileProject {
  title: string;
  platform: string;
  description: string;
  tags: string[];
  features: string[];
  images: string[];
  accentColor: string;
}

const mobileProjects: MobileProject[] = [
  {
    title: 'AGQ - Grievance Mobile Application',
    platform: 'Cross-Platform React Native',
    description: 'A production-ready complaint resolution and grievance monitoring ecosystem. Facilitates citizens, officers, and administrators with secure multi-role workflows and queue-driven automated updates.',
    tags: ['React Native', 'Node.js', 'Express', 'MongoDB', 'BullMQ', 'Redis'],
    features: [
      'Role-Based Multi-Role Complaint Lifecycle',
      'Asynchronous Worker Pools powered by Redis & BullMQ',
      'Live Event Updates via Socket.IO connections',
      'Advanced Spatial Search and Location Tagging'
    ],
    images: [
      "/projects/agq/agq_1.png",
      "/projects/agq/agq_2.png",
      "/projects/agq/agq_3.png",
      "/projects/agq/agq_4.png",
      "/projects/agq/agq_5.png",
      "/projects/agq/agq_6.png",
    ],
    accentColor: "from-cyan-500 to-blue-600"
  },
  {
    title: 'Nailify - Beauty Booking Mobile Application',
    platform: 'iOS & Android Hybrid App',
    description: 'An elegant real-time beauty services marketplace booking app. Connects customers directly to expert beauty service providers with integrated schedule calendars, background operations, and push notifications.',
    tags: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Redis', 'JWT Auth'],
    features: [
      'Real-Time Booking Calendars & Resilient Queue System',
      'Integrated Secure Authentication & Token-based Session Management',
      'Background Push Notifications Engine',
      'Interactive Service Map and Provider Spotlights'
    ],
    images: [
      "/projects/nailify/n_1.png",
      "/projects/nailify/n_2.png",
      "/projects/nailify/n_3.png",
      "/projects/nailify/n_4.png",
      "/projects/nailify/n_5.png",
      "/projects/nailify/n_6.png",
      "/projects/nailify/n_7.png",
      "/projects/nailify/n_8.png",
    ],
    accentColor: "from-pink-500 to-purple-600"
  },
  {
    title: 'HerRidez - Safe Mobility Solution',
    platform: 'Safety-First Mobile Platform',
    description: 'A secure, dedicated ride-tracking platform optimized for women’s safety. Employs precision GPS telemetry, an instant SOS safety layer, and a collaborative community event map to enable safe traveling.',
    tags: ['React Native', 'Node.js', 'Socket.io', 'GPS Telemetry', 'Redis', 'Express'],
    features: [
      'Precision Live GPS Telemetry and Route Synchronization',
      'Instant-Response SOS Panic Button & Safety Escalations',
      'Collaborative Local Social Circle Event Maps',
      'High-Speed Websocket Sessions for Real-Time Status tracking'
    ],
    images: [
      "/projects/herridez/hr_1.jpeg",
      "/projects/herridez/hr_2.jpeg",
      "/projects/herridez/hr_3.jpeg",
      "/projects/herridez/hr_4.jpeg",
      "/projects/herridez/hr_5.jpeg",
      "/projects/herridez/hr_6.jpeg",
      "/projects/herridez/hr_7.jpeg",
      "/projects/herridez/hr_8.jpeg",
      "/projects/herridez/hr_9.jpeg",
    ],
    accentColor: "from-emerald-500 to-teal-600"
  },
  {
    title: 'UTAP - Live Streaming Platform',
    platform: 'Real-Time Streaming App',
    description: 'A high-performance real-time mobile live streaming platform. Enables content creators to broadcast streams, build communities, manage saved libraries, and monetize their channels with professional account tiers.',
    tags: ['React Native', 'WebRTC', 'Node.js', 'Socket.IO', 'Express', 'MongoDB'],
    features: [
      'Real-Time Live Video Broadcasts & High-Fidelity Streaming',
      'Interactive Live Chat & Viewer Engagement Controls',
      'Saved Content Libraries & Following Streams Feed',
      'Professional Profile Dashboards with Monetization Features'
    ],
    images: [
      "/projects/utap/utap_1.png",
      "/projects/utap/utap_2.png",
      "/projects/utap/utap_3.png",
      "/projects/utap/utap_4.png",
      "/projects/utap/utap_5.png",
    ],
    accentColor: "from-indigo-500 to-purple-600"
  },
  {
    title: 'QBite (Customer) - Food Delivery Ecosystem',
    platform: 'Cross-Platform React Native',
    description: 'A premium, user-centric food ordering and delivery marketplace app. Features intuitive restaurant menus, real-time item customization, seamless coupon application, stateful checkout, and sub-second live order tracking.',
    tags: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Leaflet Map'],
    features: [
      'Interactive Restaurant Menus & Category Filters',
      'Advanced Item Customizations & Add-on Selection',
      'Coupons Engine with instant discount calculation',
      'Sub-second Live Order Tracking & Route Telemetry'
    ],
    images: [
      "/projects/qbite/qbite_customer_1.jpeg",
      "/projects/qbite/qbite_customer_2.jpeg",
      "/projects/qbite/qbite_customer_3.jpeg",
      "/projects/qbite/qbite_customer_4.jpeg",
      "/projects/qbite/qbite_customer_5.jpeg",
      "/projects/qbite/qbite_customer_6.jpeg",
      "/projects/qbite/qbite_customer_7.jpeg"
    ],
    accentColor: "from-orange-500 to-amber-600"
  },
  {
    title: 'QBite (Rider) - Logistics & Delivery Agent',
    platform: 'Real-Time Delivery Client',
    description: 'A logistics and order delivery routing application for delivery partners. Equipped with active-duty status toggles, persistent notifications, queue-based job notifications, and turn-by-turn map telemetry.',
    tags: ['React Native', 'Node.js', 'Socket.IO', 'Express', 'Google Maps API', 'Background Geolocation'],
    features: [
      'Live Earnings & Completed Deliveries Dashboard',
      'Instant Order Accept/Reject Queue Mechanism',
      'Turn-by-Turn Map Navigation & Route Synchronization',
      'Real-Time Background Geolocation Tracking & Status Milestones'
    ],
    images: [
      "/projects/qbite/qbite_rider_1.jpeg",
      "/projects/qbite/qbite_rider_2.jpeg",
      "/projects/qbite/qbite_rider_3.jpeg"
    ],
    accentColor: "from-green-500 to-emerald-600"
  }
];

const MobileApps = () => {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const activeProject = mobileProjects[activeProjectIdx];

  // Reset screenshot index when active app changes
  useEffect(() => {
    setActiveImgIdx(0);
  }, [activeProjectIdx]);

  const handlePrevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
  };

  const handleNextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev + 1) % activeProject.images.length);
  };

  return (
    <section className="py-24 relative max-w-7xl mx-auto px-6 lg:px-8 bg-background overflow-hidden min-h-screen">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Header Section */}
      <div className="mb-16 md:mb-24 text-left max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase mb-4"
        >
          <span className="w-8 h-[2px] bg-primary"></span>
          Smartphone Portfolios
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
        >
          Mobile Applications
        </motion.h1>
        
        <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
          Stunning hybrid and cross-platform native smartphone ecosystems built with resilient architectures, sub-second socket telemetry, and production-grade auth systems.
        </p>
      </div>

      {/* Project Quick Tab Toggles */}
      <div className="flex flex-wrap gap-3 mb-12 relative z-10">
        {mobileProjects.map((proj, idx) => (
          <button
            key={proj.title}
            onClick={() => setActiveProjectIdx(idx)}
            className={`px-5 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
              activeProjectIdx === idx 
                ? "bg-primary text-background-dark border-primary shadow-glow scale-[1.03]" 
                : "bg-surface-dark/50 text-slate-400 border-slate-800/80 hover:text-white hover:border-slate-700"
            }`}
          >
            {proj.title.split(" - ")[0]}
          </button>
        ))}
      </div>

      {/* Split Interactive Mobile Deck */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Smartphone Frame Column */}
        <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
          <motion.div
            key={activeProjectIdx}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="relative"
          >
            {/* Phone Shadow Glow */}
            <div className={`absolute -inset-4 rounded-[48px] bg-gradient-to-tr ${activeProject.accentColor} opacity-15 blur-2xl -z-10`} />

            {/* Premium iPhone Frame */}
            <div className="relative w-[280px] sm:w-[310px] aspect-[9/19] rounded-[44px] border-[10px] border-slate-800 bg-black shadow-2xl p-2.5 overflow-hidden flex flex-col group/phone">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-full z-40 border border-slate-800/50 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800 ml-auto mr-4" />
              </div>

              {/* Status Bar */}
              <div className="h-6 w-full flex justify-between items-center px-6 text-[10px] font-bold text-white/60 font-mono z-30 select-none">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <span className="material-icons text-[10px]">wifi</span>
                  <span className="material-icons text-[10px]">signal_cellular_alt</span>
                  <span className="material-icons text-[10px]">battery_std</span>
                </div>
              </div>

              {/* Inner Smartphone Screen */}
              <div 
                className="relative flex-grow rounded-[30px] overflow-hidden bg-slate-950 cursor-zoom-in group-hover/phone:scale-[1.005] transition-transform duration-500"
                onClick={() => setModalOpen(true)}
              >
                {/* Carousel of Screen Images */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImgIdx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={activeProject.images[activeImgIdx]}
                      alt={`${activeProject.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 280px, 310px"
                      priority
                      className="object-contain w-full h-full"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left/Right Inner Screen Buttons */}
                <button
                  onClick={handlePrevImg}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/phone:opacity-100 transition-opacity z-20 hover:bg-black/80"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextImg}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/phone:opacity-100 transition-opacity z-20 hover:bg-black/80"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Zoom Hover Badge */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/phone:opacity-100 transition-opacity flex items-center justify-center z-10 pointer-events-none">
                  <span className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-sm text-[10px] font-bold tracking-widest text-primary border border-primary/20 uppercase flex items-center gap-1 shadow-md">
                    Expand Screen <Sparkles className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Bottom Dot indicators and Home Bar */}
              <div className="h-8 w-full flex flex-col justify-end items-center pb-2 z-30 select-none">
                <div className="flex gap-1.5 mb-2">
                  {activeProject.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setActiveImgIdx(i); }}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        i === activeImgIdx ? 'bg-primary w-3.5' : 'bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
                <div className="w-24 h-1 bg-white/40 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Presentation Column */}
        <div className="lg:col-span-7 space-y-8 text-left order-1 lg:order-2">
          <motion.div
            key={activeProjectIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className={`px-3 py-1 text-[10px] font-bold rounded uppercase tracking-wider bg-gradient-to-r ${activeProject.accentColor} text-background-dark font-black shadow-sm`}>
                {activeProject.platform}
              </span>
              <span className="px-2.5 py-1 text-[10px] font-bold rounded uppercase tracking-widest bg-slate-800/80 text-primary border border-primary/20">
                PRO APPS
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              {activeProject.title}
            </h2>

            {/* Description */}
            <p className="text-base text-slate-400 font-light leading-relaxed">
              {activeProject.description}
            </p>

            {/* Tech Badges */}
            <div className="space-y-3">
              <h3 className="text-xs font-black uppercase text-slate-500 tracking-wider">Engineered Stacks</h3>
              <div className="flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[9px] px-2 py-1 bg-background-dark/80 text-slate-300 rounded border border-slate-800 font-bold uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features Bullet Grid */}
            <div className="space-y-4 pt-4 border-t border-slate-800/60">
              <h3 className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-primary" /> Key Structural Milestones
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeProject.features.map((feature, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-dark/30 border border-slate-800/50 hover:border-slate-800 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-medium text-slate-300 leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA action button */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button 
                onClick={() => setModalOpen(true)}
                className="group relative px-6 py-3.5 bg-primary text-background-dark font-black text-xs uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-all text-center flex items-center justify-center gap-2 shadow-glow"
              >
                Launch Mockup Showcase <Play className="w-3.5 h-3.5 fill-current" />
              </button>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Screen Modals for High-Resolution Screenshot Slideshow */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={() => setModalOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors z-[110]"
              onClick={() => setModalOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            {activeProject.images.length > 1 && (
              <>
                <button 
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors z-[110] md:left-6"
                  onClick={(e) => { e.stopPropagation(); setActiveImgIdx((activeImgIdx - 1 + activeProject.images.length) % activeProject.images.length); }}
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors z-[110] md:right-6"
                  onClick={(e) => { e.stopPropagation(); setActiveImgIdx((activeImgIdx + 1) % activeProject.images.length); }}
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </>
            )}

            {/* Image Slide */}
            <motion.div 
              className="relative w-[90vw] h-[85vh] max-w-[500px] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImgIdx}
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  transition={{ type: "spring", damping: 25, stiffness: 220 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={activeProject.images[activeImgIdx]}
                    alt="Smartphone screenshot full view"
                    fill
                    priority
                    className="object-contain rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Bottom Dot indicators */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                {activeProject.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImgIdx(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === activeImgIdx ? 'bg-primary w-8' : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MobileApps;
