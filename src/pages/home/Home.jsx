import FAQs from '../../components/FAQs';
import Mainheader from '../../components/Mainheader';
import Programs from '../../components/Programs';
import Testimonials from '../../components/Testimonials';
import Values from '../../components/Values';
import Footer from '../../components/Footer';
import './home.css'



const Home = () => {
  return (
    
    <>
    <Mainheader/>
    <Programs/>
    <Values/>
    <FAQs/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default Home