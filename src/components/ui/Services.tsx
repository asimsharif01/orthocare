import Image from "next/image";

const services = [
  { title: "Knee Replacement", image: "/orthocare/service-1.svg" },
  { title: "Hip Replacement", image: "/orthocare/service-2.svg" },
  { title: "Spine Treatment", image: "/orthocare/service-3.svg" },
  { title: "Shoulder Care", image: "/orthocare/service-4.svg" },
  { title: "Physiotherapy", image: "/orthocare/service-5.svg" },
];

export default function Services() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-6 py-16 md:px-8 lg:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">+ Our Services</p>
      <div className="mb-8 mt-3 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">Comprehensive Orthopedic Solutions</h2>
        <button className="text-base font-semibold text-indigo-500">View All Services →</button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {services.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
            <Image src={item.image} alt={item.title} width={420} height={300} className="h-44 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-[1.95rem] font-semibold leading-tight text-slate-800">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-500">Personalized orthopedic care for faster and safer recovery.</p>
              <button className="mt-4 text-base font-semibold text-indigo-500">Learn More →</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
