import Section from "./Section";

function WhyPurbi() {
  return (
    <Section id="why-purbi" className="relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(900px_circle_at_12%_0%,rgba(253,197,31,.22),transparent_55%),radial-gradient(900px_circle_at_88%_30%,rgba(20,48,69,.12),transparent_55%)]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[color:var(--color-gold)]/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--color-peacock)]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--color-peacock)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            WHY PURBI
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-[color:var(--color-brand)]">
            From underrepresentation to global participation
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-[color:var(--color-ink)]/65">
            Turning regional strengths into institutional pathways for impact —
            responsibly and sustainably.
          </p>
        </div>

        {/* 2x2 layout with cross (“+”) made from borders on desktop */}
        <div className="relative">
          {/* Desktop cross-divider that forms the “+” */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {/* vertical line */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[color:var(--color-border)]/70" />
            {/* horizontal line */}
            <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-[color:var(--color-border)]/70" />
          </div>

          {/* Content */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-14 lg:gap-y-16">
            {/* PROBLEM (top-left) */}
            <div className="lg:pr-10 lg:pb-10">
              <div className="text-xs font-semibold tracking-wide text-red-600">
                PROBLEM
              </div>

              <h3 className="mt-3 text-lg font-semibold text-[color:var(--color-brand)]">
                Talent exists. Representation doesn’t.
              </h3>

              <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-ink)]/75">
                Despite vast talent and cultural wealth, Purvanchal and Bihar
                remain underrepresented in global economic and policy ecosystems.
              </p>

              <div className="mt-5 text-xs font-semibold text-[color:var(--color-ink)]/55">
                Limited pathways • fragmented networks • low institutional lift
              </div>
            </div>

            {/* SOLUTION (top-right) */}
            <div className="lg:pl-10 lg:pb-10">
              <div className="text-xs font-semibold tracking-wide text-[color:var(--color-peacock)]">
                SOLUTION
              </div>

              <h3 className="mt-3 text-lg font-semibold text-[color:var(--color-brand)]">
                Platforms that convert potential into participation.
              </h3>

              <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-ink)]/75">
                PURBI creates institutional platforms that translate local
                potential into global participation — inclusively, responsibly,
                and sustainably.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-[color:var(--color-ink)]/70">
                {[
                  "Institutional credibility",
                  "Global networks",
                  "Responsible growth",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <a
                  href="#cta"
                  className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-[#2a1606]
                  bg-[linear-gradient(135deg,var(--color-gold),var(--color-copper),var(--color-gold-2))]
                  hover:brightness-105 active:brightness-95 transition"
                >
                  Join the movement →
                </a>
              </div>
            </div>

            {/* VISION (bottom-left) */}
            <div className="lg:pr-10 lg:pt-10">
              <div className="text-xs font-semibold tracking-wide text-[color:var(--color-peacock)]">
                VISION
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[color:var(--color-brand)]">
                A globally connected and confident region.
              </h3>

              <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-ink)]/75">
                To build a globally connected, economically empowered, and
                culturally confident Purvanchal and Bihar that actively
                contributes to India’s and the world’s development landscape.
              </p>
            </div>

            {/* MISSION (bottom-right) */}
            <div className="lg:pl-10 lg:pt-10">
              <div className="text-xs font-semibold tracking-wide text-[color:var(--color-brand)]">
                MISSION
              </div>

              <ul className="mt-5 space-y-3">
                {[
                  "Enable sustainable economic empowerment",
                  "Preserve and promote cultural heritage",
                  "Foster international collaboration",
                  "Ensure inclusive growth aligned with sustainability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--color-gold)]" />
                    <span className="text-sm leading-relaxed text-[color:var(--color-ink)]/75">
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
