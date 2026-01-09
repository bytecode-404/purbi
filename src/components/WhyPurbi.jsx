import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";

function WhyPurbi() {
  const missionItems = [
    "Sustainable economic empowerment through skills & enterprise",
    "Preserve cultural heritage on global platforms",
    "Foster international trade & knowledge ecosystems",
    "Inclusive growth aligned with social sustainability",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <Section id="why-purbi" className="relative overflow-hidden py-24 sm:py-32 bg-[#fffcf7]">
      {/* Refined Background Gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.2] [background:radial-gradient(1000px_circle_at_0%_0%,rgba(212,175,55,0.25),transparent_60%),radial-gradient(1000px_circle_at_100%_100%,rgba(20,48,69,0.15),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header - Balanced & Authoritative */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
             <div className="h-[1px] w-12 bg-[color:var(--color-gold)]" />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[color:var(--color-gold)]">
               Our Purpose
             </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[color:var(--color-brand)] leading-[1.1]">
            Where you are born shouldn't <br className="hidden sm:block" />
            <span className="text-[color:var(--color-peacock)] italic font-light">limit how far you go.</span>
          </h2>
        </motion.div>

        {/* Bento Grid Construction */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4"
        >
          
          {/* Box 1: The Reality (Spans 7 cols) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 relative group overflow-hidden rounded-[2rem] bg-white border border-[color:var(--color-border)]/50 p-8 sm:p-12 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-[color:var(--color-gold)]/5"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
               <span className="text-8xl font-serif text-[color:var(--color-brand)]">“</span>
            </div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-md bg-red-50 text-[10px] font-bold text-red-600 uppercase tracking-tighter mb-6">The Reality</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[color:var(--color-brand)] mb-6 leading-tight">
                Talent, culture, and <br/>quiet resilience.
              </h3>
              <p className="text-lg leading-relaxed text-[color:var(--color-ink)]/70 max-w-xl">
                Every day, people with ideas and ambition work hard to build better lives—but many dreams remain out of reach simply because the right exposure or platform never arrives.
              </p>
            </div>
          </motion.div>

          {/* Box 2: The Action CTA (Spans 5 cols) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 relative overflow-hidden rounded-[2rem] bg-[color:var(--color-brand)] p-8 sm:p-12 text-white shadow-2xl"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
             <div className="relative z-10 flex flex-col h-full">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60 mb-6">Our Mission</span>
                <h3 className="text-2xl font-bold mb-6">PURBI exists to change that story.</h3>
                <p className="text-white/80 leading-relaxed mb-10 text-base">
                  When success happens anywhere in the world, its impact must be felt back home in Purvanchal and Bihar.
                </p>
                <div className="mt-auto">
                  <a href="#cta" className="group inline-flex items-center gap-3 bg-[color:var(--color-gold)] px-6 py-4 rounded-xl text-[#2a1606] font-bold text-sm uppercase tracking-widest transition-all hover:pr-8 hover:bg-white hover:text-[color:var(--color-brand)]">
                    Join the movement
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
             </div>
          </motion.div>

          {/* Box 3: Vision (Spans 5 cols) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 rounded-[2rem] bg-white border border-[color:var(--color-border)]/50 p-8 sm:p-10"
          >
            <div className="h-10 w-10 rounded-full bg-[color:var(--color-peacock)]/10 flex items-center justify-center mb-6 text-[color:var(--color-peacock)] font-bold">✶</div>
            <h3 className="text-xl font-bold text-[color:var(--color-brand)] mb-4 uppercase tracking-tight">The Vision</h3>
            <p className="text-[color:var(--color-ink)]/75 leading-relaxed">
              To build a globally connected, economically empowered, and culturally confident Eastern India that leads its own development landscape.
            </p>
          </motion.div>

          {/* Box 4: Mission Checklist (Spans 7 cols) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 rounded-[2rem] bg-[color:var(--color-gold)]/5 border border-[color:var(--color-gold)]/20 p-8 sm:p-10 relative group"
          >
            {/* The "Plus" connection point reimagined as a floating badge */}
            <div className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white border border-[color:var(--color-gold)] items-center justify-center shadow-md">
               <span className="text-[color:var(--color-gold)] font-bold">+</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {missionItems.map((item, idx) => (
                <div key={idx} className="flex gap-4 group/item">
                  <div className="mt-1 h-5 w-5 shrink-0 rounded-full border border-[color:var(--color-gold)] flex items-center justify-center transition-colors group-hover/item:bg-[color:var(--color-gold)]">
                     <div className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)] group-hover/item:bg-white" />
                  </div>
                  <span className="text-sm font-medium leading-relaxed text-[color:var(--color-ink)]/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </Section>
  );
}

export default WhyPurbi;