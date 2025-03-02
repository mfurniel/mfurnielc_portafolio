import CustomCarousel from '../components/Home/CustomCarousel';
import PersonIcon from '../assets/icons/personIcon.svg';
import LinkedInIcon from '../assets/icons/linkedinRoundIcon.svg';
import GitHubIcon from '../assets/icons/githubBlueIcon.svg';

function HomePage() {
  return (
    <div id="home" className="flex justify-end w-full p-6 md:h-screen bg-slate-200">
      <div className="flex justify-end w-full h-96 md:h-full border-2 border-black border-double bg-white">
        <div className="flex flex-col justify-center items-center w-full h-full p-4 md:w-2/3 md:pl-8 md:items-start">
          <h1 className="text-xl font-semibold text-center md:text-start md:text-5xl">Hola, mi nombre es:</h1>
          <h1 className="text-4xl font-bold text-center md:text-start md:text-5xl mb-2">Mauricio Furniel Campos</h1>
          <div className="flex items-center justify-center md:justify-start">
            <h2 className="mr-2 text-xl md:text-2xl">Ingeniero Civil Informático</h2>
            <img src={PersonIcon} className="h-8 md:h-12" alt="Person Icon" />
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Escudo_de_la_Universidad_de_Concepci%C3%B3n.svg"
              alt="Escudo Universidad de Concepción"
              className="h-6 md:h-8"
            />
            <h3 className="ml-2 text-lg md:text-xl">Universidad de Concepción</h3>
          </div>
          {/* <button className="w-44 m-3 py-2 px-4 font-bold text-white bg-principalBlue rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            Descarga mi CV
          </button> */}
          <div className="flex items-center justify-center w-44 gap-4 pt-2 md:justify-start">
            <a href="https://www.linkedin.com/in/mauricio-furniel/" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} className="h-8 rounded-full shadow-lg hover:shadow-2xl" alt="LinkedIn Icon" />
            </a>
            <a href="https://github.com/mfurniel" target="_blank" rel="noopener noreferrer">
              <img src={GitHubIcon} className="h-8 rounded-full shadow-lg hover:shadow-2xl" alt="GitHub Icon" />
            </a>
          </div>
        </div>

        <CustomCarousel />
      </div>
    </div>
  );
}

export default HomePage;
