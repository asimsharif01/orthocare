import Image from "next/image";
import Link from "next/link";

const navLinks = ["Home", "Services", "About Us", "Doctors", "Patient Guide", "Blog"];

export default function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-6 lg:px-2">
      <div className="flex items-center gap-3">
        <Image src="/orthocare/logo-mark.svg" alt="OrthoCare logo" width={44} height={44} />
        <div>
          <p className="text-2xl font-bold leading-none text-slate-900">OrthoCare</p>
          <p className="text-xs font-medium tracking-wide text-slate-500">Precision in Every Step</p>
        </div>
      </div>

      <nav className="hidden items-center gap-9 lg:flex">
        {navLinks.map((label, index) => (
          <Link
            key={label}
            href="#"
            className={`text-base font-semibold ${
              index === 0 ? "text-indigo-500" : "text-slate-500 hover:text-indigo-500"
            } transition-colors`}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="hidden items-center gap-4 md:flex">
        <button className="rounded-2xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 shadow-sm">
          ☎ +1 (555) 123-4567
        </button>
        <button className="rounded-2xl bg-gradient-to-r from-violet-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200">
          Book Appointment
        </button>
      </div>
    </header>
  );
}
