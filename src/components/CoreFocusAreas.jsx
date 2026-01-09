import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import entrepreneursIcon from "../assets/Entrepreneurs_and_MSMEs.png";
import culturalIcon from "../assets/Cultural_Practitioners.png";
import youthIcon from "../assets/Youth_and_Students.png";
import policymakersIcon from "../assets/Policymakers_and_Institutions.png";

const areas = [
  {
    icon: entrepreneursIcon,
    title: "Startup Support & Entrepreneurship",
    description: "Enabling innovation, enterprise creation, and sustainable economic growth.",
  },
  {
    icon: culturalIcon,
    title: "Art, Culture & Sports Promotion",
    description: "Preserving cultural identity while creating global exposure for talent.",
  },
  {
    icon: youthIcon,
    title: "Skilling & Employment Generation",
    description: "Preparing youth for future-ready jobs and entrepreneurship.",
  },
  {
    icon: policymakersIcon,
    title: "Policy Advocacy & Representation",
    description: "Ensuring regional and diaspora voices are heard in policy dialogue.",
  },
];

function CoreFocusAreas() {
  return (
    <Section id="focus-areas" className="relative overflow-hidden py-24 sm:py-32 bg-white">
      {/* Subtle Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-[color:var(--color-gold)]/5 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-[color:var(--color-peacock)]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-3 rounded-full border border-[color:var(--color-gold)]/20 bg-[color:var(--color-gold)]/5 px-5 py-2 text-[10px] font-black tracking-[0.2em] text-[color:var(--color-gold)] uppercase">
            Strategic Pillars
          </span>
          <h2 className="mt-6 text-4xl font-serif font-bold text-[color:var(--color-brand)] sm:text-5xl">
            Our Core <span className="italic font-light">Focus Areas</span>
          </h2>
          <div className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[color:var(--color-gold)] to-transparent" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[color:var(--color-ink)]/60 leading-relaxed">
            Addressing immediate regional challenges while building the infrastructure for a prosperous tomorrow.
          </p>
        </motion.div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[color:var(--color-border)]/50">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col p-8 sm:p-12 border-r border-b border-[color:var(--color-border)]/50 bg-white hover:bg-[#fffcf7] transition-colors duration-500"
            >
              {/* Animated Accent Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[color:var(--color-gold)] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

              {/* Icon / Branding */}
              <div className="relative mb-10">
                <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-white border-2 border-[color:var(--color-border)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-[color:var(--color-gold)]/30">
                  <img src={area.icon} alt={area.title} className="w-20 h-20 object-contain" />
                </div>
                {/* Decorative background circle */}
                <div className="absolute -bottom-2 -left-2 -z-10 h-24 w-24 rounded-xl border-2 border-[color:var(--color-gold)]/40 group-hover:translate-x-4 group-hover:translate-y-1 transition-transform duration-700" />
              </div>

              {/* Text Content */}
              <div className="flex flex-1 flex-col">
                <h4 className="text-xl font-bold text-[color:var(--color-brand)] leading-tight mb-4 group-hover:text-[color:var(--color-peacock)] transition-colors">
                  {area.title}
                </h4>
                <p className="text-sm leading-relaxed text-[color:var(--color-ink)]/70 mb-8 font-light">
                  {area.description}
                </p>

                {/* Bottom Action */}
                <div className="mt-auto inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[color:var(--color-gold)]">
                  <span className="relative overflow-hidden pb-1">
                    Explore Initiatives
                    <span className="absolute bottom-0 left-0 h-[1px] w-full bg-[color:var(--color-gold)] translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-500" />
                  </span>
                  <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA / Metric */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 0.6 }}
           className="mt-16 flex flex-col items-center justify-center gap-4 text-center"
        >
          <div className="h-12 w-px bg-gradient-to-b from-[color:var(--color-gold)] to-transparent" />
          <p className="text-xs font-bold tracking-[0.3em] text-[color:var(--color-brand)]/40 uppercase">
            Built for the community, by the community
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

export default CoreFocusAreas;