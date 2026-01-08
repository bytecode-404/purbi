import Section from "./Section";
import CardBox from "./ui/CardBox";

function WhatIsPurbi() {
  return (
    <Section id="about" className="relative overflow-hidden">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(900px_circle_at_10%_10%,rgba(253,197,31,.28),transparent_55%),radial-gradient(900px_circle_at_90%_30%,rgba(20,48,69,.14),transparent_55%)]" />
        <div className="absolute -top-28 -right-24 h-72 w-72 rounded-full bg-[color:var(--color-gold)]/15 blur-3xl" />
        <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[color:var(--color-peacock)]/12 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <div className="inline-flex flex-col items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--color-peacock)] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
              WHAT IS PURBI
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[color:var(--color-brand)]">
              A bridge between regional strength and global opportunity.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Media frame (unique) */}
          <div className="relative">
            {/* outer frame */}
            <div className="relative overflow-hidden rounded-[28px] border border-[color:var(--color-border)] bg-white/70 backdrop-blur shadow-[0_18px_60px_rgba(68,29,11,.12),0_2px_10px_rgba(20,48,69,.06)]">
              {/* top gradient hairline */}
              <div className="h-[2px] w-full bg-[linear-gradient(90deg,rgba(253,197,31,0),rgba(253,197,31,.9),rgba(238,144,13,.8),rgba(20,48,69,.7),rgba(253,197,31,0))]" />

              {/* inner canvas */}
              <div className="relative p-3">
                <div className="relative wire-box h-64 sm:h-80 lg:h-[360px] rounded-[22px] overflow-hidden flex items-center justify-center bg-[color:var(--color-paper)]/70">
                  <span className="text-sm text-[color:var(--color-ink)]/60">
                    [Image Placeholder]
                  </span>

                  {/* subtle overlay */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,rgba(20,48,69,.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,48,69,.25)_1px,transparent_1px)] [background-size:44px_44px]" />
                </div>

                {/* corner emblem */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rotate-12 rounded-full bg-[linear-gradient(135deg,rgba(253,197,31,.35),rgba(238,144,13,.25),rgba(253,225,72,.25))] blur-[1px]" />
              </div>
            </div>

            {/* floating chips */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                ["Connect", "People • Institutions"],
                ["Platform", "National • Global"],
              ].map(([title, sub]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[color:var(--color-border)] bg-white/70 px-4 py-3 shadow-sm backdrop-blur"
                >
                  <div className="text-sm font-semibold text-[color:var(--color-brand)]">
                    {title}
                  </div>
                  <div className="text-xs text-[color:var(--color-ink)]/60">
                    {sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: content cards (distinct styling) */}
          <div className="space-y-4">
            <CardBox className="relative overflow-hidden rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-white/75 backdrop-blur shadow-[0_14px_45px_rgba(68,29,11,.10),0_2px_10px_rgba(20,48,69,.06)]">
              {/* left rail */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-1.5 bg-[linear-gradient(180deg,var(--color-gold),var(--color-copper),var(--color-peacock))]" />
              <div className="relative p-5 sm:p-6">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-muted)] px-3 py-1 text-xs font-semibold text-[color:var(--color-peacock)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
                  Mission
                </div>
                <p className="text-[15px] leading-relaxed text-[color:var(--color-ink)]/80">
                  PURBI (Purvanchal and Bihar International) is a key force that
                  is working towards advancement of the economic, cultural, and
                  human potential of Purvanchal and Bihar. It does this by
                  connecting people, institutions, and regional strengths with
                  national and global platforms.
                </p>
              </div>
            </CardBox>

            <CardBox className="relative overflow-hidden rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-white/75 backdrop-blur shadow-[0_14px_45px_rgba(68,29,11,.10),0_2px_10px_rgba(20,48,69,.06)]">
              {/* subtle pattern */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(20,48,69,.35)_1px,transparent_1px)] [background-size:18px_18px]" />
              <div className="relative p-5 sm:p-6">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[color:var(--color-brand)] border border-[color:var(--color-border)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-peacock)]" />
                  Focus Areas
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Economic Empowerment",
                    "Skill Development",
                    "Sports",
                    "Policy Dialogue",
                  ].map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-paper)]/70 px-3 py-1 text-xs font-medium text-[color:var(--color-ink)]/75"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#programs"
                    className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-[#2a1606]
                    bg-[linear-gradient(135deg,var(--color-gold),var(--color-copper),var(--color-gold-2))]
                    hover:brightness-105 active:brightness-95 transition"
                  >
                    View Programs →
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold
                    border border-[color:var(--color-border)] bg-white/70 text-[color:var(--color-peacock)]
                    hover:bg-white transition"
                  >
                    Partner with us
                  </a>
                </div>
              </div>
            </CardBox>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default WhatIsPurbi;
