import Header from '../../components/Header'
import HeaderImage from '../../images/Gal19.jpg'
import StoryImage from '../../images/Gal4.jpg'
import VisionImage from '../../images/Gal20.jpg'
import MissionImage from '../../images/Gal21.jpg'
import './about.css'



const About = () => {
  return (
   <>
   <Header title="About Us" image={HeaderImage}>
   Who are We ?                                                                                                                                                             
   We are an inter-denominational, Faith Base Organization (FBO), duly registered with the Corporate 
   Affairs Commission of the Federal Republic of Nigeria and have affiliation and accreditation status 
   with reputable Christian Ministries and Institutions both locally and internationally.
   </Header>

   <section className='about__story'>
    <div className="container about__story-container">
      <div className="about__section-image">
        <img src={StoryImage} alt="Our Story Image" />
      </div>
      <div className="about__section-content">
        <h3>MISSIONSVILLE INTERNATIONAL CHRISTIAN EMBASSY & THEOLOGICAL SEMINARY</h3>
        <p>
          (An Interdenominational Centre for Global Missions, Discipleship, Leadership Development & Social Services)                  
          Plot 170A, Cadastral Zone Layout III, Kuje Road, Gwagwalada, Abuja, FCT-Nigeria
          Affiliated to Kingdom Life University, Tampa Florida, USA and Accredited by OMNI Missions 
          Academy @ Great Commission Ministries, Minneapolis, Minnesota, USA.
          “Equipping the Saints for the Work of the Ministry” (Ephesians 4: 11-13)
        </p>
        <p>
          For cutting edge Christian ministry, it is imperative for every Christian Worker or Minister, 
          to seek to acquire the relevant theological training such as we offer here in Missionsville 
          International Theological Seminary (MITS). Zeal is good. But zeal without appropriate knowledge 
          is counterproductive and destructive both to the minister and the people been ministered to. 
          Ultimately, the damaging consequence on the generality of the society is better imagined than seen.
        </p>
        <p>
          The training we offer is very comprehensive.  Our curriculum is second to none and it is tailored 
          to suit ministry in all context. We are not only equipping our seminarians with sound theological 
          education, we also ordain and license them upon graduation as global agents of transformation.
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
        <h2>Our Vision</h2>
        <p>
        Our Vision is to preach the Gospel of the Kingdom to all Nations around the World and to 
        equip the Saints for the Work of the Ministry. (Matthew 28:19-20; Mark 16:15-18; Ephesians 4:11-13)
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
        <h2>Our Mission</h2>
        <p>
        We are committed to Global Evangelization & Missions; Discipleship; Leadership Development; 
        Community Service and Capacity Building with a view to equipping the Saints for kingdom advancement.
        </p>
        <h2>Motto</h2>
        <p>
        “Equipping the Saints for the Work of the Ministry” (Ephesians 4: 11-13)
        </p>
      </div>
    </div>

   </section>
   </>
  )
}

export default About