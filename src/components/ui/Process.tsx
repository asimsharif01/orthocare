const steps = [
  ["01", "Consultation", "We listen to your concerns and evaluate your condition."],
  ["02", "Diagnosis", "Advanced imaging and tests for accurate diagnosis."],
  ["03", "Treatment Plan", "Personalized plan tailored to your needs."],
  ["04", "Treatment", "Expert care using advanced technology."],
  ["05", "Recovery", "Guided recovery and continuous support."],
];

export default function Process() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-6 py-10 lg:px-2">
      <div className="rounded-3xl border border-slate-100 bg-white p-8">
        <p className="text-sm font-bold uppercase tracking-wide text-indigo-500">Your Journey With Us</p>
        <div className="mt-5 grid gap-6 lg:grid-cols-5">
          {steps.map(([number, title, desc]) => (
            <article key={number}>
              <p className="text-2xl font-black text-indigo-500">{number}</p>
              <h3 className="mt-2 text-3xl font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-lg text-slate-500">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
