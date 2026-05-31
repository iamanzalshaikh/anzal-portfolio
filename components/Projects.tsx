"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectItem {
  title: string;
  type: string;
  description: string;
  tags: string[];
  liveUrl: string;
  image?: string;
  images?: string[];
  isLandingPage?: boolean;
  objectFit?: string;
  features: string[];
}

const projectsData: ProjectItem[] = [
  // Professional Projects
  {
    title: 'WearUp – Premium Clothing Storefront',
    type: 'professional',
    description: 'A high-end editorial digital retail platform featuring real-time product queries, an interactive shopping cart, custom-tailored collection cataloging, and an immersive checkout flow.',
    tags: ['React.js', 'Node.js', 'Redux Toolkit', 'Tailwind CSS', 'MongoDB'],
    liveUrl: 'https://clothing-frontend-zqt8.onrender.com/',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    features: ['Dynamic Cart & Checkout', 'Admin Product Management', 'JWT Secure Session Auth', 'High-Performance Image Optimization']
  },
  {
    title: 'ApexPOS – Next-Gen Point of Sale Solution',
    type: 'saas',
    description: 'An enterprise-grade point-of-sale system for businesses. Streamlines invoicing, order-taking, live stock tracking, and sales operations with lightning-fast reactive dashboards.',
    tags: ['React.js', 'TypeScript', 'Recharts', 'Express', 'Tailwind CSS'],
    liveUrl: 'https://pos-frontend-rudu.onrender.com/',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    features: ['Lightning-fast Billing Grid', 'Real-time Stock Tracking', 'Rich Revenue Analytics', 'Multi-Terminal Syncing']
  },
  {
    title: 'SchoolFMS - Multi-Tenant SaaS',
    type: 'saas',
    description: 'Scalable school management SaaS with tenant-isolated architecture, RBAC, secure APIs, and complete finance + operations visibility.',
    tags: ['Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://schoolfms.com/',
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    features: ['Multi-Tenant RBAC', 'Fee + Salary Workflows', 'Redis/BullMQ Queues', 'JWT + Socket.IO Security']
  },
  {
    title: 'AQC - Grievance Mobile Application',
    type: 'mobile',
    description: 'Full-stack grievance mobile application with real-time status sync, queue-driven workflows, and secure multi-role complaint lifecycles.',
    tags: ['Mobile App', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: '#',
    images: [
      "/projects/aqc/aqc_1.png",
      "/projects/aqc/aqc_2.png",
      "/projects/aqc/aqc_3.png",
      "/projects/aqc/aqc_4.png",
    ],
    objectFit: 'contain',
    features: ['Citizen/Admin/Officer RBAC', 'Redis Caching Layer', 'BullMQ Async Pipelines', 'Socket.IO Live Updates']
  },
  {
    title: 'Nailify - Beauty Booking Mobile Application',
    type: 'mobile',
    description: 'Real-time beauty service booking mobile application with live status, resilient background processing, and production-grade auth/notifications.',
    tags: ['Mobile App', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: '#',
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
    objectFit: 'contain',
    features: ['Live Booking Status', 'BullMQ + Redis Jobs', 'JWT + RBAC Security', 'Persistent Notification Engine']
  },
  {
    title: 'HerRidez (React Native)',
    type: 'mobile',
    description: 'A production-grade ride tracking platform for women with real-time GPS, SOS safety, and an event-driven social layer.',
    tags: ['React Native', 'Node.js', 'Redis', 'BullMQ', 'Socket.io'],
    liveUrl: '#',
    images: [
      "/projects/herridez/hr_final_1.png",
      "/projects/herridez/hr_final_2.png",
      "/projects/herridez/hr_final_3.png",
      "/projects/herridez/hr_final_4.png",
    ],
    features: ['Real-time GPS Tracking', 'SOS Escalation System', 'Live Ride Sharing', 'Social Event Layer']
  },
  {
    title: 'Vedic Success – Spiritual Tech',
    type: 'professional',
    description: 'Where Ancient Wisdom Meets Modern Neuroscience. Decoding life through 231 precise parameters using VSLR algorithm.',
    tags: ['Neuroscience', 'Algorithm', 'Data-Driven', 'Consulting'],
    liveUrl: 'https://www.vedicsuccess.com/',
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
    features: ['231-Point VSLR AI', 'RAS Optimization', '7-Dimension Success', 'Unified Theory of Life']
  },
  {
    title: 'E8 Productions – Media Agency',
    type: 'professional',
    description: 'Specializing in end-to-end social media and content solutions, strategy, video production, and original show development.',
    tags: ['Media Production', 'Content Strategy', 'Social Media', 'UGC'],
    liveUrl: 'https://www.e8productions.com/',
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800",
    features: ['Strategic Content', 'Video Production', 'Original Show Production', 'Social Media Mgmt']
  },
  {
    title: 'ECONS EXIM GATEWAY',
    type: 'professional',
    description: 'AI-powered export/import gateway providing a one-window solution for global trade compliance and documentation.',
    tags: ['AI Trade', 'Compliance', 'Logistics', 'FinTech'],
    liveUrl: 'https://econs.egcindia.in/',
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800",
    features: ['Trade Compliance', 'Logistics Automation', 'HS Validation', 'Secure Documentation']
  },
  {
    title: 'GoShah – Premium Car Rentals',
    type: 'professional',
    description: 'Experience luxury at every mile with Mumbai\'s elite car rental service featuring a premium fleet and transparent pricing.',
    tags: ['Mobility', 'Luxury Rental', '24/7 Support', 'Mumbai'],
    liveUrl: 'https://goshahrental.netlify.app/',
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
    features: ['Premium Fleet', 'Transparent Pricing', 'Doorstep Delivery', '24/7 Assistance']
  },
  {
    title: 'Elysian – Premium Fashion Storefront',
    type: 'professional',
    isLandingPage: true,
    description: 'A high-end editorial premium fashion e-commerce storefront showcasing quiet luxury, curated collections, and an interactive lookbook experience.',
    tags: ['E-Commerce', 'Next.js', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://69ff8d6bc3bdc61c33c7dfff--calm-kitsune-2dc38e.netlify.app/',
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
    features: ['SS26 Atelier lookbook', 'Ethical & Small-Batch Focus', 'Editorial UI Animations', 'Interactive Style Feed']
  },
  {
    title: 'Hiranandani Westgate – Luxury Real Estate',
    type: 'professional',
    isLandingPage: true,
    description: 'A premium, high-conviction real estate showcase page designed for Thane’s iconic 25-acre destination residential project.',
    tags: ['Real Estate', 'Landing Page', 'Interactive Map', 'Premium UI'],
    liveUrl: 'https://69d79d5d77b5e3567bda1fce--euphonious-lokum-8ffe2b.netlify.app/',
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    features: ['3 Thematic Amenity Zones', 'IGBC Gold Rated Outline', 'Executive Portfolio Snapshot', 'Clubhouse & Podium Tour']
  },
  {
    title: 'CIMDR Sangli – Higher Ed Institution Portal',
    type: 'professional',
    isLandingPage: true,
    description: 'A modern, responsive educational portal for Chintamanrao Institute of Management Development and Research showcasing courses, placements, and campus admissions.',
    tags: ['EdTech', 'Higher Education', 'Responsive Portal', 'React.js'],
    liveUrl: 'https://glittery-kulfi-0fb52f.netlify.app/',
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
    features: ['AICTE/NAAC Program Guide', 'Verified Recruiter Portfolio', 'Mock Test & CET Registration', '125-Acre Legacy Overview']
  },
  {
    title: 'Car Bazar – Exclusive Car Rental Experience',
    type: 'professional',
    isLandingPage: true,
    description: 'A seamless, premium vehicle rental landing page offering curated luxury SUVs and high-performance cars with a doorstep delivery setup.',
    tags: ['Car Rental', 'Luxury Mobility', 'Landing Page', 'Framer Motion'],
    liveUrl: 'https://dancing-cajeta-881cb6.netlify.app/',
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800",
    features: ['60-Second Fast Booking', 'Verified Luxury SUV Fleet', 'Flexible Delivery Schedules', 'Comprehensive Cover Details']
  },
  {
    title: 'WebYapar Solutions – IT Consulting & Digital Engineering',
    type: 'professional',
    isLandingPage: true,
    description: 'A premium, modern corporate portal for a digital agency specializing in custom SaaS development, e-commerce, and advanced AI-driven workflow automations.',
    tags: ['IT Services', 'SaaS', 'Corporate Web', 'AI Automation'],
    liveUrl: 'https://webyaparsolutions.com/',
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    features: ['Bespoke Software Design', 'AI-Powered System Solutions', 'Integrated Tech Marketing', 'Client Operations Growth']
  },
  {
    title: 'WebCastle UAE – Premier Web Engineering Agency',
    type: 'professional',
    isLandingPage: true,
    description: 'A premium corporate showcase landing page for an international website and software development agency in the UAE, designed to capture leads, showcase technical integrations, and drive brand credibility.',
    tags: ['Agency Portal', 'React.js', 'Headless CMS', 'Modern UI'],
    liveUrl: 'https://willowy-heliotrope-8af7b2.netlify.app/',
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
    features: ['Interactive Quote Estimator', 'Tech Stack Integration Matrix', 'Agile Process Flow Map', 'Premium UAE Corporate Style']
  },
  {
    title: 'LetsCrack – Premium MCQ & Test Preparation Platform',
    type: 'professional',
    description: 'A production-grade, highly interactive online assessment and test preparation platform featuring full-screen MCQ test players, real-time grading, detailed feedback loops, and robust user dashboards.',
    tags: ['React.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    liveUrl: 'https://letscrack-frontend.onrender.com/',
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    features: ['Dynamic MCQ Test Player', 'Real-time Result Analytics', 'Stateful Session Recovery', 'Admin Dashboard & RBAC']
  },

  // Personal Projects
  {
    title: 'LMT – AI Learning Management',
    type: 'personal',
    description: 'An AI-powered LMS for students and educators featuring dual authentication, Razorpay, and AI-driven dashboards.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Razorpay'],
    liveUrl: 'https://lmt-frontend1.netlify.app/',
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    features: ['Dual Auth', 'Razorpay', 'AI Dashboards', 'Role Management']
  },
  {
    title: 'Token-Based LLM Chat',
    type: 'personal',
    description: 'Secure token-based credit system with OpenAI API integration and real-time WebSocket feedback.',
    tags: ['React.js', 'Node.js', 'OpenAI', 'Socket.IO'],
    liveUrl: 'https://ailmm-frontend.onrender.com/',
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    features: ['Credit System', 'OpenAI API', 'WebSocket', 'Chat History']
  },
  {
    title: 'Digital Twin Dashboard',
    type: 'personal',
    description: 'Real-time wind turbine vibration data visualization and forecasting using integrated ML models.',
    tags: ['React.js', 'ML', 'Recharts', 'Express'],
    liveUrl: 'https://vibration-q6co.onrender.com/',
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&q=80&w=800",
    features: ['ML Predictions', 'Anomaly Detection', 'CSV Export', 'Live Charts']
  },
  {
    title: 'Lead Management System',
    type: 'personal',
    description: 'Full-stack sales lead tracker with role-based access control and performance dashboards.',
    tags: ['React.js', 'Express', 'MongoDB', 'JWT'],
    liveUrl: 'https://leatmanagement.netlify.app/',
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    features: ['Role-based Auth', 'Dashboards', 'Secure APIs', 'CORS Enabled']
  },
  {
    title: 'AI Assistant Shifra',
    type: 'personal',
    description: 'Intelligent AI assistant with advanced conversational capabilities and smart response logic.',
    tags: ['AI Integration', 'React.js', 'Node.js', 'NLP'],
    liveUrl: 'https://upload-qvpb.onrender.com/',
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=800",
    features: ['Smart NLP', 'Real-time UI', 'User Context', 'Fast Scaling']
  },
  {
    title: 'Smart Notes App',
    type: 'personal',
    description: 'Note-taking application featuring email OTP authentication and Google OAuth integration.',
    tags: ['React.js', 'Email OTP', 'Google Auth', 'Notes'],
    liveUrl: 'https://notes-frontendtext-notes-frontend-my.onrender.com/',
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800",
    features: ['OTP Login', 'Cloud Storage', 'Rich Editor', 'Auth Persistence']
  },
  {
    title: 'AI-Powered E-Commerce',
    type: 'personal',
    description: 'E-commerce platform with role-based admin panel and AI product recommendations.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Cloudinary'],
    liveUrl: 'https://ai-frontend-9i66.onrender.com',
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    features: ['Admin Panel', 'AI Sorter', 'Image Handling', 'Secure Payments']
  },
  {
    title: 'Airbnb Clone',
    type: 'personal',
    description: 'Full-stack property booking system with JWT auth and real-time updates.',
    tags: ['MERN Stack', 'JWT Auth', 'Bookings'],
    liveUrl: 'https://airbnb-frontend-ucog.onrender.com',
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
    features: ['Search Flow', 'JWT Sessions', 'Host Control', 'Fast Loading']
  },
  {
    title: 'Employee Management',
    type: 'personal',
    description: 'Robust task tracking system with distinct admin/employee roles and local persistence.',
    tags: ['React.js', 'localStorage', 'Role Logic'],
    liveUrl: 'https://employemanagamentsystem1.onrender.com',
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    features: ['Admin Control', 'Task Tracking', 'Local Save', 'Protected Routes']
  }
];

const ImageSlider = ({ images, onImageClick, objectFit = 'cover' }: { images: string[], onImageClick?: (index: number) => void, objectFit?: 'cover' | 'contain' }) => {
  const [index, setIndex] = useState(0);
  const MotionImage = motion(Image);

  return (
    <div className="relative w-full h-full overflow-hidden group/slider">
      <AnimatePresence mode="wait">
        <MotionImage
          key={index}
          src={images[index]}
          alt="Project preview"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75}
          loading="lazy"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className={`w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'} cursor-zoom-in`}
          onClick={() => onImageClick?.(index)}
        />
      </AnimatePresence>
      
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIndex(i); }}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === index ? 'bg-primary w-4' : 'bg-white/30'}`}
          />
        ))}
      </div>

      {/* Navigation */}
      <button 
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIndex((index - 1 + images.length) % images.length); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-opacity z-20"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button 
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIndex((index + 1) % images.length); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-opacity z-20"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const ImageModal = ({ images, index, onClose, setIndex }: { images: string[], index: number, onClose: () => void, setIndex: (i: number) => void }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((index - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setIndex((index + 1) % images.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, images, onClose, setIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors z-[110]"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </button>

      {images.length > 1 && (
        <>
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors z-[110] md:left-6 md:p-4"
            onClick={(e) => { e.stopPropagation(); setIndex((index - 1 + images.length) % images.length); }}
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors z-[110] md:right-6 md:p-4"
            onClick={(e) => { e.stopPropagation(); setIndex((index + 1) % images.length); }}
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </>
      )}

      <motion.div 
        className="relative w-[92vw] h-[88vh] max-w-[1400px] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="Project screenshot full view"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl shadow-2xl"
          />
        </AnimatePresence>
        
        {images.length > 1 && (
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-primary w-8' : 'bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [modalIndex, setModalIndex] = useState(0);

  const filteredProjects = projectsData.filter(p => {
    if (filter === "all") return true;
    if (filter === "landing-page") return (p as any).isLandingPage || p.type === "landing-page";
    return p.type === filter;
  });

  const openModal = (images: string[], index: number = 0) => {
    setSelectedImages(images);
    setModalIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImages(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6 lg:px-8 bg-background">
      <AnimatePresence>
        {selectedImages && (
          <ImageModal 
            images={selectedImages} 
            index={modalIndex} 
            onClose={closeModal} 
            setIndex={setModalIndex} 
          />
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 text-left">
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase mb-4"
          >
            <span className="w-8 h-[2px] bg-primary"></span>
            Portfolio
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            Projects
          </motion.h1>
          <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed">
            A showcase of my engineering journey across professional and personal boundaries.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex overflow-x-auto max-w-full no-scrollbar bg-surface-dark p-1.5 rounded-xl border border-slate-800 shadow-sm relative z-10 gap-1 select-none whitespace-nowrap scroll-smooth">
          {[
            { id: "all", label: "All Cases" },
            { id: "saas", label: "SaaS Products" },
            { id: "professional", label: "Professional" },
            { id: "landing-page", label: "Landing Pages" },
            { id: "mobile", label: "Mobile Apps" },
            { id: "personal", label: "Personal" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 flex-shrink-0 ${
                filter === tab.id 
                  ? "bg-primary text-background-dark shadow-glow" 
                  : "text-slate-400 hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative flex flex-col bg-surface-dark border border-slate-800 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-lg hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]"
            >
              {/* Compact Image Header with Slider Support */}
              <div className="relative aspect-[16/9] overflow-hidden bg-black/20">
                {project.images ? (
                  <ImageSlider 
                    images={project.images} 
                    onImageClick={(idx) => openModal(project.images!, idx)}
                    objectFit={project.objectFit as any}
                  />
                ) : (
                  <Image
                    src={project.image!} 
                    alt={project.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={75}
                    loading="lazy"
                    className={`w-full h-full ${project.objectFit === 'contain' ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-700 cursor-zoom-in`} 
                    onClick={() => openModal([project.image!])}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none" />
                <div className="absolute top-3 right-3 z-20">
                  <span className={`px-2 py-0.5 text-[9px] font-bold rounded uppercase tracking-widest ${
                    (project as any).isLandingPage 
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : project.type === 'saas'
                        ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                        : project.type === 'mobile'
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : project.type === 'professional' 
                            ? 'bg-primary/20 text-primary border border-primary/30' 
                            : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {(project as any).isLandingPage ? 'landing page' : project.type === 'saas' ? 'saas product' : project.type === 'mobile' ? 'mobile app' : project.type}
                  </span>
                </div>
              </div>

              {/* Compact Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-1 leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2 font-light">
                  {project.description}
                </p>

                {/* Features - Tiny dots */}
                <div className="space-y-1.5 mb-5">
                  {project.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[10px] text-slate-300 uppercase tracking-tighter font-medium">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {feat}
                    </div>
                  ))}
                </div>

                {/* Footer and tags */}
                <div className="mt-auto pt-4 border-t border-slate-800/50">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[9px] px-1.5 py-0.5 bg-background-dark/40 text-slate-500 rounded border border-slate-800 font-bold uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={project.liveUrl} 
                    target="_blank"
                    className="w-full py-2.5 bg-primary text-background-dark font-black text-[11px] uppercase tracking-widest rounded-lg hover:bg-cyan-400 transition-all text-center flex items-center justify-center gap-2 shadow-sm relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      Launch Project <span className="material-icons text-[12px]">rocket_launch</span>
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
