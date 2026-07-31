import { useEffect, useState } from "react";

function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    show && (
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700"
      >
        ↑
      </button>
    )
  );
}

export default ScrollTop;