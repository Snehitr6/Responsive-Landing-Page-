function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-blue-600 mb-6">
          About Stackly        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto">
          TheStackly is a modern software company focused on building
          responsive, user-friendly, and high-performance web
          applications using the latest technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              Deliver innovative digital solutions with quality,
              creativity, and customer satisfaction.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-600">
              Become a trusted technology partner by creating
              modern and scalable web applications.
            </p>
          </div>

        </div>

        <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
          Read More
        </button>

      </div>
    </section>
  );
}

export default About;