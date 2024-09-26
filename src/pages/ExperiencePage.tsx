
import CustomChip from '../components/CustomChip';

function ExperiencePage() {
  return (
    <div id="experience" className="h-screen w-full p-6 bg-slate-200">
      <div className="h-full border-2 border-black bg-white flex flex-col items-center justify-center p-10">
        <div id="experience-content" className="h-auto w-full p-6">
          <h2 className="text-3xl font-light mb-8">EXPERIENCIA LABORAL</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="relative bg-white p-6 shadow-md border-2 rounded-md">
              <div className="mt-8">
                <h3 className="text-xl font-bold">Desarrollador Junior</h3>
                <h4 className="text-sm text-gray-500">Eskuad - Remoto</h4>
                <span className=" text-sm ">Abril 2024 - Junio 2024</span>

                <hr className="border-t border-gray-400 my-2" />
                <p className="text-gray-700">
                  Participé en el desarrollo de nuevas funcionalidades para una plataforma web destinada al diseño y gestión de formularios. Utilicé metodologías ágiles para mejorar el rendimiento de la plataforma. Colaboré con el equipo dentro del marco Scrum, participando en reuniones diarias.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <CustomChip label="JavaScript" bgColor="bg-colorJavaScript" textColor="text-black" />
                  <CustomChip label="Vue" bgColor='bg-colorVue' />
                  <CustomChip label="Git" bgColor='bg-colorGit' />
                  <CustomChip label="GitHub" bgColor='bg-colorGitHub' />
                  <CustomChip label="Slack" bgColor='bg-colorSlack' />
                  <CustomChip label="Scrum" />
                </div>
              </div>
            </div>

            <div className="relative bg-white p-6 shadow-md border-2 rounded-md">
              <div className="mt-8">
                <h3 className="text-xl font-bold">Práctica Profesional</h3>
                <h4 className="text-sm text-gray-500">AVA Montajes - Híbrido</h4>
                <span className="text-sm rounded-md">Enero 2023 - Marzo 2023</span>

                <hr className="border-t border-gray-400 my-2" />
                <p className="text-gray-700">
                  Desarrollamos una aplicación móvil en Flutter para la completación de formularios y visualización de documentos en entornos con conectividad limitada, dirigida a trabajadores en minas. Implementamos sincronización de datos y diseñamos la base de datos del servidor para un almacenamiento eficiente. También desarrollamos widgets personalizados para mejorar la experiencia de usuario.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <CustomChip label="Flutter" bgColor='bg-colorFlutter' />
                  <CustomChip label="Dart" bgColor='bg-colorDart' />
                  <CustomChip label="SQLite" bgColor='bg-colorSQlite' />
                </div>
              </div>
            </div>


            <div className="relative bg-white p-6 shadow-md border-2 rounded-md">
              <div className="mt-8">
                <h3 className="text-xl font-bold">Tutor Par</h3>
                <h4 className="text-sm text-gray-500">CADE Universidad de Concepción</h4>
                <span className=" text-sm rounded-md ">Marzo 2022 - Diciembre 2022</span>
                <hr className="border-t border-gray-400 my-2" />
                <p className="text-gray-700">
                  Monitorée y di apoyo a un grupo de 5 estudiantes, asegurando su bienestar académico y personal. Facilitaba materiales de estudio adaptados a sus necesidades y entregaba informes sobre su progreso, proporcionando retroalimentación a los coordinadores del programa.
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
