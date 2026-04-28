import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#" },
  { label: "Doctors", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

const services = [
  { label: "Knee Replacement", href: "#" },
  { label: "Hip Replacement", href: "#" },
  { label: "Spine Treatment", href: "#" },
  { label: "Shoulder Care", href: "#" },
  { label: "Physiotherapy", href: "#" },
  { label: "Rehabilitation", href: "#" },
];

const socialLinks = [
  { label: "Facebook", icon: "f", href: "#" },
  { label: "Instagram", icon: "ig", href: "#" },
  { label: "YouTube", icon: "yt", href: "#" },
  { label: "LinkedIn", icon: "in", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden bg-[#020817] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-0 h-52 w-52 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="absolute right-0 top-14 h-56 w-56 rounded-full bg-violet-500/30 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1240px] px-6 pb-8 pt-14 lg:px-2">
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_25px_90px_rgba(15,23,42,0.35)] backdrop-blur-sm lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/orthocare/logo-mark.svg" alt="OrthoCare logo" width={44} height={44} />
              <div>
                <h3 className="text-3xl font-extrabold">OrthoCare</h3>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/80">Precision in Every Step</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
              Advanced orthopedic care designed around comfort, precision, and faster recovery. From diagnosis to rehabilitation,
              your movement is always our focus.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-100">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 font-bold uppercase transition-all hover:-translate-y-0.5 hover:bg-cyan-400/20"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Specialties</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              {services.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/12 bg-slate-950/40 p-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Contact & Updates</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>123 Health Avenue, Medi District, CA 94016</li>
              <li>+1 (555) 123-4567</li>
              <li>info@orthocare.com</li>
              <li>Mon - Sat: 9:00 AM - 6:00 PM</li>
            </ul>

            <div className="mt-5 flex items-center rounded-xl border border-white/15 bg-white/5 px-3 py-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
              />
              <button className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-2 text-xs font-semibold text-slate-950">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/12 pt-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 OrthoCare. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
