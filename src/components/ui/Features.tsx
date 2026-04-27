export default function Features() {
  return (
    <section className="px-10 py-20 bg-gray-50">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold">
            AI. Innovation. Better Outcomes.
          </h2>

          <p className="text-gray-600 mt-4">
            We combine cutting-edge AI technology with expert care
            to deliver precise diagnosis and faster recovery.
          </p>

          <ul className="mt-6 space-y-3">
            <li>✔ AI-Powered Diagnosis</li>
            <li>✔ Minimally Invasive Techniques</li>
            <li>✔ Personalized Treatment Plans</li>
            <li>✔ Faster Recovery Times</li>
          </ul>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>

        {/* Right */}
        <div className="bg-gray-200 h-[350px] rounded-2xl flex items-center justify-center">
          <span className="text-gray-500">AI Dashboard Image</span>
        </div>

      </div>
    </section>
  );
}