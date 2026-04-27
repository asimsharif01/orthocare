const services = [
  {
    title: "Knee Replacement",
    desc: "Advanced knee replacement surgery for pain-free mobility.",
  },
  {
    title: "Hip Replacement",
    desc: "Restore movement and improve quality of life.",
  },
  {
    title: "Spine Treatment",
    desc: "Comprehensive spine care for a healthier tomorrow.",
  },
  {
    title: "Shoulder Care",
    desc: "Expert care for shoulder pain and injuries.",
  },
  {
    title: "Physiotherapy",
    desc: "Personalized rehabilitation programs.",
  },
];

export default function Services() {
  return (
    <section className="px-10 py-16">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">
          Comprehensive Orthopedic Solutions
        </h2>

        <button className="text-blue-600 font-medium">
          View All →
        </button>
      </div>

      <div className="grid md:grid-cols-5 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4" />

            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>

            <button className="text-blue-600 text-sm mt-3">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}