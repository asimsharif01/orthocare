import Image from "next/image";

const quickLinks = ["Home", "Services", "About Us", "Doctors", "Blog", "Contact"];
const services = [
  "Knee Replacement",
  "Hip Replacement",
  "Spine Treatment",
  "Shoulder Care",
  "Physiotherapy",
  "Rehabilitation Program",
];
const guide = ["Conditions", "Treatment Process", "Recovery & Aftercare", "Insurance & Payment", "FAQs"];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#061c49] via-[#0a255f] to-[#031739] text-white">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-12 lg:px-2">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/orthocare/logo-mark.svg" alt="OrthoCare logo" width={44} height={44} />
              <div>
                <h3 className="text-3xl font-extrabold">OrthoCare</h3>
                <p className="mt-1 text-sm text-slate-200">Precision in Every Step</p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-300">
              We provide advanced orthopedic care with compassion and excellence to help you move better and live
              stronger.
            </p>
            <div className="mt-5 flex gap-3 text-xs text-slate-200">
              {['f', 'ig', 'yt', 'in'].map((social) => (
                <span
                  key={social}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 font-semibold"
                >
                  {social}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {quickLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Patient Guide</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {guide.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>123, Health Avenue, Medi District, CA 94016</li>
              <li>+1 (555) 123-4567</li>
              <li>info@orthocare.com</li>
              <li>Mon - Sat: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-5 text-sm text-slate-300 md:flex md:items-center md:justify-between">
          <p>© 2024 OrthoCare. All rights reserved.</p>
          <div className="mt-3 flex flex-wrap gap-5 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
