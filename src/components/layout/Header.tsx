import { motion, AnimatePresence } from "motion/react";
import type { NavItem } from "../../types/navigation";

type HeaderProps = {
  designTheme: "minimalism" | "reference";
  currentTab: NavItem;
  handleNavClick: (item: NavItem) => void;
  showHelperOverlay: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  navItems: NavItem[];
};

export default function Header({ designTheme, currentTab, handleNavClick, showHelperOverlay, setIsMenuOpen, navItems }: HeaderProps) {
  return (
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
                <nav aria-label="Primary navigation" className="hidden md:flex gap-10 justify-center items-center text-left absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 whitespace-nowrap flex-row flex-nowrap">
                  {showHelperOverlay && (
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[9px] font-mono bg-white text-black px-1 uppercase tracking-widest">Minimalist Menu</span>
                  )}
                  {navItems.slice(0, 4).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handleNavClick(item)}
                      aria-current={currentTab === item ? "page" : undefined}
                      className="flex flex-col cursor-pointer group/nav shrink-0 whitespace-nowrap text-left"
                    >
                      <span className="text-[8px] tracking-widest text-white/30 uppercase mb-0.5 font-mono transition-colors group-hover/nav:text-white/60">
                        {item === "Home" ? "01" : item === "Destinations" ? "02" : item === "Experiences" ? "03" : "04"}
                      </span>
                      <span className={`text-xs font-semibold uppercase tracking-wider transition-all ${currentTab === item ? "text-white border-b border-white pb-0.5" : "text-white/60 hover:text-white"
                        }`}>
                        {item}
                      </span>
                    </button>
                  ))}
                </nav>
              ) : (
                // Classic Reference Nav Pills - Absolutely centered with beautiful transparent blur in one single line
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 hidden md:flex justify-center items-center">
                  <nav aria-label="Primary navigation" className="flex flex-row flex-nowrap items-center gap-1 bg-zinc-950/45 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-lg relative whitespace-nowrap">
                    {showHelperOverlay && (
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[9px] font-mono bg-white text-black px-1 uppercase tracking-widest">Pill Menu</span>
                    )}
                    {navItems.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleNavClick(item)}
                        aria-current={currentTab === item ? "page" : undefined}
                        className={`relative px-4.5 py-1 rounded-full text-xs font-medium transition-colors duration-300 shrink-0 whitespace-nowrap ${
                          currentTab === item
                            ? "text-black font-semibold"
                            : "text-zinc-400 hover:text-white"
                        }`}>
                        {currentTab === item && (
                          <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-white rounded-full shadow-sm"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            style={{ zIndex: 0 }}
                          />
                        )}
                        <span className="relative z-10">{item}</span>
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

                <button
                  onClick={() => setIsMenuOpen(true)}
                  className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-all flex items-center gap-2 shrink-0 ${designTheme === "minimalism"
                    ? "border border-white/20 hover:border-white px-5 py-2 rounded-none bg-transparent hover:bg-white hover:text-black"
                    : "bg-white/[0.04] backdrop-blur-md hover:bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-zinc-300 hover:text-white"
                  }`}
                >
                  <span>Menu</span>
                  <span className="flex flex-col gap-[3px]">
                    <span className="block w-3 h-[1.5px] bg-current"></span>
                    <span className="block w-3 h-[1.5px] bg-current"></span>
                  </span>
                </button>
              </div>

            </header>
  );
}
