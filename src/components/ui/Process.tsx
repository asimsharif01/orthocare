const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We listen to your concerns and evaluate your condition.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
        <path d="M6 20a6 6 0 0 1 12 0" />
        <path d="M19 8h3" />
        <path d="M20.5 6.5v3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Diagnosis",
    description: "Advanced imaging and tests for accurate diagnosis.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Treatment Plan",
    description: "Personalized plan tailored to your needs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h8M8 11h8M8 15h5" />
        <path d="M10 1v4M14 1v4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Treatment",
    description: "Expert care using advanced technology.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <path d="m6 6 12 12" />
        <path d="m18 6-4 4" />
        <path d="m10 14-4 4" />
        <path d="M8 3v3M3 8h3M21 16h-3M16 21v-3" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Recovery",
    description: "Guided recovery and continuous support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <path d="M9 11a3 3 0 1 1 6 0v7a3 3 0 1 1-6 0v-7Z" />
        <path d="M12 5v2" />
        <path d="M7 7.5A6.5 6.5 0 0 0 12 20.5a6.5 6.5 0 0 0 5-13" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-6 py-10 lg:px-2">
      <div className="rounded-3xl border border-slate-100 bg-white p-8">
        <p className="text-sm font-bold uppercase tracking-wide text-indigo-500">Your Journey With Us</p>
        <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-3">
          {steps.map((step, index) => (
            <article key={step.number} className="relative">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                  {step.icon}
                </span>
                <p className="text-2xl font-black text-indigo-500">{step.number}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute top-4 left-[calc(100%-4px)] hidden h-px w-[calc(100%-8px)] bg-indigo-100 lg:block">
                  <span className="absolute top-1/2 right-0 -translate-y-1/2 text-indigo-300">→</span>
                </div>
              )}

              <h3 className="text-3xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-lg text-slate-500">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
