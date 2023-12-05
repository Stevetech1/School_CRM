import Header from '../../components/Header'
import HeaderImage from '../../images/MITS1.jpg'
import StoryImage from '../../images/MITS16.jpg'
import VisionImage from '../../images/MITS15.jpg'
import MissionImage from '../../images/MITS13.jpg'
import './about.css'



const About = () => {
  return (
   <>
   <Header title="About Us" image={HeaderImage}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dolore quibusdam ipsum deserunt, ullam voluptate maiores deleniti 
    aut temporibus explicabo minus reiciendis, in tempora ex distinctio asperiores necessitatibus blanditiis vel.
   </Header>

   <section className='about__story'>
    <div className="container about__story-container">
      <div className="about__section-image">
        <img src={StoryImage} alt="Our Story Image" />
      </div>
      <div className="about__section-content">
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis quae dolor quos at corrupti, 
          quibusdam deleniti iste quidem alias? Voluptatum, dolorem eaque omnis molestiae quod nam, 
          laborum exercitationem mollitia aspernatur quis modi repellendus similique inventore 
          accusantium odit, maxime qui?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam cum, aliquam quas dicta 
          officia obcaecati possimus fugiat necessitatibus, dolorum optio minus veniam iste 
          nesciunt temporibus pariatur numquam corrupti. Accusamus, quod.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minima eos excepturi! 
          Sint nostrum rem illo repudiandae veritatis animi aliquid.
        </p>
      </div>
    </div>

   </section>

   <section className='about__vision'>
    <div className="container about__vision-container">
    <div className="about__section-image">
        <img src={VisionImage} alt="Our Vision Image" />
      </div>
      
      <div className="about__section-content">
        <h1>Our Vision</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis quae dolor quos at corrupti, 
          quibusdam deleniti iste quidem alias? Voluptatum, dolorem eaque omnis molestiae quod nam, 
          laborum exercitationem mollitia aspernatur quis modi repellendus similique inventore 
          accusantium odit, maxime qui?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam cum, aliquam quas dicta 
          officia obcaecati possimus fugiat necessitatibus, dolorum optio minus veniam iste 
          nesciunt temporibus pariatur numquam corrupti. Accusamus, quod.
        </p>
        
      </div>
      
    </div>

   </section>

   <section className='about__mission'>
    <div className="container about__mission-container">
      <div className="about__section-image">
        <img src={MissionImage} alt="Our Mission Image" />
      </div>
      <div className="about__section-content">
        <h1>Our Mission</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis quae dolor quos at corrupti, 
          quibusdam deleniti iste quidem alias? Voluptatum, dolorem eaque omnis molestiae quod nam, 
          laborum exercitationem mollitia aspernatur quis modi repellendus similique inventore 
          accusantium odit, maxime qui?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam cum, aliquam quas dicta 
          officia obcaecati possimus fugiat necessitatibus, dolorum optio minus veniam iste 
          nesciunt temporibus pariatur numquam corrupti. Accusamus, quod.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minima eos excepturi! 
          Sint nostrum rem illo repudiandae veritatis animi aliquid.
        </p>
      </div>
    </div>

   </section>
   </>
  )
}

export default About