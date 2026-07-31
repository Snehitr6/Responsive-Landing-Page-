const features = [
  "Responsive Design",
  "Fast Performance",
  "Reusable Components",
  "Modern UI",
  "Easy Customization",
  "Tailwind CSS"
];

function Features() {
  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          Features
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-bold mb-3">
                {feature}
              </h3>

              <p className="text-gray-600">
                Experience modern web development with high
                performance and responsive layouts.
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;