import style from './Card.module.css'

export default function Card({ name, species, gender, image, onClose, status }) {
	return (
		<div className={style.container}>
			<div className={style.carta}>
				<button onClick={onClose}>X</button>
			</div>
			<h2> Name: {name} </h2>
			<h2> Status: {status} </h2>
			<h2> Species: {species} </h2>
			<h2> Gender: {gender} </h2>
			<div className={style.perfil}>
				<img src={image} alt="foto" />
			</div>
		</div>
	)
}
