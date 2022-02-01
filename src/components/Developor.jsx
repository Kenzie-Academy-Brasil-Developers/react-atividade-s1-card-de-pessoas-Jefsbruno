import "./style.css";

const Card = ({ name, age, country }) => {
  return (
    <div className="container">
      <h3>Dev: {name}</h3>
      <h6>Idade:{age}</h6>
      <h6>País:{country}</h6>
    </div>
  );
};

export default Card;
