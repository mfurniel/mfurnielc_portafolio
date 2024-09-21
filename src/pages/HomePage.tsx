// import PropTypes from 'prop-types'

function HomePage() {
  return (
    <div className="h-screen bg-white p-12 pt-20">
      <div className="relative h-full">
        <div className="absolute top-4 left-4 w-7 h-7 bg-white rounded-full shadow-black shadow-xl border-4 border-gray-300"></div>
        <div className="absolute top-4 right-4 w-7 h-7 bg-white rounded-full shadow-black shadow-xl border-4 border-gray-300"></div>
        <div className="absolute bottom-4 left-4 w-7 h-7 bg-white rounded-full shadow-black shadow-xl border-4 border-gray-300"></div>
        <div className="absolute bottom-4 right-4 w-7 h-7 bg-white rounded-full shadow-black shadow-xl border-4 border-gray-300"></div>
        <div className="flex h-full items-center justify-cente rounded-3xl border-black shadow-2xl bg-gradient-to-r from-gray-800 to-black">
          <div className="flex flex-col items-center justify-center p-6">
            <h1 className="text-5xl font-bold font-mono tracking-wide text-white m-2">Hola, mi nombre es Mauricio Furniel Campos</h1>
            <h2 className="text-2xl text-white font-mono tracking-wide m-1">Ingeniero Civil Informatico</h2>
            <h2 className="text-xl text-white font-mono tracking-wide m-1">Universidad de Concepción</h2>
            <img
              src="https://normasgraficas.udec.cl/sites/default/files/escudoof.gif"
              alt="Descripción de la imagen"
              className="m-4 h-20"
            />
            <p className="text-white font-mono text-center text-md w-2/3">Soy Ingeniero Civil Informático titulado por la Universidad de Concepción, con un enfoque en el desarrollo de software, tanto en el ámbito mobile como web. A lo largo de mi formación y experiencia, he adquirido habilidades técnicas y profesionales relevantes, y mi pasión por este campo me impulsa a seguir explorando y creciendo en un entorno laboral.</p>
            <button className="w-32 rounded-2xl text-lg font-mono tracking-wide text-white border-2 border-white px-4 py-2 shadow-lg mt-10">
              Sobre mí
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

// HomePage.propTypes = {}

export default HomePage
