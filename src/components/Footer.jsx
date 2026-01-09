import Section from "./Section";

function Footer() {
  return (
    <footer className="bg-[color:var(--color-peacock)] text-white">
      {/* subtle top divider */}
      <div className="h-[2px] w-full bg-[linear-gradient(90deg,var(--color-gold),var(--color-copper),var(--color-gold))]" />

      <Section id="contact" className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Brand */}
            <div>
              <div className="flex flex-col items-start">
                <div className="overflow-hidden rounded-2xl border border-white/25 bg-white/5 p-1 shadow-sm">
                  <img
                    src="/logo.jpeg"
                    alt="PURBI logo"
                    className="h-20 w-20 object-cover"
                  />
                </div>
                <div className="mt-3">
                  <div className="font-semibold">PURBI International</div>
                  <div className="text-xs text-white/70">
                    Connecting East to the World
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Purvanchal & Bihar International  building platforms for
                opportunity, collaboration, and long-term impact.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <div className="text-sm font-semibold text-[color:var(--color-gold)]">
                Quick Links
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  ["Home", "#home"],
                  ["About", "#about"],
                  ["Programs", "#programs"],
                  ["Get Involved", "#contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-white/70 hover:text-white transition"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Focus Areas */}
            <div>
              <div className="text-sm font-semibold text-[color:var(--color-gold)]">
                Focus Areas
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>Economic Development</li>
                <li>Skill Development</li>
                <li>Sports</li>
                <li>Culture</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="text-sm font-semibold text-[color:var(--color-gold)]">
                Contact
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>
                  <span className="font-medium text-white">Email:</span>{" "}
                  hello@purbi.org
                </li>
                <li>
                  <span className="font-medium text-white">Phone:</span>{" "}
                  +91 XXXXX XXXXX
                </li>
                <li>
                  <span className="font-medium text-white">Address:</span>{" "}
                  [Your Address]
                </li>
                <li>
                  <span className="font-medium text-white">LinkedIn:</span>{" "}
                  /purbi-international
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-10 border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {["FB", "TW", "IG", "LI", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="
                    h-9 w-9 rounded-full
                    border border-white/25
                    grid place-items-center
                    text-xs text-white/70
                    hover:text-white
                    hover:border-[color:var(--color-gold)]
                    transition
                  "
                >
                  {s}
                </a>
              ))}
            </div>

            <p className="text-xs text-white/55">
              © 2026{" "}
              <span className="font-semibold text-white">
                PURBI International
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </Section>
    </footer>
  );
}

export default Footer;
