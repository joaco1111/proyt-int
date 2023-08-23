import React from "react";
import Card from "../Card/Card";
import Style from "../Cards/Cards.module.css";

export default function Cards({ characters }) {
	
	return (
		<div className={Style.container}>
			<p>
			{characters.map(({ id, name, status, species, origin, gender, image, onClose }) => {
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
	    	</p>
		</div>
	)
}


