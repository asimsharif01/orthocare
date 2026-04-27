export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 px-10 py-20 items-center">
      {/* Left */}
      <div>
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
          AI-Enhanced Orthopedic Care
        </span>

        <h1 className="text-5xl font-bold mt-4 leading-tight">
          Intelligent Care.
          <span className="text-blue-600 block">
            Stronger Tomorrow.
          </span>
        </h1>

        <p className="mt-4 text-gray-600">
          Advanced AI-powered diagnostics and precision treatments designed
          to help you move better, live pain-free.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Book Appointment
          </button>

          <button className="border px-6 py-3 rounded-lg">
            Explore Treatments
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="relative">
        <div className="h-[400px] bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
          <span className="text-gray-500">Image Placeholder</span>
        </div>
      </div>
    </section>
  );
}