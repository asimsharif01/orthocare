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
    <section className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-2">
      <p className="text-sm font-bold uppercase tracking-wide text-indigo-500">+ Our Services</p>
      <div className="mb-8 mt-2 flex items-center justify-between gap-4">
        <h2 className="text-5xl font-extrabold text-slate-900">Comprehensive Orthopedic Solutions</h2>
        <button className="text-lg font-semibold text-indigo-500">View All Services →</button>
      </div>

      <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-5">
        {services.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
            <Image src={item.image} alt={item.title} width={420} height={300} className="h-44 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-3xl font-bold text-slate-800">{item.title}</h3>
              <p className="mt-2 text-lg text-slate-500">Personalized orthopedic care for faster and safer recovery.</p>
              <button className="mt-4 text-lg font-semibold text-indigo-500">Learn More →</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
