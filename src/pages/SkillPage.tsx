// import React from 'react'
// import PropTypes from 'prop-types'

// import IconCard from "../components/Skill/IconCard"

function SkillPage() {

  const skills = [
    { name: 'JavaScript', iconUrl: 'src/assets/icons/javascriptIcon.svg' },
    { name: 'TypeScript', iconUrl: 'src/assets/icons/typescriptIcon.svg' },
    { name: 'Python', iconUrl: 'src/assets/icons/pythonIcon.svg' },
    { name: 'Dart', iconUrl: 'src/assets/icons/dartIcon.svg' },
    { name: 'HTML', iconUrl: 'src/assets/icons/htmlIcon.svg' },
    { name: 'CSS', iconUrl: 'src/assets/icons/cssIcon.svg' },
    { name: 'Tailwind', iconUrl: 'src/assets/icons/tailwindIcon.svg' },
    { name: 'Git', iconUrl: 'src/assets/icons/gitIcon.svg' },
    { name: 'GitHub', iconUrl: 'src/assets/icons/githubIcon.svg' },
    { name: 'Postgresql', iconUrl: 'src/assets/icons/postgresqlIcon.svg' },
    { name: 'Mongo', iconUrl: 'src/assets/icons/mongoIcon.svg' },
    { name: 'Vue', iconUrl: 'src/assets/icons/vueIcon.svg' },
    { name: 'React', iconUrl: 'src/assets/icons/reactIcon.svg' },
    { name: 'Flutter', iconUrl: 'src/assets/icons/flutterIcon.svg' }
  ];

  return (
    <div id="skill" className="flex items-center justify-center">
      <div className=" w-full text-center">
        <h1 className="text-3xl font-light text-gray-800 pb-8 pt-4">Habilidades</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center  hover:bg-gray-100 transition-colors duration-300 rounded-lg"
            >
              <img src={skill.iconUrl} alt={`${skill.name} icon`} className="h-12 w-12" />
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
