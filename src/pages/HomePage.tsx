// import React from 'react';
import CustomCarousel from '../components/Home/CustomCarousel';
import PersonIcon from '../assets/icons/personIcon.svg';
import LinkedInIcon from '../assets/icons/linkedinRoundIcon.svg';
import GitHubIcon from '../assets/icons/githubBlueIcon.svg';

function HomePage() {
  return (
    <div id="home" className="flex justify-end h-screen w-full p-6 bg-slate-200">
      <div className="flex justify-end h-full w-full border-2 bg-white border-double border-black">
        <div className="flex flex-col justify-center h-full w-2/3 pl-8">
          <h1 className="text-5xl font-semibold">Hola, mi nombre es:</h1>
          <h1 className="text-5xl font-bold mb-2">Mauricio Furniel Campos</h1>
          <div className="flex items-center">
            <h2 className="text-2xl mr-2">Ingeniero Civil Informático</h2>
            <img src={PersonIcon} className="h-12" />
          </div>
          <div className="flex items-center">
            <img
              src="https://normasgraficas.udec.cl/sites/default/files/escudoof.gif"
              alt="Descripción de la imagen"
              className="h-8"
            />
            <h3 className="text-xl ml-2">Universidad de Concepción</h3>
          </div>
          <button className="bg-principalBlue text-white font-bold py-2 px-4 rounded-xl w-44 m-3 shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            Descarga mi CV</button>
          <div className='flex gap-4 pt-2 w-44'>
            <a href="https://www.linkedin.com/in/mauricio-furniel/" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} className="h-8 shadow-lg rounded-full hover:shadow-2xl" alt="LinkedIn Icon" />
            </a>
            <a href="https://github.com/mfurniel" target="_blank" rel="noopener noreferrer">
              <img src={GitHubIcon} className="h-8 shadow-lg rounded-full hover:shadow-2xl" alt="GitHub Icon" />
            </a>
          </div>
        </div>

        <CustomCarousel />
      </div>
    </div>
  );
}

export default HomePage;
