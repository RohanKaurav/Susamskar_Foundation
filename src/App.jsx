import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Hero from "./HeroSection";
import Mission from "./MissionGrid";
import CalendarSection from './CalendarEvents'
import AboutUs from "./AboutUs";
import SupportSection from "./DonateSection";
import Blog from "./BlogPreview";
export default function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Mission/>
    <CalendarSection/>
    <AboutUs/>
   <SupportSection/>
   <Blog></Blog>
    </>
  );
}
