import "./footer.css";
import logo from "../../img/header/logo.png";
import Clock from "./Clock";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="header__body">
          <div className="logo">
            <img src={logo} alt="img"/>
          </div>
          <div className="phone-block__link">
            <div className="phone-block__number">
              <a href="tel:+79644230081">+ 7 964 423-00-81</a>
            </div>
          </div>
          <Clock />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
