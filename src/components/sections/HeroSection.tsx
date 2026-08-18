import { motion } from "motion/react";
import { ArrowUpRight, Zap, Globe, Users } from "lucide-react";

export default function HeroSection({
  staggerContainer,
  alignment,
  showHelperOverlay,
  designTheme,
  fadeInUp,
  cardGlow,
  onOpenPlanModal,
}: any) {
  return (
    <>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`relative w-full max-w-5xl mx-auto flex flex-col justify-center z-10 ${alignment === "left" ? "text-left items-start" : "text-center items-center"
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
                Discover India's most breathtaking places with thoughtfully crafted travel experiences — from the Himalayas to Goa. We turn your trip ideas into unforgettable memories.
              </motion.p>

              {/* Call-to-action Action Hub */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 items-center">

                {designTheme === "minimalism" ? (
                  // Stark square button from the "Clean Minimalism" design schema
                  <button
                    type="button"
                    onClick={onOpenPlanModal}
                    className="bg-white hover:bg-zinc-200 text-black px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-none rounded-none flex items-center gap-2.5 group active:scale-95 shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer"
                  >
                    Plan Your Dream Vacation
                    <ArrowUpRight size={13} className="stroke-[3px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                ) : (
                  // Original reference pill styled button with blue circular icon
                  <button
                    type="button"
                    onClick={onOpenPlanModal}
                    className="group relative flex items-center justify-between gap-3 bg-white hover:bg-zinc-100 text-black px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-lg shadow-white/5 hover:shadow-white/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer"
                  >
                    <span className="text-[14px] tracking-tight pl-1 select-none">
                      Plan Your Dream Vacation
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#0052ff] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </div>
                  </button>
                )}

                {designTheme === "minimalism" && (
                  <button
                    type="button"
                    onClick={onOpenPlanModal}
                    className="text-xs font-bold uppercase tracking-[0.2em] border-b border-white/60 hover:border-white pb-1.5 px-1 text-white/80 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer"
                  >
                    Talk to Our Travel Experts
                  </button>
                )}
              </motion.div>

            </motion.div>

            {/* Spacer to push the cards to the bottom */}
            <div className="min-h-8 flex-1" />

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
    </>
  );
}