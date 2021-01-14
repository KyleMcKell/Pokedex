/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../styles/component_styles/Pokemon.css";

export const Pokemon = ({ pokemon }) => {
	return (
		<div className="pokemon">
			<a
				href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}_(Pok%C3%A9mon)`}
				className="pokemon__link"
				target="_blank"
			>
				<div
					className={`pokemon__card pokemon--${pokemon.types["0"].type.name}`}
				>
					<img
						src={pokemon.sprites.front_default}
						className={`pokemon__sprite`}
						alt={pokemon.name}
					/>
					<div className="pokemon__name">
						{`${pokemon.id}: ${pokemon.name}`}
					</div>
				</div>
			</a>
		</div>
	);
};
