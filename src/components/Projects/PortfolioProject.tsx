import PortfolioImage from '../../assets/portafolioHome.png'; // Asegúrate de importar la imagen

function PortfolioProject() {
  return (
    <img
      src={PortfolioImage}
      alt="Imagen del Portafolio"
      className="w-full max-w-3xl rounded-lg shadow-lg"
    />
  );
}

export default PortfolioProject;