import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Calendar, MapPin, Sparkles } from "lucide-react";

interface DestinationItem {
  id: string;
  category: "mountains" | "beaches" | "heritage" | "wildlife";
  icon: string;
  title: string;
  description: string;
  duration: string;
  bestSeason: string;
  regions: string;
  popularPicks: string[];
}

const destinationsData: DestinationItem[] = [
  {
    id: "himalayas",
    category: "mountains",
    icon: "🏔️",
    title: "Himalayan Escapes",
    description: "Experience snow-capped mountains, peaceful valleys, and unforgettable road trips across Himachal, Kashmir, and Uttarakhand.",
    duration: "6–9 Days",
    bestSeason: "Oct – May",
    regions: "Himachal · Kashmir · Ladakh",
    popularPicks: ["Gulmarg Gondola", "Manali Valley", "Spiti Pass"],
  },
  {
    id: "coastal",
    category: "beaches",
    icon: "🏖️",
    title: "Coastal Getaways",
    description: "Relax on pristine beaches, enjoy vibrant nightlife, and experience luxurious resorts in Goa, Kerala, and the Andaman Islands.",
    duration: "5–8 Days",
    bestSeason: "Nov – Apr",
    regions: "Goa · Kerala · Andamans",
    popularPicks: ["Private Catamaran", "Alleppey Houseboat", "Havelock Beach"],
  },
  {
    id: "heritage",
    category: "heritage",
    icon: "🏛️",
    title: "Heritage Journeys",
    description: "Walk through centuries of history while exploring Rajasthan's royal palaces, Agra's timeless monuments, and India's cultural treasures.",
    duration: "7–10 Days",
    bestSeason: "Oct – Mar",
    regions: "Jaipur · Udaipur · Agra · Varanasi",
    popularPicks: ["Amber Palace Tour", "Taj Sunset View", "Varanasi Aarti"],
  },
  {
    id: "wildlife",
    category: "wildlife",
    icon: "🌿",
    title: "Nature & Wildlife",
    description: "Reconnect with nature through jungle safaris, waterfalls, hill stations, and national parks filled with incredible wildlife.",
    duration: "4–7 Days",
    bestSeason: "Oct – Jun",
    regions: "Ranthambore · Jim Corbett · Kaziranga",
    popularPicks: ["Tiger Safari", "Tea Estate Stays", "Elephant Trails"],
  },
];

const categoryFilters = [
  { id: "all", label: "All Destinations", icon: "✨" },
  { id: "mountains", label: "Mountains", icon: "🏔️" },
  { id: "beaches", label: "Beaches", icon: "🏖️" },
  { id: "heritage", label: "Heritage", icon: "🏛️" },
  { id: "wildlife", label: "Wildlife", icon: "🌿" },
];

export default function Experiences({ staggerContainer, fadeInUp, designTheme }: any) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredDestinations = activeCategory === "all"
    ? destinationsData
    : destinationsData.filter((dest) => dest.category === activeCategory);

  return (
    <>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          id="why-travel-section"
          className={`w-full max-w-[1360px] mt-8 scroll-mt-6 md:scroll-mt-8 bg-transparent relative overflow-hidden transition-all duration-500 flex flex-col justify-center items-start px-6 py-4 md:px-12 md:py-6`}
        >
          {/* Headline block aligned to top-left */}
          <motion.div variants={fadeInUp} className="w-full text-left max-w-5xl mb-8 z-10">
            <span className="text-blue-400 text-xs tracking-widest font-mono uppercase mb-3 block font-bold">
              Why WanderLust
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[50px] leading-[1.15] tracking-tight text-white mb-4 font-sans">
              <span className="inline-block text-blue-400 mr-2 select-none font-bold">✦</span>
              <span className="font-bold text-white">Travel Beyond Destinations — Designed </span>
              <span className={`inline-block px-4.5 py-0.5 rounded-full mx-1 text-2xl sm:text-3xl md:text-[42px] align-middle font-bold border uppercase tracking-wider ${designTheme === "minimalism"
                ? "bg-transparent border-white/30 rounded-none"
                : "bg-zinc-900 border-white/10"
                }`}>
                around you
              </span>
            </h2>
            <p className="text-zinc-400 text-sm font-normal leading-relaxed max-w-xl font-sans mt-3">
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
          className={`w-full max-w-[1360px] mt-12 scroll-mt-24 md:scroll-mt-32 bg-transparent relative overflow-hidden transition-all duration-500 p-8 md:p-16 flex flex-col justify-center`}
        >
          {/* Subtitle and Heading */}
          <motion.div variants={fadeInUp} className="w-full text-center max-w-3xl mx-auto mb-8 z-10">
            <span className="text-blue-400 text-xs tracking-widest font-mono uppercase mb-3 block font-bold">
              Explore India
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[54px] leading-[1.18] tracking-tight text-white mb-4 font-sans font-bold">
              India’s Most Loved Experiences
            </h2>
            <p className="text-zinc-400 text-sm font-normal leading-relaxed max-w-xl font-sans mx-auto">
              Every destination has a different story waiting to be discovered. Filter by your preferred journey type.
            </p>
          </motion.div>

          {/* Interactive Category Filter Pills */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center items-center gap-2 mb-10 z-10">
            {categoryFilters.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? "bg-white text-black border-white shadow-lg shadow-white/10 scale-105"
                      : "bg-white/5 text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Animated Destination Cards Grid */}
          <motion.div
            layout
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredDestinations.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative transition-all duration-300 backdrop-blur-xl flex flex-col justify-between p-6 min-h-[340px] ${designTheme === "minimalism"
                    ? "bg-white/5 border border-white/10 hover:border-white/20 rounded-none"
                    : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-[24px]"
                    }`}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {/* Top Badges: Icon + Duration */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl">{item.icon}</span>
                        <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-[10px] font-mono text-blue-300">
                          <Calendar size={11} />
                          <span>{item.duration}</span>
                        </div>
                      </div>

                      <h4 className={`text-white mb-2 ${designTheme === "minimalism" ? "text-base font-bold uppercase tracking-wider" : "text-lg font-semibold"
                        }`}>
                        {item.title}
                      </h4>

                      <p className="text-xs text-zinc-400 font-normal leading-relaxed mb-4 group-hover:text-zinc-300 transition-colors duration-300">
                        {item.description}
                      </p>

                      {/* Location Regions */}
                      <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-mono mb-3">
                        <MapPin size={11} className="text-blue-400 shrink-0" />
                        <span>{item.regions}</span>
                      </div>
                    </div>

                    {/* Season Tag & Popular Picks */}
                    <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                        <span className="text-zinc-500">Ideal Season:</span>
                        <span className="text-white font-medium">{item.bestSeason}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.popularPicks.slice(0, 2).map((pick) => (
                          <span
                            key={pick}
                            className="text-[9px] bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded-md text-zinc-400 font-mono"
                          >
                            ✦ {pick}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {designTheme === "minimalism" ? (
                    <div className="absolute top-0 right-0 w-2 h-[1px] bg-white/30 group-hover:w-8 transition-all duration-500" />
                  ) : (
                    <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
    </>
  );
}


