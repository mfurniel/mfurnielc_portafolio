import { useState } from "react";
import CustomChip from "../components/CustomChip";
import GlanzProject from "../components/Projects/GlanzProject";
import PortfolioProject from "../components/Projects/PortfolioProject";

function ProjectsPage() {
  const projects = [
    {
      index: 0,
      title: "Glanz Optical Calculator Transposition",
      description:
        "Glanz es una aplicación móvil creada para realizar el cálculo de transposición óptica de recetas de lentes. Actualmente disponible en la Play Store.",
      chips: [
        { label: "Flutter", bgColor: "bg-colorFlutter", textColor: "text-white" },
        { label: "Dart", bgColor: "bg-colorDart", textColor: "text-white" },
      ],
    },
    {
      index: 1,
      title: "Personal Portfolio Website",
      description:
        "Un portafolio personal creado para mostrar proyectos y habilidades como desarrollador web. Utiliza tecnologías modernas.",
      chips: [
        { label: "React", bgColor: "bg-colorReact", textColor: "text-black" },
        { label: "Tailwind", bgColor: "bg-colorTailwind", textColor: "text-white" },
        { label: "TypeScript", bgColor: "bg-colorTypeScript", textColor: "text-white" },
      ],
    },
  ];

  const [selection, setSelection] = useState(0);

  return (
    <div id="portfolio" className="flex justify-center min-h-screen w-full p-6 bg-slate-200">
      <div className="flex flex-col md:flex-row h-full w-full border-2 bg-white border-double border-black">
        {/* Sidebar */}
        <div className="flex flex-col items-start w-full md:w-1/3 p-6 md:p-10 text-black border-b md:border-r-2 border-gray-300">
          <h1 className="text-4xl font-light mb-6 md:mb-10">Proyectos</h1>
          <ul className="space-y-4 w-full">
            {projects.map((project, index) => (
              <li
                key={index}
                className={`text-lg font-semibold flex items-center space-x-2 cursor-pointer p-4 rounded-lg transition-all duration-300 ease-in-out transform w-full ${
                  selection === index
                    ? "bg-principalBlue text-white border-l-4 border-principalBlue"
                    : "bg-gray-100 hover:bg-gray-200 hover:border-l-4 hover:border-principalBlue"
                }`}
                onClick={() => setSelection(index)}
              >
                {project.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Project Details */}
        <div className="flex flex-col items-start justify-center p-6 md:p-10 w-full md:w-2/3 overflow-hidden">
          <div className="flex flex-col w-full mb-4">
            <h1 className="text-3xl font-semibold text-gray-800">{projects[selection].title}</h1>
            <p className="text-lg text-gray-600 mt-4">{projects[selection].description}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              {projects[selection].chips.map((chip, index) => (
                <CustomChip
                  key={index}
                  label={chip.label}
                  bgColor={chip.bgColor}
                  textColor={chip.textColor}
                />
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center items-center overflow-hidden">
            <div className="w-full max-w-3xl overflow-hidden">
              {selection === 0 && <GlanzProject />}
              {selection === 1 && <PortfolioProject />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
