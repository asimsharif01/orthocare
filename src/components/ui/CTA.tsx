export default function CTA() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-6 pb-16 pt-8 lg:px-2">
      <div className="rounded-[34px] bg-gradient-to-r from-blue-200 via-indigo-100 to-pink-100 p-8">
        <p className="text-sm font-bold uppercase tracking-wide text-indigo-500">Ready to Take The Next Step?</p>
        <div className="mt-2 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-5xl font-extrabold text-slate-900">Book Your Appointment Today</h2>
            <p className="mt-3 text-xl text-slate-600">Our team is here to help you move better and live a healthier life.</p>
          </div>
          <form className="grid gap-3 sm:grid-cols-2">
            <input className="rounded-xl border border-white/80 bg-white px-4 py-3 text-slate-700" placeholder="Full Name" />
            <input className="rounded-xl border border-white/80 bg-white px-4 py-3 text-slate-700" placeholder="Phone Number" />
            <input className="rounded-xl border border-white/80 bg-white px-4 py-3 text-slate-700" placeholder="Email Address" />
            <button className="rounded-xl bg-gradient-to-r from-violet-500 to-blue-600 px-4 py-3 text-white font-semibold">Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  );
}
