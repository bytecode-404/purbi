import Section from "./Section";
import geomap from "../assets/-7e6c3fd0-e2c4-4762-a478-8aecd4fdc94f.png";

function DomainItem({ num, title, description, tags = [] }) {
  return (
    <div className="group relative  h-full flex flex-col justify-center">
      <div className="flex items-start gap-4">
        {/* Number Medallion */}
        <div className="relative shrink-0">
          <div className="grid h-11 w-11 place-items-center rounded-[18px] border border-[color:var(--color-border)] bg-white/70 shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
            <div className="grid h-9 w-9 place-items-center rounded-[16px] bg-[linear-gradient(135deg,var(--color-gold),var(--color-copper),var(--color-gold-2))] text-[#2a1606] font-extrabold text-sm">
              {num}
            </div>
          </div>
        </div>

        <div className="flex-1">
          {/* Title */}
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base sm:text-lg font-semibold text-[color:var(--color-brand)]">
              {title}
            </h3>
            {/* Status dot */}
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-peacock)]/60" />
          </div>

          <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink)]/75">
            {description}
          </p>

          {/* Tags */}
          {tags?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-paper)]/50 px-2.5 py-0.5 text-[11px] font-semibold text-[color:var(--color-ink)]/70 transition-colors hover:bg-white"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          {/* Micro Link */}
          <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--color-peacock)]/90 opacity-0 transition-all duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
            <span className="h-1 w-1 rounded-full bg-[color:var(--color-gold)]" />
            View initiatives
            <span>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoreDomains() {
  return (
    <Section id="core-domains" className="relative overflow-hidden">
      {/* --- Background Effects --- */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(900px_circle_at_20%_10%,rgba(253,197,31,.35),transparent_55%),radial-gradient(900px_circle_at_90%_30%,rgba(20,48,69,.16),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(20,48,69,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,48,69,.18)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[color:var(--color-gold)]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--color-peacock)]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* --- Header --- */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--color-peacock)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            OUR CORE DOMAINS
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-[color:var(--color-brand)]">
            Four domains that convert potential into outcomes
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base text-[color:var(--color-ink)]/65">
            Programs designed to create measurable, sustainable impact.
          </p>
        </div>

        {/* --- Grid Layout --- */}
        {/* Using a 2-column grid where items wrap naturally ensures alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-5 items-start">
          
          {/* Block 1: Items 01 & 02 (Top Left) */}
          <div className="flex flex-col gap-6 justify-evenly h-full">
            <DomainItem
              num="01"
              title="Startup Support & Entrepreneurship"
              description="Purbi enables aspiring entrepreneurs by connecting startups with NRI investors and mentors, facilitating access to capital and supporting innovation hubs."
              tags={["Investors", "Mentors", "Capital", "Networks"]}
            />
            {/* Divider */}
            <div className="mx-6 border-t border-[color:var(--color-border)]/60" />
            <DomainItem
              num="02"
              title="Promoting Art, Culture & Sports"
              description="PURBI works to promote artists, performers, and sportspersons internationally, organise cultural showcases, and support training and sponsorship opportunities."
              tags={["Artists", "Sports", "Global Platforms"]}
            />
          </div>

          {/* Block 2: Map Panel (Top Right) */}
          <div className="relative h-full">
            <div className="relative h-full overflow-hidden rounded-[28px] border border-[color:var(--color-border)] bg-white/75 backdrop-blur shadow-[0_18px_60px_rgba(68,29,11,.10),0_2px_10px_rgba(20,48,69,.05)]">
              {/* Header hairline */}
              <div className="h-[2px] w-full bg-[linear-gradient(90deg,rgba(253,197,31,0),rgba(253,197,31,.9),rgba(238,144,13,.8),rgba(20,48,69,.7),rgba(253,197,31,0))]" />

              <div className="relative p-3 flex flex-col h-full">
                {/* The Map Image */}
                <div className="relative wire-box min-h-[280px] lg:h-full flex-1 rounded-[22px] overflow-hidden flex items-center justify-center bg-[color:var(--color-paper)]/70">
                  <img
                    src={geomap}
                    alt="Regional Impact Map"
                    className="h-full w-full max-h-[400px] object-cover"
                  />
                  {/* Map Overlays */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,rgba(20,48,69,.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,48,69,.25)_1px,transparent_1px)] [background-size:44px_44px]" />
                  <div className="pointer-events-none absolute inset-0 [background:radial-gradient(900px_circle_at_50%_20%,rgba(253,197,31,.22),transparent_55%)]" />
                </div>

                {/* Floating Chips */}
                <div className="mt-4 flex flex-wrap gap-2 justify-center pb-2">
                  {["Programs", "Partnerships", "Institutions", "Impact"].map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center rounded-full border border-[color:var(--color-border)] bg-white/80 px-3 py-1 text-[11px] font-semibold text-[color:var(--color-brand)] shadow-sm"
                    >
                      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative Glow behind map */}
            <div className="pointer-events-none absolute -right-8 -bottom-8 h-48 w-48 rounded-full bg-[color:var(--color-peacock)]/10 blur-3xl" />
          </div>

          {/* Block 3: Item 03 (Bottom Left - Starts new row aligned with 04) */}
          <div className="lg:border-t lg:border-[color:var(--color-border)]/60 lg:pt-8">
            <DomainItem
              num="03"
              title="Skilling & Employment Generation"
              description="We focus on preparing youth for tomorrow's jobs by supporting skill development programs, partnering with industry, and creating pathways to employment."
              tags={["Skills", "Employment", "Training"]}
            />
          </div>

          {/* Block 4: Item 04 (Bottom Right - Starts new row aligned with 03) */}
          <div className="lg:border-t lg:border-[color:var(--color-border)]/60 lg:pt-8">
             <DomainItem
              num="04"
              title="Policy Advocacy"
              description="PURBI acts as a constructive bridge between citizens, diaspora, and policymakers to advocate for policies that enable investment and ease of doing business."
              tags={["Policy", "Advocacy", "Reforms"]}
            />
          </div>

        </div>
      </div>
    </Section>
  );
}

export default CoreDomains;