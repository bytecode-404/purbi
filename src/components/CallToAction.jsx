import Section from "./Section";

function CallToAction() {
  return (
    <Section id="cta" className="relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        {/* deep base */}
        <div className="absolute inset-0 bg-[color:var(--color-brand)]" />

        {/* radial spotlight */}
        <div className="absolute inset-0 opacity-[0.55] [background:radial-gradient(900px_circle_at_50%_-10%,rgba(253,197,31,.45),transparent_55%)]" />

        {/* peacock wash */}
        <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(900px_circle_at_90%_60%,rgba(20,48,69,.65),transparent_60%)]" />

        {/* soft gold haze */}
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[color:var(--color-gold)]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Framed CTA panel */}
        <div
          className="
            relative overflow-hidden rounded-[32px]
            border border-white/15
            bg-white/5 backdrop-blur-xl
            shadow-[0_30px_90px_rgba(0,0,0,.45)]
            text-center
          "
        >
          {/* top ceremonial rail */}
          <div className="h-[3px] w-full bg-[linear-gradient(90deg,var(--color-gold),var(--color-copper),var(--color-peacock))]" />

          {/* inner content */}
          <div className="relative px-6 py-14 sm:px-10 sm:py-16">
            {/* badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
              GET INVOLVED
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            </div>

            {/* heading */}
            <h2 className="mx-auto max-w-3xl text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
              Join the Movement
            </h2>

            {/* subtext */}
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-white/70">
              Whether you are an NRI, professional, entrepreneur, artist, or well-wisher — there is a place for you at PURBI. PURBI is about more than development; it is about identity, responsibility, and shared progress. Together, we can ensure that global success lights up local lives.
            </p>

            {/* actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full px-6 py-3 text-sm font-semibold
                  text-[#2a1606]
                  bg-[linear-gradient(135deg,var(--color-gold),var(--color-copper),var(--color-gold-2))]
                  shadow-[0_16px_50px_rgba(253,197,31,.35)]
                  hover:brightness-105 active:brightness-95 transition
                "
              >
                Learn How to Contribute →
              </a>

              <a
                href="#about"
                className="
                  inline-flex items-center justify-center
                  rounded-full px-6 py-3 text-sm font-semibold
                  text-white
                  border border-white/30
                  bg-white/5
                  hover:bg-white/10 transition
                "
              >
                Learn more about PURBI
              </a>
            </div>

            {/* trust line */}
            <div className="mt-8 flex items-center justify-center gap-3 text-xs text-white/55">
              <span className="h-px w-10 bg-white/30" />
              Collaborative • Responsible • Long-term
              <span className="h-px w-10 bg-white/30" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CallToAction;
