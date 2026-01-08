import Section from "./Section";
import CardBox from "./ui/CardBox";

function Area({ title, description, icon }) {
  return (
    <CardBox
      className="
        group relative h-full overflow-hidden rounded-[var(--radius-card)]
        border border-[color:var(--color-border)] bg-white/75 backdrop-blur
        shadow-[0_16px_55px_rgba(68,29,11,.10),0_2px_10px_rgba(20,48,69,.06)]
        transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_75px_rgba(68,29,11,.14),0_10px_30px_rgba(20,48,69,.10)]
      "
    >
        
      {/* top rail */}
      <div className="pointer-events-none absolute left-0 top-0 h-[3px] w-full bg-[linear-gradient(90deg,var(--color-gold),var(--color-copper),var(--color-peacock))]" />

      {/* subtle dot pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,rgba(20,48,69,.45)_1px,transparent_1px)] [background-size:18px_18px]" />

      {/* corner glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[color:var(--color-gold)]/18 blur-2xl transition-opacity duration-300 group-hover:opacity-60" />

      <div className="relative p-6 text-center">
        {/* Icon Medallion (unique shape) */}
        <div className="mx-auto mb-4 grid h-16 w-16 place-items-center">
          <div className="relative">
            {/* outer ring */}
            <div className="h-16 w-16 rounded-[22px] border border-[color:var(--color-border)] bg-white/75 shadow-sm backdrop-blur" />

            {/* gradient corner cut */}
            <div className="absolute -right-1 -top-1 h-7 w-7 rounded-[14px] bg-[linear-gradient(135deg,var(--color-gold),var(--color-copper))] opacity-90" />

            {/* inner emblem */}
            <div className="absolute inset-2 grid place-items-center rounded-[18px] bg-[color:var(--color-paper)]/80">
              <span className="text-xs font-semibold text-[color:var(--color-peacock)]">
                {icon}
              </span>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="mx-auto mb-3 inline-flex items-center justify-center rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-sm font-semibold text-[color:var(--color-brand)]">
          {title}
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-[color:var(--color-ink)]/70">
          {description}
        </p>

        {/* micro CTA */}
        <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--color-peacock)]/80">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
          Learn more
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </div>
      </div>
    </CardBox>
  );
}

function CoreFocusAreas() {
  return (
    <Section id="focus-areas" className="relative overflow-hidden">
      {/* section glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(900px_circle_at_20%_10%,rgba(253,197,31,.35),transparent_55%),radial-gradient(900px_circle_at_90%_30%,rgba(20,48,69,.16),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(20,48,69,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,48,69,.18)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[color:var(--color-gold)]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--color-peacock)]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--color-peacock)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            OUR CORE FOCUS AREAS
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-[color:var(--color-brand)]">
            Four pillars that drive long-term regional prosperity
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base text-[color:var(--color-ink)]/65">
            Each focus area is designed to work togetherstrengthening people,
            institutions, and sustainable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Area
            icon="₹"
            title="Economic Empowerment"
            description="Enabling entrepreneurship, MSMEs, and professionals through structured economic engagement."
          />
          <Area
            icon="✶"
            title="Cultural Preservation & Promotion"
            description="Positioning regional heritage as global cultural and economic capital."
          />
          <Area
            icon="⟲"
            title="Global Collaboration"
            description="Building cross-border partnerships, diaspora engagement, and international dialogue."
          />
          <Area
            icon="⟡"
            title="Inclusivity & Sustainability"
            description="Ensuring equitable, responsible, and long-term development outcomes."
          />
        </div>
      </div>
    </Section>
  );
}

export default CoreFocusAreas;
