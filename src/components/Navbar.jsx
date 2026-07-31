import { useState } from "react";
import logo from "../assets/logo.png";

const links = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "services", name: "Services" },
  { id: "contact", name: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="Stackly Logo"
    className="w-10 h-10 object-contain"
  />

  <h1 className="text-2xl font-bold text-blue-600">
Stackly
  </h1>
</div>

        <ul className="hidden md:flex gap-8">

          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`${
                  active === link.id
                    ? "text-blue-600 font-bold"
                    : ""
                } hover:text-blue-600`}
              >
                {link.name}
              </a>
            </li>
          ))}

        </ul>

        <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Login
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-5 space-y-3">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="block"
            >
              {link.name}
            </a>
          ))}

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;