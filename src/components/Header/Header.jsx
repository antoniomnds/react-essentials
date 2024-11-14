import "./Header.css";
import coreConceptsImg from "../../assets/react-core-concepts.png";

function Header() {
  const descriptions = ["Fundamental", "Crucial", "Core"];

  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  const description = descriptions[genRandomInt(descriptions.length - 1)];

  return (
    <header>
      <img src={coreConceptsImg} alt="Stylized atom"/>
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
