import CardStyled from "./styled/card.styled";

const Card = ({ personImage, name, headLine, bodyContent }) => {
  return (
    <CardStyled>
      <>
        <div className="head">
          <div className="thumbnail">
            <img src={personImage} alt={name} className="head__image" />
          </div>
          <div className="info">
            <h1>{name}</h1>
            <h3> Verified Graduate </h3>
          </div>
        </div>

        <div className="content">
          <h2>{headLine}</h2>
          <p>{bodyContent}</p>
        </div>
      </>
    </CardStyled>
  );
};

export default Card;
