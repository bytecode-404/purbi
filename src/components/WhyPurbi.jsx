import Section from "./Section";

function WhyPurbi() {
  return (
    <Section id="why-purbi" className="relative overflow-hidden py-16 sm:py-24">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(900px_circle_at_12%_0%,rgba(253,197,31,.22),transparent_55%),radial-gradient(900px_circle_at_88%_30%,rgba(20,48,69,.12),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--color-peacock)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            WHY PURBI
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
          </span>
          <h2 className="mt-5 text-3xl font-bold text-[color:var(--color-brand)]">
            Why PURBI Matters
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[color:var(--color-ink)]/65">
            Where you are born should not limit how far you can go.
          </p>
        </div>

        {/* 2x2 Grid Container */}
        <div className="border border-[color:var(--color-border)]/60 rounded-3xl bg-white/40 overflow-hidden shadow-sm">
          
          {/* ROW 1: Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[color:var(--color-border)]/60">
            {/* Top Left */}
            <div className="p-10 md:border-r border-[color:var(--color-border)]/60">
              <div className="text-xs font-bold tracking-widest text-red-600 mb-4 uppercase">The Reality</div>
              <h3 className="text-xl font-bold text-[color:var(--color-brand)] mb-3">
                Talent, culture, and quiet resilience
              </h3>
              <p className="text-[15px] leading-relaxed text-[color:var(--color-ink)]/75">
                Purvanchal and Bihar are regions full of talent, culture, and quiet resilience. Every day, people with ideas, skills, and ambition work hard to build better lives—but many dreams remain out of reach simply because the right exposure, support, or opportunity never arrives.
              </p>
            </div>

            {/* Top Right */}
            <div className="p-10 bg-[color:var(--color-gold)]/5">
              <div className="text-xs font-bold tracking-widest text-[color:var(--color-peacock)] mb-4 uppercase">Our Purpose</div>
              <h3 className="text-xl font-bold text-[color:var(--color-brand)] mb-3">
                PURBI exists to change that story.
              </h3>
              <p className="text-[15px] leading-relaxed text-[color:var(--color-ink)]/75 mb-6">
                We believe that where you are born should not limit how far you can go. By connecting local communities with global networks, mentors, investors, and platforms, PURBI works to ensure that global success creates real and lasting impact back home.
              </p>
              <p className="text-[15px] leading-relaxed text-[color:var(--color-ink)]/75 mb-8 font-semibold">
                Our purpose is simple: when people from the region succeed anywhere in the world, their success should help open doors for the next generation in Purvanchal and Bihar.
              </p>
              <a href="#cta" className="inline-flex items-center rounded-full px-5 py-2 text-sm font-bold text-[#2a1606] bg-[linear-gradient(135deg,var(--color-gold),var(--color-copper),var(--color-gold-2))] hover:brightness-105 transition shadow-sm">
                Join the movement →
              </a>
            </div>
          </div>

          {/* ROW 2: Vision & Mission (Relative container for anchoring the Plus) */}
          <div className="grid grid-cols-1 md:grid-cols-2 relative">
            
            {/* THE PLUS ICON - ANCHORED HERE 
                top-0 aligns it to the top of this row (which is the bottom of the previous row).
                -translate-y-1/2 pulls it up halfway so it sits perfectly ON the line.
            */}
            <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-10">
               <div className="h-8 w-8 rounded-full bg-[#FFFCF2] border border-[color:var(--color-border)]/60 flex items-center justify-center">
                  <div className="text-[color:var(--color-gold)] text-lg leading-none pt-0.5">
                    +
                  </div>
               </div>
            </div>

            {/* Bottom Left */}
            <div className="p-10 md:border-r border-t md:border-t-0 border-[color:var(--color-border)]/60">
              <div className="text-xs font-bold tracking-widest text-[color:var(--color-peacock)] mb-4 uppercase">Vision</div>
              <p className="text-[15px] leading-relaxed text-[color:var(--color-ink)]/75">
                To build a globally connected, economically empowered, and culturally confident Purvanchal and Bihar that actively contributes to India's and the world's development landscape.
              </p>
            </div>

            {/* Bottom Right */}
            <div className="p-10 border-t md:border-t-0 border-[color:var(--color-border)]/60">
              <div className="text-xs font-bold tracking-widest text-[color:var(--color-brand)] mb-4 uppercase">Mission</div>
              <ul className="space-y-3">
                {[
                  "To enable sustainable economic empowerment through skills, enterprise, and market access",
                  "To preserve and promote the cultural heritage of Eastern India on global platforms",
                  "To foster international collaboration across trade, sports, and knowledge ecosystems",
                  "To ensure inclusive growth aligned with long-term social and environmental sustainability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)] shrink-0" />
                    <span className="text-sm leading-relaxed text-[color:var(--color-ink)]/75 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}

export default WhyPurbi;