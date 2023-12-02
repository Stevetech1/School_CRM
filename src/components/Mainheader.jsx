import { Link } from 'react-router-dom';
import image from '../images/MITS7.jpg';

const Mainheader = () => {
  return (
    <header className="main__header">
      <div className="main__header-container">
        <div className="main__header-left">
          <h4>#100 Days of Work Out</h4>
          <h1>Join The Legends of Fitness</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In officia adipisci vero suscipit tenetur quos.
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
