import { useState } from "react";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Topbar visible en pantallas móviles */}
      <div className="md:hidden w-full bg-principalBlue shadow-lg p-4 flex justify-between items-center">
        <h1 className="text-white text-xl">Mauricio Furniel</h1>
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Icono de menú tipo "hamburguesa" */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div className="hidden md:flex flex-col sticky top-0 left-0 w-1/6 border-r-2 border-white h-screen p-4 bg-principalBlue shadow-lg z-50 ">
        <a href="#home">
          <div className="flex flex-col items-center mt-16">
            <h1 className="text-white text-center text-xl">Mauricio Furniel Campos</h1>
            <h2 className="text-white text-xl">Portafolio</h2>
            <span className="text-blue-200">(En construcción)</span>
          </div>
        </a>
        <div className="flex flex-col items-start mt-16 pl-2 pr-6 gap-3">
          <h3 className="text-white text-sm"><a href="#about" className="hover:underline">SOBRE MÍ</a></h3>
          <div className="h-[1px] w-full bg-white"></div>
          <h3 className="text-white text-sm"><a href="#skill" className="hover:underline">HABILIDADES</a></h3>
          <div className="h-[1px] w-full bg-white"></div>
          <h3 className="text-white text-sm"><a href="#education" className="hover:underline">EDUCACIÓN</a></h3>
          <div className="h-[1px] w-full bg-white"></div>
          <h3 className="text-white text-sm"><a href="#experience" className="hover:underline">EXPERIENCIA</a></h3>
          <div className="h-[1px] w-full bg-white"></div>
          <h3 className="text-white text-sm"><a href="#portfolio" className="hover:underline">PORTAFOLIO</a></h3>
          <div className="h-[1px] w-full bg-white"></div>
          {/* <h3 className="text-white text-sm"><a href="#contact" className="hover:underline">CONTACTO</a></h3> */}
        </div>
      </div>

      {/* Menu desplegable en móviles */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-principalBlue text-white p-4 absolute top-16 left-0 w-full z-50">
          <a href="#about" className="hover:underline py-2" onClick={toggleMenu}>SOBRE MÍ</a>
          <a href="#skill" className="hover:underline py-2" onClick={toggleMenu}>HABILIDADES</a>
          <a href="#education" className="hover:underline py-2" onClick={toggleMenu}>EDUCACIÓN</a>
          <a href="#experience" className="hover:underline py-2" onClick={toggleMenu}>EXPERIENCIA</a>
          <a href="#portfolio" className="hover:underline py-2" onClick={toggleMenu}>PORTAFOLIO</a>
          {/* <a href="#contact" className="hover:underline py-2" onClick={toggleMenu}>CONTACTO</a> */}
        </div>
      )}
    </>
  )
}

SideBar.propTypes = {}

export default SideBar
