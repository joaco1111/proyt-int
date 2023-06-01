import style from './Card.module.css'

export default function Card({ name, species, gender, image, onClose, status, origin }) {
	return (
	<div className={style.container}>
	<button onClick={onClose}>X</button>

	<img src={image} alt="foto"/>
	<h2> Name: {name} </h2>
	<h2> Status: {status} </h2> 
	<h2> Species: {species} </h2>
	<h2> Gender: {gender} </h2>
</div>
	)
}
