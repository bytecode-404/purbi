import Section from "./Section";

function InstitutionalAlignment() {
  return (
    <Section id="institutional-alignment" className="relative overflow-hidden">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(900px_circle_at_20%_10%,rgba(253,197,31,.35),transparent_55%),radial-gradient(900px_circle_at_90%_30%,rgba(20,48,69,.16),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(20,48,69,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,48,69,.18)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[color:var(--color-gold)]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--color-peacock)]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--color-peacock)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            INSTITUTIONAL ALIGNMENT
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
          </span>

          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-[color:var(--color-brand)]">
            Our Objectives
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base text-[color:var(--color-ink)]/65">
            PURBI's work is guided by clear objectives focused on long-term capacity building and inclusive growth.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid gap-10 md:grid-cols-12">
          {/* Left rail */}
          <div className="md:col-span-4 relative">
            <div className="sticky top-24">
              <div className="relative pl-6">
                {/* vertical line */}
                <div className="absolute left-5 top-3 h-full w-[2px] bg-[linear-gradient(to_bottom,var(--color-gold),var(--color-peacock))]" />

                <div className="space-y-6 pl-5 pt-3">
                  {[
                    "Economic Empowerment",
                    "Cultural Preservation & Promotion",
                    "Global Collaboration",
                    "Inclusivity & Sustainability",
                  ].map((item) => (
                    <div key={item} className="">
                      <div className="flex items-center gap-2">
                        <p className="h-4 w-4 rounded-full bg-[color:var(--color-gold)]" />
                        <p className="text-sm font-semibold text-[color:var(--color-brand)]">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="md:col-span-8 space-y-6">
            <p className="text-[16px] leading-relaxed text-[color:var(--color-ink)]/75">
              PURBI’s approach is informed by best practices observed in
              national trade and development bodies, while remaining rooted in
              social development and community outcomes.
            </p>

            <div>
              <div className="text-xs font-semibold tracking-wide text-[color:var(--color-peacock)]">
                INFORMS OUR APPROACH
              </div>

              {/* <div className="mt-4 flex flex-wrap gap-3">
                {orgs.map((name) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-sm font-semibold text-[color:var(--color-brand)]"
                  >
                    <span className="h-2 w-2 rounded-full bg-[color:var(--color-peacock)]/70" />
                    {name}
                  </span>
                ))}
              </div> */}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="#core-domains"
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-[#2a1606]
                bg-[linear-gradient(135deg,var(--color-gold),var(--color-copper),var(--color-gold-2))]
                hover:brightness-105 active:brightness-95 transition"
              >
                Explore our programs →
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold
                border border-[color:var(--color-border)] bg-white/70 text-[color:var(--color-peacock)]
                hover:bg-white transition"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default InstitutionalAlignment;
