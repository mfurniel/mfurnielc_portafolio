// import PropTypes from 'prop-types'

function TopBar() {
  return (
    <div className="flex fixed top-0 left-0 w-full bg-gradient-to-r from-gray-800 to-black p-4 shadow-lg z-50 justify-between items-center">
      <h1 className="text-white text-2xl">Mi Portafolio</h1>

      <div className="flex space-x-8">
        <h1 className="text-white text-lg">Educación</h1>
        <h1 className="text-white text-lg">Habilidades</h1>
        <h1 className="text-white text-lg">Proyectos</h1>
        <h1 className="text-white text-lg">Sobre mí</h1>
        <h1 className="text-white text-lg">Contacto</h1>
      </div>
    </div>
  )
}

TopBar.propTypes = {}

export default TopBar
