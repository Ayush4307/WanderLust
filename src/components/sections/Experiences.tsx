import { motion } from "motion/react";

export default function Experiences({ staggerContainer, fadeInUp, designTheme }: any) {
  return (
    <>
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
    </>
  );
}
