import { useState } from "react";
import CanvasBackground from "./components/layout/CanvasBackground";
import Header from "./components/layout/Header";
import MobileMenu from "./components/layout/MobileMenu";
import HeroSection from "./components/sections/HeroSection";
import Destinations from "./components/sections/Destinations";
import Experiences from "./components/sections/Experiences";
import Testimonials from "./components/sections/Testimonials";
import { motion, AnimatePresence, Variants } from "motion/react";

type NavItem = "Home" | "Destinations" | "Experiences" | "About us" | "Contact";
type SectionIdMap = Record<NavItem, string>;

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
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
  const [currentTab, setCurrentTab] = useState<NavItem>("Home");
  const [showHelperOverlay, setShowHelperOverlay] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Renamed to fit the WanderLust travel theme
  const navItems: NavItem[] = ["Home", "Destinations", "Experiences", "About us", "Contact"];

  const sectionIds: SectionIdMap = {
    Home: "sunrock-banner-container",
    Destinations: "trusted-leaders-section",
    Experiences: "why-travel-section",
    "About us": "testimonial-metric-section",
    Contact: "testimonial-metric-section",
  };

  const handleNavClick = (item: NavItem) => {
    setCurrentTab(item);
    const elementId = sectionIds[item];

    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Optimized padding classes to fit everything in 900px perfectly with zero scroll
  const paddingClasses = {
    compact: "py-4 px-6 md:py-6 md:px-8",
    standard: "py-6 px-8 md:py-8 md:px-14",
    spacious: "py-8 px-10 md:py-10 md:px-18",
  };

  return (
    <div className="bg-black text-white font-sans antialiased selection:bg-white selection:text-black min-h-screen relative overflow-x-hidden">


      <CanvasBackground />

      {/* Main Content Container - Scrolls naturally over the fixed canvas */}
      <main className="relative z-10 w-full flex flex-col items-center px-4 md:px-12 py-4 gap-24">

        {/* Banner Section wrapper with solid black background, pure white accents, DM sans */}
        {/* EXACT HEIGHT SPECIFICATION: 760px compact banner section for first-fold visibility */}
        <div
          id="sunrock-banner-container"
          className={`w-full max-w-[1360px] min-h-[90vh] bg-transparent relative overflow-hidden transition-all duration-500 flex flex-col ${designTheme === "minimalism"
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
            <Header 
              designTheme={designTheme} 
              currentTab={currentTab} 
              handleNavClick={handleNavClick} 
              showHelperOverlay={showHelperOverlay} 
              setIsMenuOpen={setIsMenuOpen} 
              navItems={navItems} 
            />

            <MobileMenu 
              isMenuOpen={isMenuOpen} 
              setIsMenuOpen={setIsMenuOpen} 
              navItems={navItems} 
              currentTab={currentTab} 
              handleNavClick={handleNavClick} 
            />

            <HeroSection 
              staggerContainer={staggerContainer} 
              alignment={alignment} 
              showHelperOverlay={showHelperOverlay} 
              designTheme={designTheme} 
              fadeInUp={fadeInUp} 
              cardGlow={cardGlow}
            />
          </div>
        </div>

        <Destinations staggerContainer={staggerContainer} fadeInUp={fadeInUp} />
        <Experiences staggerContainer={staggerContainer} fadeInUp={fadeInUp} designTheme={designTheme} />
        <Testimonials staggerContainer={staggerContainer} fadeInUp={fadeInUp} designTheme={designTheme} />

      </main>
    </div>
  );
}