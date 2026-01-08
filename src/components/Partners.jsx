import Section from "./Section";
import CardBox from "./ui/CardBox";

function PartnerCard({ label }) {
  return (
    <CardBox
      className="
        group relative h-36 overflow-hidden
        rounded-[var(--radius-card)]
        border border-[color:var(--color-border)]
        bg-white/80 backdrop-blur
        shadow-[0_12px_40px_rgba(68,29,11,.08),0_2px_10px_rgba(20,48,69,.05)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_22px_70px_rgba(68,29,11,.12),0_10px_30px_rgba(20,48,69,.10)]
      "
    >
      {/* top accent rail */}
      <div className="pointer-events-none absolute left-0 top-0 h-[3px] w-full bg-[linear-gradient(90deg,var(--color-gold),var(--color-copper),var(--color-peacock))]" />

      {/* spotlight hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(420px_circle_at_50%_30%,rgba(253,197,31,.18),transparent_60%)]" />

      {/* subtle pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,rgba(20,48,69,.45)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative flex h-full flex-col items-center justify-center gap-3">
        {/* logo pedestal */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-[18px] border border-[color:var(--color-border)] bg-[color:var(--color-paper)]/80 shadow-sm" />
          <div className="pointer-events-none absolute -right-2 -top-2 h-6 w-6 rounded-[14px] bg-[linear-gradient(135deg,var(--color-gold),var(--color-copper))] opacity-90" />
          <div className="absolute inset-[10px] grid place-items-center rounded-[14px] bg-white text-xs font-semibold text-[color:var(--color-peacock)]">
            LOGO
          </div>
        </div>

        <div className="text-xs font-semibold text-[color:var(--color-ink)]/70">
          {label}
        </div>
      </div>
    </CardBox>
  );
}

function Partners() {
  return (
    <Section id="partners" className="relative overflow-hidden">
      {/* background wash */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(900px_circle_at_15%_0%,rgba(253,197,31,.18),transparent_55%),radial-gradient(900px_circle_at_85%_40%,rgba(20,48,69,.10),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* title */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--color-peacock)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            OUR PARTNERS
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-[color:var(--color-brand)]">
            Institutions and organizations we collaborate with
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base text-[color:var(--color-ink)]/65">
            Partnerships strengthen our ability to design credible programs,
            scale impact, and connect regional potential with wider platforms.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PartnerCard label="Trade & Industry Body" />
          <PartnerCard label="Academic Institution" />
          <PartnerCard label="Policy Think Tank" />
          <PartnerCard label="Global Network Partner" />
        </div>

        {/* trust footer */}
        <div className="mt-10 flex items-center justify-center gap-3 text-xs text-[color:var(--color-ink)]/55">
          <span className="h-px w-12 bg-[color:var(--color-border)]" />
          Strategic • Institutional • Long-term
          <span className="h-px w-12 bg-[color:var(--color-border)]" />
        </div>
      </div>
    </Section>
  );
}

export default Partners;
