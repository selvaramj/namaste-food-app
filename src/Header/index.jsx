import './Header.css';
import foodImage from '../images/food.png';
const Header = () => {
  return (
    <nav className="navWrapper">
      <div className="logoContainer">
        <img src={foodImage} alt="food maker logo" />
      </div>
      <ul className="navLinksContainer">
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};

export default Header;
