import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const Footer = () => {
  console.log('Rendering Footer');
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            deleniti quae accusamus commodi temporibus mollitia illum fugit
            deserunt autem inventore.
          </p>
          <div className="footer__socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferer noopener"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
        <h4>Permalinks</h4>
        <Link to="/about">About</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/trainers">Trainers</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </article>
      <article>
        <h4>Insights</h4>
        <Link to="/s">Blog</Link>
        <Link to="/s">Case Studies</Link>
        <Link to="/s">Events</Link>
        <Link to="/s">Communities</Link>
        <Link to="/s">FQAs</Link>
      </article>
      <article>
        <h4>Get In Touch</h4>
        <Link to="/s">Support</Link>
        <Link to="/contact">Contact</Link>
      </article>
     </div>
    <div className="footer__copyright">
        <small>
          2023 MISSIONVILLE INTERNATIONAL THEOLOGY &copy; All Rights Reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;