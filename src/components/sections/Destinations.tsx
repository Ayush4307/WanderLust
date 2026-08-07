import { motion } from "motion/react";

export default function Destinations({ staggerContainer, fadeInUp }: any) {
  return (
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
  );
}