function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold">
          Build Modern Websites
        </h1>

        <p className="mt-6 text-xl">

        </p>

        <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:scale-105 transition">
          Get Started
        </button>

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          <div className="bg-white text-black rounded-xl p-6 shadow">
            <h2 className="text-3xl font-bold">150+</h2>
            <p>Projects</p>
          </div>

          <div className="bg-white text-black rounded-xl p-6 shadow">
            <h2 className="text-3xl font-bold">75+</h2>
            <p>Clients</p>
          </div>

          <div className="bg-white text-black rounded-xl p-6 shadow">
            <h2 className="text-3xl font-bold">20+</h2>
            <p>Experts</p>
          </div>

          <div className="bg-white text-black rounded-xl p-6 shadow">
            <h2 className="text-3xl font-bold">10+</h2>
            <p>Years</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;