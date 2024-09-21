// import React from 'react'
// import PropTypes from 'prop-types'

import IconCard from "../components/Skill/IconCard"

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
    <div className="h-screen bg-gradient-to-r from-[#F5F5F5] via-[#DCDCDC] to-[#E0E0E0] p-12">
      <div className="relative h-full">
        <div className="absolute top-4 left-4 w-7 h-7 bg-white rounded-full border-4 border-gray-300 shadow-black shadow-xl"></div>
        <div className="absolute top-4 right-4 w-7 h-7 bg-white rounded-full shadow-black shadow-xl border-4 border-gray-300"></div>
        <div className="absolute bottom-4 left-4 w-7 h-7 bg-white rounded-full shadow-black shadow-xl border-4 border-gray-300"></div>
        <div className="absolute bottom-4 right-4 w-7 h-7 bg-white rounded-full shadow-black shadow-xl border-4 border-gray-300"></div>
        <div className="flex flex-col h-full items-center justify-center bg-white rounded-3xl border-black shadow-2xl bg-gradient-to-r from-gray-800 to-black ">
          <h1 className="text-3xl text-white font-mono p-4">Habilidades</h1>
          <div className="grid grid-cols-4 gap-1">
            {skills.slice(0, 4).map((skill, index) => (
              <IconCard key={index} name={skill.name} iconUrl={skill.iconUrl} />
            ))}
            <div className="grid col-span-4 grid-cols-3 gap-1">
              {skills.slice(4, 7).map((skill, index) => (
                <IconCard key={index} name={skill.name} iconUrl={skill.iconUrl} />
              ))}
            </div>
            <div className="grid col-span-4 grid-cols-2 gap-1">
              {skills.slice(7, 9).map((skill, index) => (
                <IconCard key={index} name={skill.name} iconUrl={skill.iconUrl} />
              ))}
            </div>
            <div className="grid col-span-4 grid-cols-2 gap-1">
              {skills.slice(9, 11).map((skill, index) => (
                <IconCard key={index} name={skill.name} iconUrl={skill.iconUrl} />
              ))}
            </div>
            <div className="grid col-span-4 grid-cols-3 gap-1">
              {skills.slice(11, 14).map((skill, index) => (
                <IconCard key={index} name={skill.name} iconUrl={skill.iconUrl} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SkillPage.propTypes = {}

export default SkillPage;
