const services = [
  "Knee Replacement",
  "Hip Replacement",
  "Spine Treatment",
  "Shoulder Care",
  "Physiotherapy",
];

export default function Services() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-2">
      <p className="text-sm font-bold uppercase tracking-wide text-indigo-500">+ Our Services</p>
      <div className="mt-2 mb-8 flex items-center justify-between gap-4">
        <h2 className="text-5xl font-extrabold text-slate-900">Comprehensive Orthopedic Solutions</h2>
        <button className="text-lg font-semibold text-indigo-500">View All Services →</button>
      </div>

      <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-5">
        {services.map((title) => (
          <article key={title} className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
            <div className="h-44 bg-gradient-to-br from-slate-300 via-blue-200 to-indigo-200" />
            <div className="p-5">
              <h3 className="text-3xl font-bold text-slate-800">{title}</h3>
              <p className="mt-2 text-lg text-slate-500">Personalized orthopedic care for faster and safer recovery.</p>
              <button className="mt-4 text-lg font-semibold text-indigo-500">Learn More →</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
