import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Compass, Calendar, Users, Sparkles, ArrowRight } from "lucide-react";

interface PlanTripModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const destinationsList = [
  { id: "himalayas", name: "Himalayas", subtitle: "Mountains & Valleys", icon: "🏔️" },
  { id: "kashmir", name: "Kashmir", subtitle: "Paradise on Earth", icon: "❄️" },
  { id: "goa", name: "Goa & Coast", subtitle: "Sun, Sand & Luxury", icon: "🏖️" },
  { id: "rajasthan", name: "Rajasthan", subtitle: "Royal Palaces & Forts", icon: "🏛️" },
  { id: "kerala", name: "Kerala", subtitle: "Backwaters & Ayurveda", icon: "🌴" },
  { id: "wildlife", name: "National Parks", subtitle: "Jungle Safaris & Tigers", icon: "🐅" },
];

const durationOptions = ["3–5 Days", "7–10 Days", "14+ Days"];
const travelStyles = ["Luxury Resort", "Adventure & Trek", "Cultural Heritage", "Relaxed Leisure"];

export default function PlanTripModal({ isOpen, onClose }: PlanTripModalProps) {
  const [selectedDestination, setSelectedDestination] = useState<string>("himalayas");
  const [selectedDuration, setSelectedDuration] = useState<string>("7–10 Days");
  const [selectedStyle, setSelectedStyle] = useState<string>("Luxury Resort");
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [travelerName, setTravelerName] = useState<string>("");
  const [travelerContact, setTravelerContact] = useState<string>("");

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-2xl bg-zinc-950/95 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 text-white z-10 my-8 overflow-hidden backdrop-blur-2xl"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                    Custom Trip Planner
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
                    WanderLust Concierge
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center justify-center relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mb-5 animate-pulse">
                  <Check size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Itinerary Request Received!</h4>
                <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{travelerName || "fellow traveler"}</span>! Our luxury travel curator is crafting a tailor-made plan for your {selectedDuration} trip to {destinationsList.find(d => d.id === selectedDestination)?.name}.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors shadow-lg"
                >
                  Back to Experience
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-6 relative z-10">
                {/* 1. Destination Select */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                    <Compass size={14} className="text-blue-400" />
                    1. Choose Destination
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {destinationsList.map((dest) => {
                      const isSelected = selectedDestination === dest.id;
                      return (
                        <button
                          key={dest.id}
                          type="button"
                          onClick={() => setSelectedDestination(dest.id)}
                          className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                            isSelected
                              ? "bg-blue-500/15 border-blue-400/80 shadow-md shadow-blue-500/10 text-white"
                              : "bg-white/[0.03] border-white/10 hover:border-white/25 text-zinc-300"
                          }`}
                        >
                          <span className="text-xl mb-1">{dest.icon}</span>
                          <span className="text-xs font-bold leading-tight block">{dest.name}</span>
                          <span className="text-[10px] text-zinc-500 font-mono leading-none mt-0.5">{dest.subtitle}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Duration & Style */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                      <Calendar size={14} className="text-blue-400" />
                      2. Trip Duration
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {durationOptions.map((duration) => (
                        <button
                          key={duration}
                          type="button"
                          onClick={() => setSelectedDuration(duration)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                            selectedDuration === duration
                              ? "bg-white text-black border-white font-semibold"
                              : "bg-white/5 text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
                          }`}
                        >
                          {duration}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                      <Users size={14} className="text-blue-400" />
                      3. Travelers Count
                    </label>
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-3 py-1 w-fit">
                      <button
                        type="button"
                        onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                        className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold min-w-8 text-center">{guestsCount} {guestsCount === 1 ? "Guest" : "Guests"}</span>
                      <button
                        type="button"
                        onClick={() => setGuestsCount(guestsCount + 1)}
                        className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* 3. Style Select */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 block">
                    4. Preferred Travel Style
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {travelStyles.map((style) => (
                      <button
                        key={style}
                        type="button"
                        onClick={() => setSelectedStyle(style)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                          selectedStyle === style
                            ? "bg-blue-500/20 text-blue-300 border-blue-400/60 font-semibold"
                            : "bg-white/5 text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/10">
                  <input
                    type="text"
                    required
                    placeholder="Your Name (e.g. Priya Sharma)"
                    value={travelerName}
                    onChange={(e) => setTravelerName(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-400/70 transition-colors"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Phone or Email (for itinerary)"
                    value={travelerContact}
                    onChange={(e) => setTravelerContact(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-400/70 transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-zinc-500 font-mono">
                    ✦ Free 24h custom itinerary curated by experts
                  </span>
                  <button
                    type="submit"
                    className="group bg-white hover:bg-zinc-100 text-black px-6 py-3 rounded-full font-bold text-xs tracking-wide flex items-center gap-2 transition-all shadow-lg hover:shadow-white/20 active:scale-95"
                  >
                    <span>Request Itinerary</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}