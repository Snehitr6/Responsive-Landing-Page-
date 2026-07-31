const services = [
  {
    title: "Web Development",
    description: "Responsive websites using React and Tailwind CSS."
  },
  {
    title: "UI/UX Design",
    description: "Modern and attractive user interfaces."
  },
  {
    title: "Digital Solutions",
    description: "Complete business solutions for startups."
  }
];

function Services() {
  return (
    <section id="services" className="py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                Learn More
              </button>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;