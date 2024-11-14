import "./CoreConcept.css";

function CoreConcept({id, title, description, image}) {
  return (
    <li key={id}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcept;
