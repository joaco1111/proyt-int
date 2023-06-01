import Card from "../Card/Card"


export default function Cards({ characters }) {
	const onClose = () => window.alert('Estas seguro que quieres borrar el personaje?')
	return (
		<div><p>
			{characters.map(({ id, name, status, species, origin, gender, image }) => {
				return (
					<Card
					key={id}
					name={name}
					status={status}
					species={species}
					gender={gender}
					origin={origin.name}
					image={image}
					onClose={onClose}
					/>
					)
				})}
	    </p></div>
	)
}


