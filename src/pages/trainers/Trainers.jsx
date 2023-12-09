import Header from "../../components/Header";
import HeaderImage from '../../images/Gal19.jpg';
import { trainers } from "../../data";
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa';
import { FaLinkedinIn } from "react-icons/fa";
import Trainer from '../../components/Trainer'; 
import './trainers.css'


const Trainers = () => {
  return (
    <>
    <Header title="Our Trainers" image={HeaderImage}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis 
      aspernatur nulla unde magnam, magni quasi reprehenderit, minus incidunt 
      repudiandae quia, veniam eum maxime soluta cumque dolores enim nihil atque.
    </Header>
    <section className="trainers">
      <div className="container trainers__container">
        {
          trainers.map(({id, image, name, job, course, socials}) => {
           return <Trainer key={id} image={image} name={name} job={job} course={course} socials={
              [
                {icon: <BsInstagram/>, link: socials[0]},
                {icon: <AiOutlineTwitter/>, link: socials[1]},
                {icon: <FaFacebookF/>, link: socials[2]},
                {icon: <FaLinkedinIn/>, link: socials[3]}
              ]
            }/>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers