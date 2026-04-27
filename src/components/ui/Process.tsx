const steps = [
  "Consultation",
  "Diagnosis",
  "Treatment Plan",
  "Treatment",
  "Recovery",
];

export default function Process() {
  return (
    <section className="px-10 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Your Journey With Us
      </h2>

      <div className="grid md:grid-cols-5 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-3">
              {i + 1}
            </div>
            <h3 className="font-semibold">{step}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}