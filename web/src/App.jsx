
import ButtonGradient from './assets/svg/ButtonGradient';
import AboutUs from './components/AboutUs';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonial from './components/Testimonials';
import Selection from './components/selection';
const App=()=>{
  return (
    <>
    <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
      <Header/>
      <Hero />
      <AboutUs/>
      <Services/>
      <Selection />
      <Testimonial/>
      <Consultation/>
      <Footer/>
    </div>
    <ButtonGradient/>
    </>
  );
};
export default App;