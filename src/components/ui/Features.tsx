export default function Features() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-6 pb-12 lg:px-2">
      <div className="grid gap-8 rounded-[34px] bg-gradient-to-r from-blue-50 via-white to-violet-50 p-8 lg:grid-cols-[1fr_1.1fr_0.6fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-indigo-500">The Power of Technology</p>
          <h2 className="mt-3 text-5xl font-extrabold text-slate-900">AI. Innovation. Better Outcomes.</h2>
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
          <div className="h-[300px] rounded-2xl bg-gradient-to-b from-slate-800 via-blue-950 to-slate-950" />
        </div>

        <div className="space-y-5">
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-slate-800">Robotic Assisted Surgery</p>
            <p className="mt-2 text-lg text-slate-500">Precision. Safety. Better outcomes.</p>
            <div className="mt-4 h-28 rounded-2xl bg-gradient-to-r from-blue-100 to-violet-100" />
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-slate-800">3D Imaging & Navigation</p>
            <p className="mt-2 text-lg text-slate-500">Accurate diagnosis for effective treatment.</p>
            <div className="mt-4 h-28 rounded-2xl bg-gradient-to-r from-blue-100 to-violet-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
