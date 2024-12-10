/* eslint-disable react/prop-types */

function Cards(props) {
    return (
      <div className="card">
        <img src={props.image} alt={props.name} />
        <div className="card-content">
          <h2>{props.name}</h2>
          <p className="color">Color: {props.color}</p>
          <p>{props.des}</p>
        </div>
      </div>
    );
  }
  
  export default Cards;
  