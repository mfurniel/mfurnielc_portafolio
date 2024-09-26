import PlayIcon from '../../assets/icons/playIcon.svg'
import GlanzImage from '../../assets/downloadImagePS.png'

function GlanzProject() {
  return (

    <div className="bg-[#674d8a] rounded-lg p-8 text-white flex items-center justify-between ">
      <div>
        <h2 className="text-2xl font-bold mb-4">Download Glanz on the Play Store</h2>
        <p className="mb-6">
          Get the Glanz app on your Android device and start calculating transpositions on the go.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.grauss.glanz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-white text-[#674d8a] rounded-md px-6 py-3 font-medium hover:bg-[#463B68] hover:text-white transition-colors"
        >
          <img src={PlayIcon} className='h-8 p-2' />
          Download on Play Store
        </a>
      </div>
      <img
        src={GlanzImage}
        alt="Glanz App"
        className="w-56  rounded-lg"
      />
    </div>

  )
}

export default GlanzProject
