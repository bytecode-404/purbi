import Section from "./Section";

function Blueprint() {
  return (
    <Section id="blueprint" className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(900px_circle_at_20%_10%,rgba(253,197,31,.35),transparent_55%),radial-gradient(900px_circle_at_90%_30%,rgba(20,48,69,.16),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(20,48,69,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,48,69,.18)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--color-peacock)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            THE PURBI BLUEPRINT
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-[color:var(--color-brand)]">
            A long-term plan for people, progress & place
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-[color:var(--color-ink)]/70">
            Economic advancement, social empowerment, and environmental stewardship 
            designed to work together.
          </p>
        </div>

        {/* Content  NO BOX */}
        <div className="grid gap-12 md:grid-cols-12 items-start">
          {/* Left column */}
          <div className="md:col-span-4">
            <div className="text-xs font-semibold tracking-wide text-[color:var(--color-peacock)]">
              THREE LINKED PILLARS
            </div>

            <ul className="mt-6 space-y-6">
              {[
                ["Economic Advancement", "Jobs • Enterprise • Skills"],
                ["Social Empowerment", "Education • Health • Inclusion"],
                ["Environmental Stewardship", "Sustainability • Resilience"],
              ].map(([title, sub]) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[color:var(--color-gold)]" />
                  <div>
                    <div className="font-semibold text-[color:var(--color-brand)]">
                      {title}
                    </div>
                    <div className="text-sm text-[color:var(--color-ink)]/60">
                      {sub}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div className="md:col-span-8">
            <p className="text-[15px] leading-relaxed text-[color:var(--color-ink)]/80">
              The future of Purvanchal and Bihar requires a new blueprint for growth.
              Conventional socioeconomic models often prioritize short-term gains
              over long-term community well-being, resulting in uneven development
              and missed opportunities.
            </p>

            <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--color-ink)]/80">
              PURBI is grounded in the belief that true prosperity emerges when
              economic advancement, social empowerment, and environmental stewardship
              are interwoven into a single, durable framework.
            </p>

            {/* Divider instead of card */}
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-[color:var(--color-border)] pt-6">
              <div className="text-sm font-medium text-[color:var(--color-brand)]">
                Focused on durable outcomes  not quick wins.
              </div>

              <a
                href="#programs"
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-[#2a1606]
                bg-[linear-gradient(135deg,var(--color-gold),var(--color-copper),var(--color-gold-2))]
                hover:brightness-105 transition"
              >
                Explore Programs →
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Blueprint;
