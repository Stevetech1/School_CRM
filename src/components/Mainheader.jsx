import { Link } from 'react-router-dom';
import image from '../images/Signboard.png';

const Mainheader = () => {
  return (
    <header className="main__header">
      <div className="main__header-container">
        <div className="main__header-left">
          <h4>A Journey To Real Life Experience</h4>
          <h1>How Can You Be Involved?</h1>
          <p>                                                                          
          You can spend quality time in praying for us. You can give money and material support 
          towards our local and foreign mission outreaches. You can volunteer to be a part of 
          what God is doing through us with your skills.
          </p>
          <p>
           It is our greatest pleasure to recommend to you the Missionsville International Theological Seminary 
           (MITS). It is an experience you will forever live to cherish. 
         </p>
          <Link to="/plans" className="btn lg">Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Mainheader;
