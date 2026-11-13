import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import CommunityProgram from './components/CommunityProgram'
import TrainingProgram from './components/TrainingProgram'
import CoachProfile from './components/CoachProfile'
import AchievementsGallery from './components/AchievementsGallery'
import CommunityPartnership from './components/CommunityPartnership'
import Safety from './components/Safety'
import PartnershipCTA from './components/PartnershipCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#why" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-energy focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <CommunityProgram />
        <TrainingProgram />
        <CoachProfile />
        <AchievementsGallery />
        <CommunityPartnership />
        <Safety />
        <PartnershipCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
