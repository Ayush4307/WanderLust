import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Zap, Layout, Eye, Info, Sparkles, Layers, Globe, Compass, Monitor, Users, Calendar, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function App() {
  // Theme state: "minimalism" (stark, flat, uppercase, coordinates, zero-radius) or "reference" (replica layout)
  const [designTheme, setDesignTheme] = useState<"minimalism" | "reference">("reference");

  // Customizer state
  const [paddingSize, setPaddingSize] = useState<"standard" | "compact" | "spacious">("compact");
  const [alignment, setAlignment] = useState<"center" | "left">("center");
  const [cardGlow, setCardGlow] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<string>("Home");
  const [showHelperOverlay, setShowHelperOverlay] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const frameCount = 300;

    const currentFrame = (index: number) => (
      `/frames/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`
    );

    const preloadImages = () => {
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image();
    img.src = currentFrame(0);

    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index: number) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    };

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;

      const scrollFraction = scrollTop / maxScrollTop;

      const frameIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(scrollFraction * frameCount))
      );

      requestAnimationFrame(() => updateImage(frameIndex));
    };

    window.addEventListener('scroll', handleScroll);
    preloadImages();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Constants representing exact copy from the reference image
  const navItems = ["Home", "Solutions", "Projects", "About us", "Contact"];

  // Optimized padding classes to fit everything in 900px perfectly with zero scroll
  const paddingClasses = {
    compact: "py-4 px-6 md:py-6 md:px-8",
    standard: "py-6 px-8 md:py-8 md:px-14",
    spacious: "py-8 px-10 md:py-10 md:px-18",
  };

  return (
    <div className="min-h-screen bg-black/10 text-white font-sans antialiased selection:bg-white selection:text-black flex flex-col justify-between relative overflow-hidden">

      {/* Scroll Animation Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-[100vw] h-[100vh] object-cover z-0 pointer-events-none opacity-100"
      />





      {/* Main Container - Framed by Minimalist Visual Accents */}
      <main className="flex-1 flex flex-col justify-center items-center w-full relative z-10 px-4 md:px-12 py-4">

        {/* Banner Section wrapper with solid black background, pure white accents, DM sans */}
        {/* EXACT HEIGHT SPECIFICATION: 760px compact banner section for first-fold visibility */}
        <div
          id="sunrock-banner-container"
          className={`w-full max-w-[1360px] h-[760px] bg-transparent relative overflow-hidden transition-all duration-500 flex flex-col ${designTheme === "minimalism"
            ? "rounded-none"
            : "rounded-3xl"
            }`}
        >
          {/* Ambient Glow Effects */}
          {cardGlow && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-white/5 blur-[100px] rounded-full pointer-events-none transition-all duration-500" />
          )}

          {/* Minimalist Top Right Visual Accent Lines (from Clean Minimalism specification) */}
          <div className="absolute top-0 right-0 p-6 pointer-events-none hidden sm:block">
            <div className="w-24 h-[1px] bg-white/10 mb-1"></div>
            <div className="w-32 h-[1px] bg-white/15"></div>
          </div>

          {/* Minimalist Vertical Rotate Decorative Text */}
          {designTheme === "minimalism" && (
            <div className="absolute bottom-28 right-0 pointer-events-none hidden lg:block select-none">
              <div className="writing-mode-vertical text-[9px] tracking-[0.5em] uppercase opacity-20 -rotate-90 origin-right pr-20 font-mono text-white/50">
                ESTABLISHED MMXXVI — SUNROCK ENERGY DIVISION
              </div>
            </div>
          )}

          {/* Label overlay for active guide rendering */}
          <AnimatePresence>
            {showHelperOverlay && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-4 left-4 z-40 bg-[#0d0d0d] text-[10px] text-zinc-400 px-3 py-1.5 rounded-none border border-zinc-800 flex items-center gap-1.5 font-mono pointer-events-none"
              >
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                Theme: <span className="text-white capitalize font-bold">{designTheme}</span> | Height: 900px (100% Fit)
              </motion.div>
            )}
          </AnimatePresence>

          {/* Ensure the inner padding container occupies exactly 100% height and has smooth alignment */}
          <div className={`w-full h-full ${paddingClasses[paddingSize]} flex flex-col justify-between transition-all duration-300 relative`}>

            {/* 1. HEADER SECTION */}
            <header className="w-full flex items-center justify-between gap-4 mb-2 relative z-20 shrink-0">

              {/* Wanderlust Brand Logo */}
              <div className="flex flex-col relative group min-w-[120px]">
                {showHelperOverlay && (
                  <span className="absolute -top-6 left-0 text-[9px] font-mono bg-white text-black px-1 uppercase tracking-widest">Logo Component</span>
                )}

                {designTheme === "minimalism" ? (
                  <div>
                    <div className="text-[20px] font-black tracking-tighter leading-none text-white select-none">
                      WANDERLUST
                    </div>
                    <div className="text-[8px] tracking-[0.45em] text-white/40 uppercase mt-0.5 select-none font-mono">
                      TRAVEL / INDIA
                    </div>
                  </div>
                ) : (
                  <span className="font-extrabold text-[20px] tracking-[0.1em] text-white uppercase select-none">
                    WANDER<span className="text-blue-400 relative">LUST</span>
                  </span>
                )}
              </div>

              {/* Central Navigation Items - Absolutely centered in a single line */}
              {designTheme === "minimalism" ? (
                // Stark Minimalist Nav
                <nav className="hidden md:flex gap-10 justify-center items-center text-left absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 whitespace-nowrap flex-row flex-nowrap">
                  {showHelperOverlay && (
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[9px] font-mono bg-white text-black px-1 uppercase tracking-widest">Minimalist Menu</span>
                  )}
                  {navItems.slice(0, 4).map((item) => (
                    <div
                      key={item}
                      onClick={() => setCurrentTab(item)}
                      className="flex flex-col cursor-pointer group/nav shrink-0 whitespace-nowrap"
                    >
                      <span className="text-[8px] tracking-widest text-white/30 uppercase mb-0.5 font-mono transition-colors group-hover/nav:text-white/60">
                        {item === "Home" ? "01" : item === "Solutions" ? "02" : item === "Projects" ? "03" : "04"}
                      </span>
                      <span className={`text-xs font-semibold uppercase tracking-wider transition-all ${currentTab === item ? "text-white border-b border-white pb-0.5" : "text-white/60 hover:text-white"
                        }`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </nav>
              ) : (
                // Classic Reference Nav Pills - Absolutely centered with beautiful transparent blur in one single line
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 hidden md:flex justify-center items-center">
                  <nav className="flex flex-row flex-nowrap items-center gap-1 bg-zinc-950/45 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-lg relative whitespace-nowrap">
                    {showHelperOverlay && (
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[9px] font-mono bg-white text-black px-1 uppercase tracking-widest">Pill Menu</span>
                    )}
                    {navItems.map((item) => (
                      <button
                        key={item}
                        onClick={() => setCurrentTab(item)}
                        className={`px-4.5 py-1 rounded-full text-xs font-medium transition-all shrink-0 whitespace-nowrap ${currentTab === item
                          ? "bg-white text-black shadow-sm font-semibold"
                          : "text-zinc-400 hover:text-white"
                          }`}
                      >
                        {item}
                      </button>
                    ))}
                  </nav>
                </div>
              )}

              {/* Header Right Side Action Controls - UK Flag removed */}
              <div className="flex items-center gap-3 relative min-w-[120px] justify-end">
                {showHelperOverlay && (
                  <span className="absolute -top-6 right-0 text-[9px] font-mono bg-white text-black px-1 uppercase tracking-widest">Right Header Area</span>
                )}

                <button className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-all flex items-center shrink-0 ${designTheme === "minimalism"
                  ? "border border-white/20 hover:border-white px-5 py-2 rounded-none bg-transparent hover:bg-white hover:text-black"
                  : "bg-white/[0.04] backdrop-blur-md hover:bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-zinc-350 hover:text-white"
                  }`}>
                  Open menu
                </button>
              </div>

            </header>

            {/* 2. CENTER HERO AREA - Absolutely centered over the canvas */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl mx-auto flex flex-col justify-center z-10 ${alignment === "left" ? "text-left items-start" : "text-center items-center"
                }`}
            >

              {showHelperOverlay && (
                <div className="absolute -top-6 bg-white text-black text-[9px] font-mono px-2 py-0.5 uppercase tracking-widest">
                  Hero Text & CTA Hub (Tightly Stacked)
                </div>
              )}

              {/* Tag header from "Clean Minimalism" specification */}
              {designTheme === "minimalism" && (
                <motion.span variants={fadeInUp} className="inline-block px-2.5 py-1 border border-white/20 text-[9px] tracking-[0.25em] uppercase font-mono text-white/80 mb-3 select-none">
                  NOW OPERATIONAL — SMART SYSTEMA
                </motion.span>
              )}

              {/* HEADLINE TEXT SIZE SPECIFICATION: Reduced to 54px, medium font weight */}
              <motion.h1 variants={fadeInUp} className={`font-medium text-white tracking-tight leading-[1.12] mb-3 max-w-4xl transition-all duration-500 text-3xl sm:text-4xl md:text-[54px] ${designTheme === "minimalism" ? "uppercase tracking-tighter" : ""
                }`}>
                Every Journey Begins<br />
                With a Story. Make<br />
                Yours Extraordinary.
              </motion.h1>

              {/* SUBTEXT SPECIFICATION: Reduced size (14px) and kept font weight to regular (font-normal) */}
              <motion.p variants={fadeInUp} className={`text-[14px] text-zinc-400 font-normal leading-relaxed max-w-2xl mb-5 transition-all`}>
                Discover India's most breathtaking destinations through thoughtfully crafted travel experiences. From the snow-covered Himalayas to the tropical beaches of Goa, we turn your dream vacation into unforgettable memories.
              </motion.p>

              {/* Call-to-action Action Hub */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 items-center">

                {designTheme === "minimalism" ? (
                  // Stark square button from the "Clean Minimalism" design schema
                  <button className="bg-white hover:bg-zinc-200 text-black px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-none rounded-none flex items-center gap-2.5 group active:scale-95 shadow-xl">
                    Plan Your Dream Vacation
                    <ArrowUpRight size={13} className="stroke-[3px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                ) : (
                  // Original reference pill styled button with blue circular icon
                  <button className="group relative flex items-center justify-between gap-3 bg-white hover:bg-zinc-100 text-black px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-lg shadow-white/5 hover:shadow-white/10 active:scale-[0.98]">
                    <span className="text-[14px] tracking-tight pl-1 select-none">
                      Plan Your Dream Vacation
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#0052ff] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </div>
                  </button>
                )}

                {designTheme === "minimalism" && (
                  <button className="text-xs font-bold uppercase tracking-[0.2em] border-b border-white/60 hover:border-white pb-1.5 px-1 text-white/80 hover:text-white transition-all">
                    Talk to Our Travel Experts
                  </button>
                )}
              </motion.div>

            </motion.div>

            <div className="flex-1" />

            {/* 3. IMPACT STAT CARDS - Translucent background with heavy backdrop blur */}
            {/* Pushed to the absolute left and right boundaries with beautiful gaps in between */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-1 mb-1 relative z-20 shrink-0"
            >

              {/* Left Card: Tailor-Made Travel Experiences */}
              <motion.div
                variants={fadeInUp}
                className={`group relative transition-all duration-300 backdrop-blur-xl justify-self-start w-full md:max-w-[360px] ${designTheme === "minimalism"
                  ? "bg-white/5 border border-white/10 hover:border-white/20 p-5 rounded-none"
                  : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 p-6 rounded-[24px]"
                  }`}
              >
                {showHelperOverlay && (
                  <span className="absolute -top-3 left-4 text-[9px] font-mono bg-white text-black px-1.5 uppercase">Section A</span>
                )}

                {/* Badge Icon: White rounded-square badge with blue icon */}
                <div className={`flex items-center justify-center mb-4 transition-all duration-300 ${designTheme === "minimalism"
                  ? "w-8.5 h-8.5 border rounded-none bg-transparent border-white/20 group-hover:border-white/60"
                  : "w-10 h-10 rounded-2xl bg-white text-black shadow-md shadow-black/25"
                  }`}>
                  {designTheme === "minimalism" ? (
                    <Zap size={15} className="text-white fill-white/10" />
                  ) : (
                    <Zap size={18} className="text-[#0052ff] fill-[#0052ff]" />
                  )}
                </div>

                <h3 className={`text-white mb-1.5 ${designTheme === "minimalism" ? "text-base font-bold uppercase tracking-wider" : "text-lg font-semibold"
                  }`}>
                  Tailor-Made Travel Experiences
                </h3>

                <p className="text-xs text-zinc-400 font-normal leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  From romantic getaways to family vacations, every itinerary is thoughtfully crafted to match your travel style, budget, and interests.
                </p>

                {/* Accent Line Indicator */}
                {designTheme === "minimalism" ? (
                  <div className="absolute top-0 right-0 w-2 h-[1px] bg-white/30 group-hover:w-8 transition-all duration-500" />
                ) : (
                  <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
              </motion.div>

              {/* Right Card: Explore India With Confidence */}
              <motion.div
                variants={fadeInUp}
                className={`group relative transition-all duration-300 backdrop-blur-xl justify-self-end w-full md:max-w-[360px] ${designTheme === "minimalism"
                  ? "bg-white/5 border border-white/10 hover:border-white/20 p-5 rounded-none"
                  : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 p-6 rounded-[24px]"
                  }`}
              >
                {showHelperOverlay && (
                  <span className="absolute -top-3 left-4 text-[9px] font-mono bg-white text-black px-1.5 uppercase">Section B</span>
                )}

                {/* Badge Icon: White rounded-square badge with blue icon */}
                <div className={`flex items-center justify-center mb-4 transition-all duration-300 ${designTheme === "minimalism"
                  ? "w-8.5 h-8.5 border rounded-none bg-transparent border-white/20 group-hover:border-white/60"
                  : "w-10 h-10 rounded-2xl bg-white text-black shadow-md shadow-black/25"
                  }`}>
                  {designTheme === "minimalism" ? (
                    <Globe size={15} className="text-white" />
                  ) : (
                    <Users size={18} className="text-[#0052ff] fill-[#0052ff]" />
                  )}
                </div>

                <h3 className={`text-white mb-1.5 ${designTheme === "minimalism" ? "text-base font-bold uppercase tracking-wider" : "text-lg font-semibold"
                  }`}>
                  Explore India With Confidence
                </h3>

                <p className="text-xs text-zinc-400 font-normal leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  Enjoy seamless journeys with handpicked stays, reliable transportation, local expertise, and dedicated support every step of the way.
                </p>

                {/* Accent Line Indicator */}
                {designTheme === "minimalism" ? (
                  <div className="absolute top-0 right-0 w-2 h-[1px] bg-white/30 group-hover:w-8 transition-all duration-500" />
                ) : (
                  <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
              </motion.div>

            </motion.div>

            {/* 4. Stark Minimalist Info Grid Footer (Injected from Minimalist HTML Schema spec) */}
            {designTheme === "minimalism" && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-end pt-4 mt-4 border-t border-white/10 text-zinc-500 font-mono text-[10px] shrink-0">
                <div className="flex flex-col">
                  <span className="tracking-widest opacity-40 uppercase mb-0.5">Coordinates</span>
                  <span className="text-white uppercase font-bold">51.1657° N, 10.4515° E</span>
                </div>
                <div className="flex flex-col">
                  <span className="tracking-widest opacity-40 uppercase mb-0.5">Terminal ID</span>
                  <span className="text-white uppercase font-bold">8842-SRX-01</span>
                </div>
                <div className="flex flex-col">
                  <span className="tracking-widest opacity-40 uppercase mb-0.5">Latency</span>
                  <span className="text-white uppercase font-bold">9ms / Optimal</span>
                </div>
                <div className="flex justify-end gap-6 text-[9px] tracking-widest uppercase">
                  <span className="text-white">Active</span>
                  <span className="opacity-40">Systema v1.0</span>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* SECTION 2: Trusted by Industry Leaders Across Sectors */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          id="trusted-leaders-section"
          className="w-full max-w-[1360px] mt-12 bg-transparent p-8 md:p-20 relative overflow-hidden transition-all duration-500 flex flex-col justify-center items-center"
        >
          {/* Subtle elegant radial background glow like the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amber-500/5 via-orange-600/5 to-amber-700/5 blur-[120px] rounded-full pointer-events-none" />

          {/* Headline and Subtext Block */}
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto z-10 flex flex-col items-center mb-16">
            <h2 className="text-4xl sm:text-6xl md:text-[76px] leading-[1.08] tracking-tight text-white mb-6">
              <span className="font-serif italic font-normal text-white">Trusted by</span><br />
              <span className="font-bold tracking-tight text-white font-sans">Thousands of Happy</span><br />
              <span className="font-bold tracking-tight text-white font-sans">Travelers®</span>
            </h2>

            <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed max-w-lg font-sans">
              Wanderlust has curated unforgettable journeys across India's most stunning destinations for over 5,000+ satisfied travelers
            </p>
          </motion.div>

          {/* Trust Badges Row */}
          <motion.div variants={fadeInUp} className="w-full max-w-5xl mx-auto z-10 flex flex-wrap justify-center items-center gap-10 md:gap-20 mb-16 opacity-60">
            <div className="flex items-center gap-2 text-white font-bold tracking-tight text-base sm:text-lg select-none hover:opacity-100 transition-opacity font-sans">
              ⭐ 4.9/5 Rating
            </div>
            <div className="flex items-center gap-2 text-white font-semibold tracking-tight text-sm sm:text-base select-none hover:opacity-100 transition-opacity font-sans">
              ✓ Verified by TripAdvisor
            </div>
            <div className="flex items-center gap-2 text-white font-semibold tracking-tighter text-base select-none hover:opacity-100 transition-opacity font-sans">
              🏆 Best Tour Operator
            </div>
            <div className="flex items-center gap-1 text-white font-semibold tracking-tight text-base select-none hover:opacity-100 transition-opacity font-sans">
              24×7 Support Available
            </div>
            <div className="flex items-center gap-2 text-white font-semibold uppercase tracking-widest text-xs select-none hover:opacity-100 transition-opacity font-sans">
              ✓ Money-Back Guarantee
            </div>
          </motion.div>

          {/* Thin separator line */}
          <div className="w-full border-t border-white/10 my-6 z-10" />

          {/* 3-Column Grid - Travel Trust Points */}
          <motion.div variants={fadeInUp} className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-left pt-6 z-10 font-sans">
            <div className="flex flex-col">
              <h4 className="text-[11px] font-extrabold tracking-[0.18em] text-white uppercase mb-4 leading-normal">
                PERSONALIZED ITINERARIES
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm font-normal leading-relaxed">
                Every journey is tailored to your interests, budget, and travel style with expert curation
              </p>
            </div>

            <div className="flex flex-col">
              <h4 className="text-[11px] font-extrabold tracking-[0.18em] text-white uppercase mb-4 leading-normal">
                HANDPICKED PARTNERS
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm font-normal leading-relaxed">
                Verified hotels, transport providers, and local guides carefully selected for quality
              </p>
            </div>

            <div className="flex flex-col">
              <h4 className="text-[11px] font-extrabold tracking-[0.18em] text-white uppercase mb-4 leading-normal">
                TRANSPARENT PRICING
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm font-normal leading-relaxed">
                No hidden costs, competitive rates, and best value for premium experiences
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* SECTION 3: Why Travel With Us Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          id="why-travel-section"
          className={`w-full max-w-[1360px] mt-12 bg-transparent relative overflow-hidden transition-all duration-500 flex flex-col justify-center items-start p-8 md:p-20`}
        >
          {/* Headline block aligned to top-left */}
          <motion.div variants={fadeInUp} className="w-full text-left max-w-5xl mb-14 z-10">
            <span className="text-blue-400 text-xs tracking-widest font-mono uppercase mb-4 block font-bold">
              Why Wanderlust
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[54px] leading-[1.18] tracking-tight text-white mb-6 font-sans">
              <span className="inline-block text-blue-400 mr-2 select-none font-bold">✦</span>
              <span className="font-bold text-white">Travel Beyond Destinations — Designed </span>
              <span className={`inline-block px-4.5 py-0.5 rounded-full mx-1 text-2xl sm:text-3xl md:text-[45px] align-middle font-bold border uppercase tracking-wider ${designTheme === "minimalism"
                ? "bg-transparent border-white/30 rounded-none"
                : "bg-zinc-900 border-white/10"
                }`}>
                around you
              </span>
            </h2>
            <p className="text-zinc-400 text-sm font-normal leading-relaxed max-w-xl font-sans mt-4">
              We believe every journey should feel effortless from beginning to end. Our travel experts ensure comfort, safety, and unforgettable memories at every step.
            </p>
          </motion.div>

          {/* 4 Cards Grid - using exact same style as banner cards, horizontal row on desktop */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z-10">

            {/* Card 1: Personalized Planning */}
            <motion.div
              variants={fadeInUp}
              className={`group relative transition-all duration-300 backdrop-blur-xl flex flex-col justify-between min-h-[300px] overflow-hidden ${designTheme === "minimalism"
                ? "bg-white/5 border border-white/10 hover:border-white/20 p-5 rounded-none"
                : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 p-6 rounded-[24px]"
                }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-transparent to-black/80 pointer-events-none" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                {/* Top part: Badge */}
                <div className={`px-3 py-1 rounded-full border text-[10px] uppercase font-bold tracking-wider text-zinc-400 self-start font-mono ${designTheme === "minimalism" ? "rounded-none border-white/20" : "border-white/10 bg-zinc-900/40"
                  }`}>
                  Personalized
                </div>

                {/* Bottom part: Title and link */}
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                    <h3 className={`text-white font-sans ${designTheme === "minimalism" ? "text-base font-bold uppercase tracking-wider" : "text-lg font-semibold"
                      }`}>
                      Customized Itineraries
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 font-normal leading-relaxed mb-4 group-hover:text-zinc-300 transition-colors duration-300">
                    Every journey is crafted specifically for you, matching your travel style, budget, interests, and pace.
                  </p>
                </div>

                {/* Subtle line indicator matching other cards */}
                {designTheme === "minimalism" ? (
                  <div className="absolute top-0 right-0 w-2 h-[1px] bg-white/30 group-hover:w-8 transition-all duration-500" />
                ) : (
                  <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
              </div>
            </motion.div>

            {/* Card 2: Best Value */}
            <motion.div
              variants={fadeInUp}
              className={`group relative transition-all duration-300 backdrop-blur-xl flex flex-col justify-between min-h-[300px] overflow-hidden ${designTheme === "minimalism"
                ? "bg-white/5 border border-white/10 hover:border-white/20 p-5 rounded-none"
                : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 p-6 rounded-[24px]"
                }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-transparent to-black/80 pointer-events-none" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                {/* Top part: Badge */}
                <div className={`px-3 py-1 rounded-full border text-[10px] uppercase font-bold tracking-wider text-zinc-400 self-start font-mono ${designTheme === "minimalism" ? "rounded-none border-white/20" : "border-white/10 bg-zinc-900/40"
                  }`}>
                  Value
                </div>

                {/* Bottom part: Title and content */}
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                    <h3 className={`text-white font-sans ${designTheme === "minimalism" ? "text-base font-bold uppercase tracking-wider" : "text-lg font-semibold"
                      }`}>
                      Premium Experiences at Competitive Prices
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 font-normal leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    Get luxury travel without compromise. Best rates with zero hidden costs and transparent pricing.
                  </p>
                </div>

                {/* Subtle line indicator matching other cards */}
                {designTheme === "minimalism" ? (
                  <div className="absolute top-0 right-0 w-2 h-[1px] bg-white/30 group-hover:w-8 transition-all duration-500" />
                ) : (
                  <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
              </div>
            </motion.div>

            {/* Card 3: Reliable Support */}
            <motion.div
              variants={fadeInUp}
              className={`group relative transition-all duration-300 backdrop-blur-xl flex flex-col justify-between min-h-[300px] overflow-hidden ${designTheme === "minimalism"
                ? "bg-white/5 border border-white/10 hover:border-white/20 p-5 rounded-none"
                : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 p-6 rounded-[24px]"
                }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-transparent to-black/80 pointer-events-none" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                {/* Top part: Badge */}
                <div className={`px-3 py-1 rounded-full border text-[10px] uppercase font-bold tracking-wider text-zinc-400 self-start font-mono ${designTheme === "minimalism" ? "rounded-none border-white/20" : "border-white/10 bg-zinc-900/40"
                  }`}>
                  Support
                </div>

                {/* Bottom part: Title and content */}
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                    <h3 className={`text-white font-sans ${designTheme === "minimalism" ? "text-base font-bold uppercase tracking-wider" : "text-lg font-semibold"
                      }`}>
                      24×7 Travel Assistance
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 font-normal leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    From your first inquiry until you return home, our dedicated experts are always available to help.
                  </p>
                </div>

                {/* Subtle line indicator matching other cards */}
                {designTheme === "minimalism" ? (
                  <div className="absolute top-0 right-0 w-2 h-[1px] bg-white/30 group-hover:w-8 transition-all duration-500" />
                ) : (
                  <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
              </div>
            </motion.div>

            {/* Card 4: Safety & Comfort */}
            <motion.div
              variants={fadeInUp}
              className={`group relative transition-all duration-300 backdrop-blur-xl flex flex-col justify-between min-h-[300px] overflow-hidden ${designTheme === "minimalism"
                ? "bg-white/5 border border-white/10 hover:border-white/20 p-5 rounded-none"
                : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 p-6 rounded-[24px]"
                }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-transparent to-black/80 pointer-events-none" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                {/* Top part: Badge */}
                <div className={`px-3 py-1 rounded-full border text-[10px] uppercase font-bold tracking-wider text-zinc-400 self-start font-mono ${designTheme === "minimalism" ? "rounded-none border-white/20" : "border-white/10 bg-zinc-900/40"
                  }`}>
                  Safety
                </div>

                {/* Bottom part: Title and content */}
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                    <h3 className={`text-white font-sans ${designTheme === "minimalism" ? "text-base font-bold uppercase tracking-wider" : "text-lg font-semibold"
                      }`}>
                      Peace of Mind, Always
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 font-normal leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    Your comfort, safety, and peace of mind remain our highest priority. Travel with confidence.
                  </p>
                </div>

                {/* Subtle line indicator matching other cards */}
                {designTheme === "minimalism" ? (
                  <div className="absolute top-0 right-0 w-2 h-[1px] bg-white/30 group-hover:w-8 transition-all duration-500" />
                ) : (
                  <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* SECTION 4: Testimonial & Metric Showcase */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          id="testimonial-metric-section"
          className={`w-full max-w-[1360px] mt-12 bg-transparent relative overflow-hidden transition-all duration-500 p-6 md:p-12`}
        >
          {/* Subtle elegant background ambient blue glow */}
          <div className="absolute -right-40 -bottom-40 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

          {/* Grid Layout: Left is Image, Right is Testimonial Card */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">

            {/* Left Side: Professional Portrait */}
            <motion.div variants={fadeInUp} className="lg:col-span-4 flex justify-center items-center">
              <div className={`relative w-full aspect-[4/5] overflow-hidden ${designTheme === "minimalism" ? "rounded-none" : "rounded-[24px]"
                }`}>
                <img
                  src="https://res.cloudinary.com/djeoh00s4/image/upload/v1783691519/ChatGPT_Image_Jul_10_2026_07_06_20_PM_h4qq2h.png"
                  alt="Bernice Tay"
                  className="w-full h-full object-cover grayscale brightness-95 contrast-105 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Elegant overlay shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Caption on Image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-sm font-bold tracking-wider font-sans uppercase">Bernice Tay</p>
                  <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest mt-0.5">Founder, Omni Academy</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Blue Gradient Testimonial & Metrics Card */}
            <motion.div
              variants={fadeInUp}
              className={`lg:col-span-8 flex flex-col justify-between p-8 md:p-12 relative overflow-hidden transition-all duration-500 bg-white/5 backdrop-blur-xl border border-white/10 ${designTheme === "minimalism" ? "rounded-none" : "rounded-[24px]"
                }`}
            >
              {/* Inner ambient blue glow behind metrics */}
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

              {/* Quote Block */}
              <div className="relative z-10 max-w-3xl mb-12">
                <span className="text-blue-500 text-2xl font-serif italic mb-4 block select-none">“</span>
                <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-[26px] font-bold leading-snug uppercase tracking-tight font-sans">
                  “Wanderlust transformed my India trip into an unforgettable journey. Every moment was perfectly planned, yet felt spontaneous and magical.”
                </p>
              </div>

              {/* Footer part with Metrics & Author */}
              <div className="relative z-10 mt-auto">
                {/* 3 Metrics Row */}
                <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-white/10 pt-8 mb-8 font-sans">
                  <div>
                    <span className="block text-2xl sm:text-3xl md:text-[42px] font-bold text-white tracking-tight leading-none mb-2">
                      5000+
                    </span>
                    <span className="block text-[10px] uppercase tracking-widest text-zinc-400 font-mono font-medium">
                      Happy Travelers
                    </span>
                  </div>

                  <div>
                    <span className="block text-2xl sm:text-3xl md:text-[42px] font-bold text-white tracking-tight leading-none mb-2">
                      50+
                    </span>
                    <span className="block text-[10px] uppercase tracking-widest text-zinc-400 font-mono font-medium">
                      Curated Destinations
                    </span>
                  </div>

                  <div>
                    <span className="block text-2xl sm:text-3xl md:text-[42px] font-bold text-white tracking-tight leading-none mb-2">
                      4.9⭐
                    </span>
                    <span className="block text-[10px] uppercase tracking-widest text-zinc-400 font-mono font-medium">
                      Average Rating
                    </span>
                  </div>
                </div>

                {/* Author Block */}
                <div className="flex flex-col font-sans">
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">
                    — Priya Sharma
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono mt-1">
                    Honeymoon Traveler, Delhi
                  </span>
                </div>
              </div>

              {/* Accent Line Indicator to match banner cards */}
              {designTheme === "minimalism" ? (
                <div className="absolute top-0 right-0 w-2 h-[1px] bg-white/30 group-hover:w-8 transition-all duration-500" />
              ) : (
                <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
            </motion.div>

          </div>
        </motion.div>

        {/* SECTION 6: Popular Experiences */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          id="popular-experiences-section"
          className={`w-full max-w-[1360px] mt-12 bg-transparent relative overflow-hidden transition-all duration-500 p-8 md:p-16 flex flex-col justify-center`}
        >
          {/* Subtitle and Heading */}
          <motion.div variants={fadeInUp} className="w-full text-center max-w-3xl mx-auto mb-12 z-10">
            <span className="text-blue-400 text-xs tracking-widest font-mono uppercase mb-4 block font-bold">
              Explore India
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[54px] leading-[1.18] tracking-tight text-white mb-4 font-sans font-bold">
              India’s Most Loved Experiences
            </h2>
            <p className="text-zinc-400 text-sm font-normal leading-relaxed max-w-xl font-sans mx-auto">
              Every destination has a different story waiting to be discovered. Choose your adventure.
            </p>
          </motion.div>

          {/* 4-Column Experience Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z-10">
            {/* Himalayan Escapes */}
            <motion.div
              variants={fadeInUp}
              className={`group relative transition-all duration-300 backdrop-blur-xl flex flex-col justify-between p-6 min-h-[280px] ${designTheme === "minimalism"
                ? "bg-white/5 border border-white/10 hover:border-white/20 rounded-none"
                : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-[24px]"
                }`}
            >
              <div>
                <h3 className="text-2xl mb-2 font-sans font-bold text-white">🏔️</h3>
                <h4 className={`text-white mb-2 ${designTheme === "minimalism" ? "text-base font-bold uppercase tracking-wider" : "text-lg font-semibold"
                  }`}>
                  Himalayan Escapes
                </h4>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  Experience snow-capped mountains, peaceful valleys, and unforgettable road trips across Himachal, Kashmir, and Uttarakhand.
                </p>
              </div>
              {designTheme === "minimalism" ? (
                <div className="absolute top-0 right-0 w-2 h-[1px] bg-white/30 group-hover:w-8 transition-all duration-500" />
              ) : (
                <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
            </motion.div>

            {/* Coastal Getaways */}
            <motion.div
              variants={fadeInUp}
              className={`group relative transition-all duration-300 backdrop-blur-xl flex flex-col justify-between p-6 min-h-[280px] ${designTheme === "minimalism"
                ? "bg-white/5 border border-white/10 hover:border-white/20 rounded-none"
                : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-[24px]"
                }`}
            >
              <div>
                <h3 className="text-2xl mb-2 font-sans font-bold text-white">🏖️</h3>
                <h4 className={`text-white mb-2 ${designTheme === "minimalism" ? "text-base font-bold uppercase tracking-wider" : "text-lg font-semibold"
                  }`}>
                  Coastal Getaways
                </h4>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  Relax on pristine beaches, enjoy vibrant nightlife, and experience luxurious resorts in Goa, Kerala, and the Andaman Islands.
                </p>
              </div>
              {designTheme === "minimalism" ? (
                <div className="absolute top-0 right-0 w-2 h-[1px] bg-white/30 group-hover:w-8 transition-all duration-500" />
              ) : (
                <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
            </motion.div>

            {/* Heritage Journeys */}
            <motion.div
              variants={fadeInUp}
              className={`group relative transition-all duration-300 backdrop-blur-xl flex flex-col justify-between p-6 min-h-[280px] ${designTheme === "minimalism"
                ? "bg-white/5 border border-white/10 hover:border-white/20 rounded-none"
                : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-[24px]"
                }`}
            >
              <div>
                <h3 className="text-2xl mb-2 font-sans font-bold text-white">🏛️</h3>
                <h4 className={`text-white mb-2 ${designTheme === "minimalism" ? "text-base font-bold uppercase tracking-wider" : "text-lg font-semibold"
                  }`}>
                  Heritage Journeys
                </h4>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  Walk through centuries of history while exploring Rajasthan's royal palaces, Agra's timeless monuments, and India's cultural treasures.
                </p>
              </div>
              {designTheme === "minimalism" ? (
                <div className="absolute top-0 right-0 w-2 h-[1px] bg-white/30 group-hover:w-8 transition-all duration-500" />
              ) : (
                <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
            </motion.div>

            {/* Nature & Wildlife */}
            <motion.div
              variants={fadeInUp}
              className={`group relative transition-all duration-300 backdrop-blur-xl flex flex-col justify-between p-6 min-h-[280px] ${designTheme === "minimalism"
                ? "bg-white/5 border border-white/10 hover:border-white/20 rounded-none"
                : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-[24px]"
                }`}
            >
              <div>
                <h3 className="text-2xl mb-2 font-sans font-bold text-white">🌿</h3>
                <h4 className={`text-white mb-2 ${designTheme === "minimalism" ? "text-base font-bold uppercase tracking-wider" : "text-lg font-semibold"
                  }`}>
                  Nature & Wildlife
                </h4>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  Reconnect with nature through jungle safaris, waterfalls, hill stations, and national parks filled with incredible wildlife.
                </p>
              </div>
              {designTheme === "minimalism" ? (
                <div className="absolute top-0 right-0 w-2 h-[1px] bg-white/30 group-hover:w-8 transition-all duration-500" />
              ) : (
                <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
            </motion.div>
          </div>
        </motion.div>

      </main>



    </div>
  );
}
