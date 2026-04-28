const highlights = [
  {
    title: "Quick Response",
    description: "We'll get back to you within 24 hours.",
  },
  {
    title: "Expert Care",
    description: "Treatment by top orthopedic specialists.",
  },
  {
    title: "Insurance Support",
    description: "We accept most major insurance plans.",
  },
];

const inputBase =
  "w-full rounded-xl border border-white/90 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100";

export default function CTA() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-6 pb-10 pt-8 lg:px-2">
      <div className="rounded-[30px] bg-gradient-to-r from-[#f4f7ff] via-[#eef2ff] to-[#f7f0ff] p-6 shadow-[0_16px_50px_-30px_rgba(49,46,129,0.65)] md:p-8 lg:p-10">
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-indigo-500 md:text-sm">Ready to Take The Next Step?</p>

        <div className="mt-4 grid gap-7 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Book Your Appointment Today</h2>
            <p className="mt-3 max-w-xl text-base text-slate-600 md:text-lg">
              Our team is here to help you move better and live a healthier life.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <article key={item.title} className="flex gap-3 rounded-xl bg-white/60 p-3">
                  <div className="mt-0.5 h-10 w-10 shrink-0 rounded-full bg-indigo-100 text-indigo-600 ring-1 ring-indigo-200" />
                  <div>
                    <h3 className="text-sm font-bold text-indigo-500">{item.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <form className="grid gap-3 sm:grid-cols-2" aria-label="Book appointment form">
            <input className={inputBase} placeholder="Full Name" />
            <input className={inputBase} placeholder="Phone Number" />
            <input className={inputBase} placeholder="Preferred Date" />
            <select className={inputBase} defaultValue="">
              <option value="" disabled>
                Select Service
              </option>
              <option>Knee Replacement</option>
              <option>Hip Replacement</option>
              <option>Spine Treatment</option>
              <option>Physiotherapy</option>
            </select>

            <button
              type="submit"
              className="sm:col-span-2 rounded-xl bg-gradient-to-r from-[#6b5bff] to-[#3b6dff] px-6 py-3 text-base font-semibold text-white transition hover:brightness-105"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
