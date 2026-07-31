import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.subject ||
      !form.message
    ) {
      alert("All fields are required");
      return;
    }

    if (!emailRegex.test(form.email)) {
      alert("Invalid Email");
      return;
    }

    setSuccess("Form submitted successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl text-center font-bold text-blue-600 mb-10">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8 space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Submit
          </button>

          {success && (
            <p className="text-green-600 font-semibold">
              {success}
            </p>
          )}
        </form>

      </div>

    </section>
  );
}

export default Contact;