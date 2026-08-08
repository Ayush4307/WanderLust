import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { NavItem } from "../../types/navigation";

type MobileMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  navItems: NavItem[];
  currentTab: NavItem;
  handleNavClick: (item: NavItem) => void;
};

export default function MobileMenu({ isMenuOpen, setIsMenuOpen, navItems, currentTab, handleNavClick }: MobileMenuProps) {
  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen, setIsMenuOpen]);

  return (
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  key="menu-overlay"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  role="dialog"
                  aria-modal="true"
                  aria-label="Mobile navigation menu"
                  className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col"
                >
                  {/* Close button */}
                  <div className="flex justify-between items-center px-8 py-6 border-b border-white/10">
                    <span className="text-white font-semibold tracking-widest text-xs uppercase">WANDERLUST</span>
                    <button
                      type="button"
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="Close menu"
                      className="text-white/60 hover:text-white transition-colors text-2xl leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
                        className={`text-left text-4xl md:text-5xl font-semibold py-3 border-b border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                          currentTab === item ? "text-white" : "text-white/40 hover:text-white"
                        }`}
                      >
                          {item}
                      </motion.button>
                    ))}
                  </nav>

                  {/* Footer hint */}
                  <div className="px-10 py-6 text-white/30 text-xs tracking-widest uppercase">
                    Explore the world with WANDERLUST
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
  );
}
