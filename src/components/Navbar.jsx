import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");


  useEffect(() => {

    const handleScroll = () => {

  const sections = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "certificates",
    "achievements",
    "contact"
  ];

  const scrollPosition = window.scrollY + 200;


  sections.forEach((section) => {

    const element = document.getElementById(section);

    if (element) {

      const sectionTop = element.offsetTop;
      const sectionHeight = element.offsetHeight;


      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveSection(section);
      }

    }

  });

};


    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };


  }, []);



  const navLinks = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "certificates",
    "achievements",
    "contact"
  ];



  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500">
          Shreya Jadhav
        </h1>



        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (

            <a
              key={link}
              href={`#${link}`}
              className={`capitalize transition ${
                activeSection === link
                  ? "text-blue-500"
                  : "hover:text-blue-500"
              }`}
            >
              {link}
            </a>

          ))}



        </div>



        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>


      </div>




      {/* Mobile Menu */}

      {isOpen && (

        <div className="md:hidden bg-slate-950 px-6 py-5 flex flex-col gap-5">


          {navLinks.map((link) => (

            <a
  key={link}
  href={`#${link}`}
  onClick={() => setActiveSection(link)}
  className={`capitalize transition ${
    activeSection === link
      ? "text-blue-500"
      : "hover:text-blue-500"
  }`}
>
  {link}
</a>

          ))}



          <a
            href="/Shreya_Jadhav_Resume.pdf"
            download
            className="bg-blue-600 px-5 py-2 rounded-xl text-center hover:bg-blue-700"
          >
            Resume
          </a>


        </div>

      )}


    </nav>

  );

}

export default Navbar;