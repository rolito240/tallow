import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import FeaturedProducts from '../components/FeaturedProducts'
import Testimonials from '../components/Testimonials'
import WhyTallow from '../components/WhyTallow'
import './Home.css'

function Home() {
  return (
    <main className="home">
      <Hero />
      <Benefits />
      <FeaturedProducts />
      <WhyTallow />
      <Testimonials />
    </main>
  )
}

export default Home
