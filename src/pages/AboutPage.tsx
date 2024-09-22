import SkillPage from "./SkillPage";
import PersonIcon from '../assets/icons/personIcon.svg';
import MailIcon from '../assets/icons/mailWhiteIcon.svg';
import LinkedinIcon from '../assets/icons/linkedinRoundIcon.svg';
import GithubBlueIcon from '../assets/icons/githubBlueIcon.svg';


function AboutPage() {

  return (
    <div id="about" className="flex justify-end h-screen w-full bg-slate-200 p-6 ">
      <div className="flex flex-col justify-end items-center h-full w-full bg-white border-2 border-double border-black">
        <div className="h-1/2 w-full ">
          <div className="flex items-center h-full  p-4 gap-2">

            <div className="flex h-full w-8/12 items-center justify-center ">
              <img src={PersonIcon} className="h-52" alt="Profile Icon" />
              <div className="pl-4 w-full">
                <h2 className="text-lg font-bold">Mauricio Francisco Furniel Campos</h2>
                <h3>Ingeniero Civil Informático</h3>
                <h3>Universidad de Concepción</h3>
                <h3>Concepción, Región del Biobío, Chile</h3>

                <div className='flex gap-4 pt-2 items-center'>

                  <a href="mailto:mfurnielc@gmail.com" className="flex items-center justify-center bg-principalBlue text-xs text-white font-semibold rounded-xl p-2 gap-2 hover:bg-[#021e38]">
                    <img src={MailIcon} className="h-4" alt="Mail Icon" />
                    <span>mfurnielc@gmail.com</span>
                  </a>


                  <a href="https://www.linkedin.com/in/mauricio-furniel/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition">
                    <img src={LinkedinIcon} className="h-6 rounded-full" alt="LinkedIn Icon" />
                  </a>


                  <a href="https://github.com/mfurniel" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition">
                    <img src={GithubBlueIcon} className="h-6 rounded-full" alt="GitHub Icon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-[1px] bg-black h-5/6 ml-2 mr-2"></div>

            <div className="h-full w-full  flex flex-col justify-center items-start p-2 gap-4">
              <h2 className="text-black text-xl">SOBRE MÍ</h2>
              <p className="text-black">Soy Ingeniero Civil Informático titulado por la Universidad de Concepción, con un enfoque en el desarrollo de software, tanto en el ámbito mobile como web. A lo largo de mi formación y experiencia, he adquirido habilidades técnicas y profesionales relevantes, y mi pasión por este campo me impulsa a seguir explorando y creciendo en un entorno laboral. Mi experiencia laboral, que ha involucrado trato directo con clientes, me ha permitido desarrollar habilidades de comunicación efectiva, resolución de conflictos y la capacidad de ofrecer soluciones prácticas. Valoro profundamente el trabajo en equipo y la colaboración con mis colegas, considerándolos elementos clave para el éxito.</p>
            </div>
          </div>
        </div>


        <div className="h-[1px] bg-black w-11/12"></div>


        <div className="h-1/2 w-full">
          <SkillPage></SkillPage>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
