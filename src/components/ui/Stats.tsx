const stats = [
  { value: "100K+", label: "Successful Procedures" },
  { value: "30+", label: "Years of Experience" },
  { value: "95%", label: "Patient Satisfaction Rate" },
  { value: "24/7", label: "Patient Support Available" },
];

export default function Stats() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-6 lg:px-2">
      <div className="grid gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm md:grid-cols-4 md:gap-0 md:p-8">
        {stats.map((item) => (
          <div key={item.value} className="flex items-center gap-4 border-slate-100 px-4 md:border-r last:md:border-r-0">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-500">◌</div>
            <div>
              <p className="text-5xl font-black text-slate-900">{item.value}</p>
              <p className="mt-1 text-lg text-slate-500">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
