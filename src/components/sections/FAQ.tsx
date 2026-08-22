import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Planning",
    question: "How does WanderLust create custom itineraries?",
    answer: "We begin with a personal consultation to understand your travel style, preferred pace, interests, and must-see experiences. Your dedicated curator then designs a seamless day-by-day itinerary with thoughtfully selected stays, private transport, and authentic local experiences, tailored entirely to you.",
  },
  {
    category: "Inclusions",
    question: "What is typically included in our luxury travel packages?",
    answer: "Our luxury packages include handpicked 4- and 5-star stays, private air-conditioned transport, expert English-speaking guides, daily breakfast, monument access, and 24/7 concierge support throughout your journey. Safari permits and other special experiences are arranged when included in your itinerary.",
  },
  {
    category: "Flexibility",
    question: "Can I modify or customize my trip while traveling?",
    answer: "Yes! Your 24×7 on-trip concierge is available via WhatsApp or direct phone call. Whether you want to add an extra day at a luxury heritage haveli, book a private sunset boat, or change dining reservations, we handle all real-time adjustments seamlessly.",
  },
  {
    category: "Safety",
    question: "What safety and emergency protocols are in place?",
    answer: "Your safety is paramount. All chauffeurs and local guides are background-checked and certified. We provide 24/7 real-time tracking support, verified emergency hospital networks in every destination, and comprehensive travel assistance throughout your journey.",
  },
  {
    category: "Booking",
    question: "What is your payment and cancellation policy?",
    answer: "We offer flexible booking with a minimal 25% deposit to lock in hotels and private transfers. Free date changes are available up to 14 days before departure, and our transparent 100% money-back guarantee applies to eligible cancellations.",
  },
];

type FAQProps = {
  staggerContainer: any;
  fadeInUp: any;
  designTheme?: "minimalism" | "reference";
};

export default function FAQ({ staggerContainer, fadeInUp, designTheme }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      id="faq-section"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="w-full max-w-[1360px] scroll-mt-24 px-6 md:px-12 py-12 relative overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <motion.div variants={fadeInUp} className="w-full text-center max-w-3xl mx-auto mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-3">
          <HelpCircle size={12} />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-[50px] leading-[1.15] tracking-tight text-white mb-4 font-sans font-bold">
          Everything You Need to Know
        </h2>
        <p className="text-zinc-400 text-sm font-normal leading-relaxed max-w-xl mx-auto font-sans">
          Have questions about planning your India expedition? Here are clear answers to how we craft effortless journeys.
        </p>
      </motion.div>

      {/* Accordion Container */}
      <motion.div variants={fadeInUp} className="w-full max-w-4xl mx-auto space-y-3 relative z-10">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={`transition-all duration-300 border backdrop-blur-xl overflow-hidden ${
                isOpen
                  ? "bg-white/[0.07] border-white/25 shadow-lg shadow-black/40"
                  : "bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.05]"
              } ${designTheme === "minimalism" ? "rounded-none" : "rounded-2xl"}`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer gap-4 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400">
                    {faq.category}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    {faq.question}
                  </span>
                </div>

                <div
                  className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180 text-white bg-white/15" : ""
                  }`}
                >
                  <ChevronDown size={14} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
