// import PropTypes from 'prop-types'

function SideBar() {
  return (
    <div className="flex flex-col sticky top-0 left-0 w-1/6 border-r-2 border-white h-screen p-4 bg-principalBlue shadow-lg z-50 ">
      <a href="#home">
        <div className="flex flex-col items-center mt-16">
          <h1 className="text-white text-center text-2xl">Mauricio Furniel</h1>
          <h2 className="text-white text-xl">Portafolio</h2>
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
        {/* <h3 className="text-white text-sm">EXPERIENCIA LABORAL</h3>
        <div className="h-[1px] w-full bg-white"></div> */}
        <h3 className="text-white text-sm"><a href="#portfolio" className="hover:underline">PORTAFOLIO</a></h3>
        <div className="h-[1px] w-full bg-white"></div>
        <h3 className="text-white text-sm"><a href="#contact" className="hover:underline">CONTACTO</a></h3>
      </div>
    </div>
  )
}

SideBar.propTypes = {}

export default SideBar
