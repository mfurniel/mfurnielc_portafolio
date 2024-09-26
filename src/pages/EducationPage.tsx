import CustomChip from "../components/CustomChip";

function EducationPage() {
  return (
    <div id="education" className="h-screen w-full p-6 bg-slate-200 flex flex-col">


      <div className="h-full border-2 border-black bg-white flex flex-col items-center p-10">
        <div className="flex h-1/3 w-full ">
          <div className="flex flex-col h-full  justify-center items-center w-full">
            <h2 className="text-4xl font-light p-6 pt-2">Estudios</h2>
            <div className="flex justify-center h-full">

              <div className="flex items-center gap-4 p-6">
                <span className="text-3xl font-light p-2 border-r-2 h-full">01</span>
                <div className="h-full">
                  <h3 className="text-2xl font-semibold">Liceo Salesiano Domingo Savio</h3>
                  <h4 className="font-light">Concepción, Región del Biobío, Chile</h4>
                  <p className="text-lg font-semibold" >Enseñanza Media</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6">
                <span className="text-3xl font-light p-2 border-r-2 h-full">02</span>
                <div className="h-full">
                  <h3 className="text-2xl font-semibold">Universidad de Concepción</h3>
                  <h4 className="font-light">Concepción, Región del Biobío, Chile</h4>
                  <p className="text-lg font-semibold">Ingeniería Civil Informática</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-black w-10/12 ml-2 mr-2"></div>


        <div className="flex h-2/3 w-full">
          <div className="flex flex-col h-full p-8 ">
            <h2 className="text-4xl font-light text-center w-full p-6">Actividades Académicas</h2>
            <div className="flex justify-center h-full">

              <div className="flex items-center gap-4 p-6 w-1/4">
                <span className="text-3xl font-light text-center  h-full w-full border-r-2">01</span>
                <div className="h-full">
                  <h3 className="text-xl font-semibold">Memoria de Título</h3>
                  <p className="text-lg font-light">
                    Desarrollé un prototipo de dashboard interactivo en React con Highcharts para monitorear la adherencia al tratamiento farmacológico de pacientes.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <CustomChip label="JavaScript" bgColor="bg-colorJavaScript" textColor="text-black" />
                    <CustomChip label="React" bgColor="bg-colorReact" textColor="text-gray-900" />
                    <CustomChip label="Python" />
                  </div>
                </div>
              </div>

              <div className="flex  items-center gap-4 p-6 w-1/4 ">
                <span className="text-3xl font-light text-center  h-full w-full border-r-2">02</span>
                <div className="h-full">
                  <h3 className="text-xl font-semibold">Base de datos con PostgreSQL</h3>
                  <p className="text-lg font-light">
                    Creación de una base de datos pensada en un negocio o almacén de barrio.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <CustomChip label="PostgreSQL" bgColor="bg-colorPostgreSQL" />
                  </div>

                </div>
              </div>

              <div className="flex items-center gap-4 p-6 w-1/4">
                <span className="text-3xl font-light text-center  h-full w-full border-r-2">03</span>
                <div className="h-full">
                  <h3 className="text-xl font-semibold">Software de Encuestas</h3>
                  <p className="text-lg font-light">
                    Desarrollo de un sistema de creación de encuestas utilizando Flask.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <CustomChip label="Flask" bgColor="bg-colorFlask" />
                    <CustomChip label="Python" bgColor="bg-colorPythonBlue" />
                    <CustomChip label="SQL" bgColor="bg-colorSQL" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 w-1/4">
                <span className="text-3xl font-light text-center  h-full w-full border-r-2">04</span>
                <div className="h-full">
                  <h3 className="text-xl font-semibold">Proyecto Estacionamiento</h3>
                  <p className="text-lg font-light">
                    Desarrollé una aplicación móvil en Flutter para visualizar la disponibilidad de espacios en estacionamientos.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <CustomChip label="Flutter" bgColor="bg-colorFlutter" />
                    <CustomChip label="Dart" bgColor="bg-colorDart" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationPage;
