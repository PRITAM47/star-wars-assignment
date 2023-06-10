import "./SpaceshipCard.css";

const SpaceshipCard = ({name, model, filmNum}) => {
  return (
    <div className='card mt pb'>
      <div className='ship-detail'>
        <h5>{name}</h5>
        <h6>Model</h6>
        <p>{model}</p>
      </div>
      <div className='film-detail mt'>
        <h6>Numer Of Films</h6>
        <p>{filmNum}</p>
      </div>
    </div>
  );
};

export default SpaceshipCard;
