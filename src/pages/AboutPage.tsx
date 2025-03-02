import SkillPage from "./SkillPage";
import PersonIcon from '../assets/icons/personIcon.svg';
// import MailIcon from '../assets/icons/mailWhiteIcon.svg';
import LinkedinIcon from '../assets/icons/linkedinRoundIcon.svg';
import GithubBlueIcon from '../assets/icons/githubBlueIcon.svg';

function AboutPage() {
  return (
    <div id="about" className="flex w-full min-h-screen bg-slate-200 p-6">
      <div className="flex flex-col justify-end items-center w-full h-full bg-white border-2 border-double border-black overflow-hidden">
        <div className="w-full h-full overflow-auto">
          <div className="flex flex-col lg:flex-row items-center h-full p-4 gap-2">

            <div className="flex items-center justify-center w-full lg:w-8/12">
              <img src={PersonIcon} className="h-32 md:h-28 lg:h-52" alt="Profile Icon" />
              <div className="pl-4 w-full">
                <h2 className="font-bold text-lg">Mauricio Francisco Furniel Campos</h2>
                <h3 className="text-base">Ingeniero Civil Informático</h3>
                <h3 className="text-base">Universidad de Concepción</h3>
                <h3 className="text-base">Concepción, Región del Biobío, Chile</h3>

                <div className="flex items-center gap-4 pt-2">
                  {/* <a href="mailto:mfurnielc@gmail.com" className="flex items-center justify-center p-2 gap-2 text-xs font-semibold text-white bg-principalBlue rounded-xl hover:bg-[#021e38]">
                    <img src={MailIcon} className="h-4" alt="Mail Icon" />
                    <span>mfurnielc@gmail.com</span>
                  </a> */}

                  <a href="https://www.linkedin.com/in/mauricio-furniel/" target="_blank" rel="noopener noreferrer" className="transition hover:scale-105">
                    <img src={LinkedinIcon} className="h-6 rounded-full" alt="LinkedIn Icon" />
                  </a>

                  <a href="https://github.com/mfurniel" target="_blank" rel="noopener noreferrer" className="transition hover:scale-105">
                    <img src={GithubBlueIcon} className="h-6 rounded-full" alt="GitHub Icon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:h-5/6 h-[1px] w-11/12 lg:w-[1px] bg-black lg:ml-2 lg:mr-2"></div>

            <div className="flex flex-col justify-center items-start w-full p-2 gap-4 overflow-auto">
              <h2 className="text-xl text-black">SOBRE MÍ</h2>
              <p className="text-black text-sm md:text-base">
                Soy Ingeniero Civil Informático titulado por la Universidad de Concepción, con un enfoque en el desarrollo de software, tanto en el ámbito mobile como web. A lo largo de mi formación y experiencia, he adquirido habilidades técnicas y profesionales relevantes, y mi pasión por este campo me impulsa a seguir explorando y creciendo en un entorno laboral. Mi experiencia laboral, que ha involucrado trato directo con clientes, me ha permitido desarrollar habilidades de comunicación efectiva, resolución de conflictos y la capacidad de ofrecer soluciones prácticas. Valoro profundamente el trabajo en equipo y la colaboración con mis colegas, considerándolos elementos clave para el éxito.
              </p>
            </div>
          </div>
        </div>

        <div className="w-11/12 h-[1px] bg-black"></div>

        <div className="w-full h-full overflow-auto">
          <SkillPage />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;