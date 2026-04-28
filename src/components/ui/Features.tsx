import Image from "next/image";

export default function Features() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-6 pb-12 md:px-8 lg:px-10">
      <div className="grid gap-8 rounded-[34px] bg-gradient-to-r from-blue-50 via-white to-violet-50 p-8 lg:grid-cols-[1fr_1.1fr_0.6fr]">
        <div className="pr-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">The Power of Technology</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">AI. Innovation. Better Outcomes.</h2>
          <p className="mt-4 text-xl leading-relaxed text-slate-600">
            We combine cutting-edge AI technology with expertise to deliver precise diagnosis, personalized treatment and faster recovery.
          </p>
          <ul className="mt-6 space-y-2 text-lg font-medium text-slate-700">
            <li>✔ AI-Powered Diagnosis</li>
            <li>✔ Minimally Invasive Techniques</li>
            <li>✔ Personalized Treatment Plans</li>
            <li>✔ Faster Recovery Times</li>
          </ul>
          <button className="mt-7 rounded-2xl border-2 border-indigo-200 px-7 py-3 text-lg font-semibold text-indigo-500">
            Learn More About Us →
          </button>
        </div>

        <div className="rounded-3xl bg-slate-900 p-5 text-indigo-100 shadow-2xl">
          <Image src="/orthocare/dashboard.svg" alt="AI dashboard" width={1200} height={760} className="h-[300px] w-full rounded-2xl object-cover" />
        </div>

        <div className="space-y-5">
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-slate-800">Robotic Assisted Surgery</p>
            <p className="mt-2 text-lg text-slate-500">Precision. Safety. Better outcomes.</p>
            <Image src="/orthocare/tech-robot.svg" alt="Robotic surgery arm" width={560} height={420} className="mt-4 h-28 w-full rounded-2xl object-cover" />
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-slate-800">3D Imaging & Navigation</p>
            <p className="mt-2 text-lg text-slate-500">Accurate diagnosis for effective treatment.</p>
            <Image src="/orthocare/tech-scan.svg" alt="3D imaging monitor" width={560} height={420} className="mt-4 h-28 w-full rounded-2xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
