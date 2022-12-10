import logo from "../../img/header/logo.png";
import "./header.css";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__body">
          <div className="logo">
            <img src={logo} alt="img"/>
          </div>
          <div className="header__descr">Italian pizza in your home</div>
          <div className="phone-block__link">
            <div className="phone-block__number">
              <a href="tel:+79644230081">+ 7 964 423-00-81</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
