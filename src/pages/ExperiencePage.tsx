
function ExperiencePage() {
  return (
    <div id="experience" className="h-screen w-full p-6 bg-slate-200">
      <div className="flex items-center h-full w-full bg-white border-2 border-double border-black p-10">

        <div className="flex flex-col h-full items-center w-1/3 bg-slate-200 p-4">
          <h2 className="text-2xl font-light ">Estudios</h2>
        </div>

        <div className="w-[1px] bg-black h-5/6 ml-2 mr-2"></div>

        <div className="flex flex-col h-full items-center w-1/3 bg-slate-200 p-4">
          <h2 className="text-2xl font-light">Actividades Academicas</h2>
        </div>

        <div className="w-[1px] bg-black h-5/6 ml-2 mr-2"></div>

        <div className="flex flex-col h-full items-center w-1/3 bg-slate-200 p-4">
          <h2 className="text-2xl font-light">Experiencia Laboral</h2>
        </div>

      </div>
    </div>
  )
}

export default ExperiencePage