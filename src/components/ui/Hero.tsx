import Image from "next/image";

const avatars = ["/orthocare/service-1.svg", "/orthocare/service-2.svg", "/orthocare/service-3.svg", "/orthocare/service-4.svg", "/orthocare/service-5.svg"];

export default function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-[1240px] gap-10 px-6 pb-14 pt-6 lg:grid-cols-[1fr_1.05fr] lg:px-2">
      <div className="pt-8">
        <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-indigo-500">
          ✦ AI-Enhanced Orthopedic Care
        </span>

        <h1 className="mt-8 text-6xl font-extrabold leading-[1.05] text-slate-900">
          Intelligent Care.
          <span className="block bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Stronger Tomorrow.</span>
        </h1>

        <p className="mt-6 max-w-xl text-2xl leading-relaxed text-slate-500">
          Advanced AI-powered diagnostics and precision treatments designed to help you move better, live pain-free.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <button className="rounded-2xl bg-gradient-to-r from-violet-500 to-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-200">
            Book Appointment →
          </button>
          <button className="rounded-2xl border-2 border-indigo-200 px-10 py-4 text-lg font-semibold text-indigo-500">
            Explore Treatments →
          </button>
        </div>

        <div className="mt-10 flex items-center gap-9 text-slate-600">
          <div className="flex -space-x-3">
            {avatars.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`Recovered patient ${i + 1}`}
                width={44}
                height={44}
                className="h-11 w-11 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <p className="text-lg font-semibold">10K+ Patients Recovered</p>
          <p className="text-xl font-bold text-amber-400">★★★★★</p>
          <p className="text-base font-semibold">4.9/5 Google Reviews</p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[48px] bg-gradient-to-br from-blue-50 via-white to-violet-100 p-10">
        <div className="absolute -right-16 top-10 h-[560px] w-[560px] rounded-full border border-indigo-200/60" />

        <div className="absolute bottom-12 left-8 rounded-3xl bg-white/90 p-6 shadow-xl">
          <p className="text-lg font-bold text-slate-800">AI Diagnosis</p>
          <p className="mt-2 text-slate-500">Accuracy</p>
          <p className="text-4xl font-black text-slate-800">97%</p>
          <div className="mt-4 h-12 w-28 rounded-xl bg-gradient-to-r from-blue-100 to-violet-100" />
        </div>

        <Image src="/orthocare/hero-knee.svg" alt="3D knee render" width={540} height={620} className="mx-auto mt-2" priority />

        <div className="absolute bottom-16 right-8 w-56 rounded-3xl bg-white/90 p-6 shadow-xl">
          <p className="text-2xl font-bold text-slate-800">Personalized Treatment</p>
          <div className="mt-4 space-y-2">
            <div className="h-2 rounded-full bg-indigo-100" />
            <div className="h-2 w-3/4 rounded-full bg-indigo-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
