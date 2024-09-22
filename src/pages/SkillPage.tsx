// import React from 'react'
// import PropTypes from 'prop-types'

// Importar los íconos directamente
import JavaScriptIcon from '../assets/icons/javascriptIcon.svg';
import TypeScriptIcon from '../assets/icons/typescriptIcon.svg';
import PythonIcon from '../assets/icons/pythonIcon.svg';
import DartIcon from '../assets/icons/dartIcon.svg';
import HtmlIcon from '../assets/icons/htmlIcon.svg';
import CssIcon from '../assets/icons/cssIcon.svg';
import TailwindIcon from '../assets/icons/tailwindIcon.svg';
import GitIcon from '../assets/icons/gitIcon.svg';
import GitHubIcon from '../assets/icons/githubIcon.svg';
import PostgresqlIcon from '../assets/icons/postgresqlIcon.svg';
import MongoIcon from '../assets/icons/mongoIcon.svg';
import VueIcon from '../assets/icons/vueIcon.svg';
import ReactIcon from '../assets/icons/reactIcon.svg';
import FlutterIcon from '../assets/icons/flutterIcon.svg';

function SkillPage() {
  const skills = [
    { name: 'JavaScript', icon: JavaScriptIcon },
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'Python', icon: PythonIcon },
    { name: 'Dart', icon: DartIcon },
    { name: 'HTML', icon: HtmlIcon },
    { name: 'CSS', icon: CssIcon },
    { name: 'Tailwind', icon: TailwindIcon },
    { name: 'Git', icon: GitIcon },
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Postgresql', icon: PostgresqlIcon },
    { name: 'Mongo', icon: MongoIcon },
    { name: 'Vue', icon: VueIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'Flutter', icon: FlutterIcon },
  ];

  return (
    <div id="skill" className="flex items-center justify-center">
      <div className="w-full text-center">
        <h1 className="text-3xl font-light text-gray-800 pb-8 pt-4">Habilidades</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:bg-gray-100 transition-colors duration-300 rounded-lg"
            >
              <img src={skill.icon} alt={`${skill.name} icon`} className="h-12 w-12" />
              <span className="text-sm font-medium text-gray-600">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

SkillPage.propTypes = {}

export default SkillPage;
