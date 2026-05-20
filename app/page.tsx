import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer"
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import CTA from "./components/CTA/CTA";
import FAQ from "./components/FAQ/FAQ";



export default function Home() {
  return (
    <div>
      
      <Hero />
      <Features />
      <Testimonials />
       <CTA />
       < FAQ />
      <Footer />
    </div>
  );
}
