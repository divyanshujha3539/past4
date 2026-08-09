import CTA from '../components/CTA'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

function LandingPage({ backendStatus }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-900" id="top">
      <Navbar backendStatus={backendStatus} />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
