
import SideBar from './components/SideBar'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ExperiencePage from './pages/ExperiencePage'
import FooterSection from './pages/FooterSection'
import HomePage from './pages/HomePage'
// import ProjectsPage from './pages/ProjectsPage'

function App() {

  return (
    <div className="flex ">
      <SideBar />
      <div className="flex flex-col w-full">
        <HomePage />
        <AboutPage />
        <ExperiencePage />
        {/* <ProjectsPage /> */}
        <ContactPage />
        <FooterSection />
      </div>
    </div>
  )
}

export default App
