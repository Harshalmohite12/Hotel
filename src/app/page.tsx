import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Menu from '@/components/sections/Menu';
import DishesCarousel from '@/components/sections/DishesCarousel';
import CocktailExperience from '@/components/sections/CocktailExperience';
import Gallery from '@/components/sections/Gallery';
import Events from '@/components/sections/Events';
import Reviews from '@/components/sections/Reviews';
import InstagramGrid from '@/components/sections/InstagramGrid';
import Reservation from '@/components/sections/Reservation';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import AmbientBackground from '@/components/AmbientBackground';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bgDark overflow-hidden flex flex-col justify-between">
      {/* Ambient background particles and glowing backlights */}
      <AmbientBackground />

      {/* Floating Scroll Progress Bar (Top) */}
      <ScrollProgress />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Core Site Contents */}
      <main className="w-full flex-grow relative z-10">
        <Hero />
        <About />
        <Menu />
        <DishesCarousel />
        <CocktailExperience />
        <Gallery />
        <Events />
        <Reviews />
        <InstagramGrid />
        <Reservation />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
