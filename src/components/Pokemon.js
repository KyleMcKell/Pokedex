import React from "react";
import "../styles/component_styles/Pokemon.css";

export const Pokemon = ({ pokemon }) => {
	return (
		<div className="pokemon">
			<div className="pokemon__card">
				<img
					src={pokemon.sprites.front_default}
					className="pokemon__sprite"
					alt={pokemon.name}
				/>
				<div className="pokemon__name">{pokemon.name}</div>
			</div>
		</div>
	);
};
