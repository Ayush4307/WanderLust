import os

with open('C:\\WanderLust\\src\\App.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

def get_lines(start_idx, end_idx):
    return "".join(lines[start_idx:end_idx])

header_start = 187
header_end = 288
header_content = get_lines(header_start, header_end)

mobile_menu_start = 290
mobile_menu_end = 336
mobile_menu_content = get_lines(mobile_menu_start, mobile_menu_end)

hero_start = 341
hero_end = 524
hero_content = get_lines(hero_start, hero_end)

destinations_start = 529
destinations_end = 605
destinations_content = get_lines(destinations_start, destinations_end)

experiences_start = 607
experiences_end = 796
experiences_content = get_lines(experiences_start, experiences_end)

testimonials_start = 798
testimonials_end = 903
testimonials_content = get_lines(testimonials_start, testimonials_end)

popular_experiences_start = 905
popular_experiences_end = 1029
popular_experiences_content = get_lines(popular_experiences_start, popular_experiences_end)

header_file = """import { motion, AnimatePresence } from "motion/react";

export default function Header({ designTheme, currentTab, handleNavClick, showHelperOverlay, setIsMenuOpen, navItems }: any) {
  return (
""" + header_content + """  );
}
"""

mobile_menu_file = """import { motion, AnimatePresence } from "motion/react";

export default function MobileMenu({ isMenuOpen, setIsMenuOpen, navItems, currentTab, handleNavClick }: any) {
  return (
""" + mobile_menu_content + """  );
}
"""

hero_file = """import { motion } from "motion/react";
import { ArrowUpRight, Zap, Globe } from "lucide-react";

export default function HeroSection({ staggerContainer, alignment, showHelperOverlay, designTheme, fadeInUp, cardGlow }: any) {
  return (
    <>
""" + hero_content + """    </>
  );
}
"""

destinations_file = """import { motion } from "motion/react";

export default function Destinations({ staggerContainer, fadeInUp }: any) {
  return (
""" + destinations_content + """  );
}
"""

experiences_file = """import { motion } from "motion/react";

export default function Experiences({ staggerContainer, fadeInUp, designTheme }: any) {
  return (
    <>
""" + experiences_content + popular_experiences_content + """    </>
  );
}
"""

testimonials_file = """import { motion } from "motion/react";

export default function Testimonials({ staggerContainer, fadeInUp, designTheme }: any) {
  return (
""" + testimonials_content + """  );
}
"""

os.makedirs('C:\\WanderLust\\src\\components\\layout', exist_ok=True)
os.makedirs('C:\\WanderLust\\src\\components\\sections', exist_ok=True)

with open('C:\\WanderLust\\src\\components\\layout\\Header.tsx', 'w', encoding='utf-8') as f: f.write(header_file)
with open('C:\\WanderLust\\src\\components\\layout\\MobileMenu.tsx', 'w', encoding='utf-8') as f: f.write(mobile_menu_file)
with open('C:\\WanderLust\\src\\components\\sections\\HeroSection.tsx', 'w', encoding='utf-8') as f: f.write(hero_file)
with open('C:\\WanderLust\\src\\components\\sections\\Destinations.tsx', 'w', encoding='utf-8') as f: f.write(destinations_file)
with open('C:\\WanderLust\\src\\components\\sections\\Experiences.tsx', 'w', encoding='utf-8') as f: f.write(experiences_file)
with open('C:\\WanderLust\\src\\components\\sections\\Testimonials.tsx', 'w', encoding='utf-8') as f: f.write(testimonials_file)

app_tsx_top = "".join(lines[:130])

app_tsx_middle = """
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
"""

imports = """import CanvasBackground from "./components/layout/CanvasBackground";
import Header from "./components/layout/Header";
import MobileMenu from "./components/layout/MobileMenu";
import HeroSection from "./components/sections/HeroSection";
import Destinations from "./components/sections/Destinations";
import Experiences from "./components/sections/Experiences";
import Testimonials from "./components/sections/Testimonials";
"""

with open('C:\\WanderLust\\src\\App.tsx', 'w', encoding='utf-8') as f:
    f.write(lines[0] + imports + "".join(lines[1:130]) + app_tsx_middle)

print("Done")
