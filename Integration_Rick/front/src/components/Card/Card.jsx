// import style from './Card.module.css'
// export default function Card({ name, species, gender, image, onClose, status }) {
// 	return (
// 		<div className={style.container}>
// 			<div className={style.carta}>
// 				<button onClick={onClose}>X</button>
// 			</div>
// 			<h2> Name: {name} </h2>
// 			<h2> Status: {status} </h2>
// 			<h2> Species: {species} </h2>
// 			<h2> Gender: {gender} </h2>
// 			<div className={style.perfil}>
// 				<img src={image} alt="foto" />
// 			</div>
// 		</div>
// 	)
// }
import React from "react";
import style from './Card.module.css';

const Card = ({ characters }) => {
  return (
    <div className="container">
		<div className={style.tarjetas}>
      <div className="row">
        {characters.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card" style={{ minWidth: "200px" }}>
              <img className="card-img-top" src={item.image} alt="character" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <hr />
                <p className="card-text">Species: {item.species}</p>
                <p className="card-text">Location: {item.location.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
	</div>
  );
};


export default Card;
