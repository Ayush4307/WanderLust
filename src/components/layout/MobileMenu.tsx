import { motion, AnimatePresence } from "motion/react";

export default function MobileMenu({ isMenuOpen, setIsMenuOpen, navItems, currentTab, handleNavClick }: any) {
  return (
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  key="menu-overlay"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col"
                >
                  {/* Close button */}
                  <div className="flex justify-between items-center px-8 py-6 border-b border-white/10">
                    <span className="text-white font-semibold tracking-widest text-xs uppercase">WanderLust</span>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="Close menu"
                      className="text-white/60 hover:text-white transition-colors text-2xl leading-none"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Nav Links */}
                  <nav className="flex flex-col justify-center flex-1 px-10 gap-2">
                    {navItems.map((item, i) => (
                      <motion.button
                        key={item}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
                        onClick={() => { handleNavClick(item); setIsMenuOpen(false); }}
                        className={`text-left text-4xl md:text-5xl font-semibold py-3 border-b border-white/10 transition-colors ${
                          currentTab === item ? "text-white" : "text-white/40 hover:text-white"
                        }`}
                      >
                        {item}
                      </motion.button>
                    ))}
                  </nav>

                  {/* Footer hint */}
                  <div className="px-10 py-6 text-white/30 text-xs tracking-widest uppercase">
                    Explore the world with WanderLust
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
  );
}
