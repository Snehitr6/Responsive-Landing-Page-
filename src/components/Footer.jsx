function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold">Stackly</h2>
          <p className="mt-3 text-gray-300">
            Building responsive web applications using React and  CSS.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-3">
            Quick Links
          </h2>

          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-3">
            Contact
          </h2>

          <p>Email: info@thestackly.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </div>

      <div className="text-center mt-10 border-t border-gray-700 pt-5">
        © 2026 TheStackly. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;