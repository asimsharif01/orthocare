const testimonials = [
  {
    quote: "The care I received was exceptional. I'm back to doing the things I love pain-free!",
    name: "Sarah J.",
    treatment: "Knee Replacement",
  },
  {
    quote: "Professional, caring, and truly life-changing. Highly recommend the team!",
    name: "Michael R.",
    treatment: "Spine Surgery",
  },
  {
    quote: "From consultation to recovery, the entire experience was outstanding.",
    name: "David L.",
    treatment: "Shoulder Surgery",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-6 py-8 lg:px-2">
      <p className="text-sm font-bold uppercase tracking-wide text-indigo-500">+ Patient Stories</p>
      <div className="mt-2 mb-6 flex items-center justify-between">
        <h2 className="text-5xl font-extrabold text-slate-900">What Our Patients Say</h2>
        <button className="text-lg font-semibold text-indigo-500">View All Testimonials →</button>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
            <p className="text-5xl font-black text-indigo-200">“</p>
            <p className="mt-2 text-2xl leading-relaxed text-slate-600">{item.quote}</p>
            <p className="mt-6 text-2xl font-bold text-slate-800">{item.name}</p>
            <p className="text-lg text-slate-500">{item.treatment}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
