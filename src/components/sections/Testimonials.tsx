import { motion } from "motion/react";

export default function Testimonials({ staggerContainer, fadeInUp, designTheme }: any) {
  return (
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
  );
}