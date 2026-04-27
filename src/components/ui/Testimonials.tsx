export default function Testimonials() {
  return (
    <section className="px-10 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Patients Say
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-xl shadow">
          <p>"Amazing care and support."</p>
          <h4 className="mt-4 font-semibold">Sarah J.</h4>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p>"Professional and life-changing."</p>
          <h4 className="mt-4 font-semibold">Michael R.</h4>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p>"Highly recommended!"</p>
          <h4 className="mt-4 font-semibold">David L.</h4>
        </div>

      </div>
    </section>
  );
}