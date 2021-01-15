import React, { useEffect, useState } from "react";
import "../styles/component_styles/Pokemon.css";
import "../styles/component_styles/PokemonTypeColors.css";

// returns a pokemon card with identifiers for each pokemon
export const Pokemon = ({ name, types, id, sprite }) => {
	const [background, setBackground] = useState("");

	useEffect(() => {
		const typeArr = [];

		for (const type of types) {
			if (type.type.name != null) {
				typeArr.push(type.type.name);
			}
		}

		setBackground(
			typeArr.length > 1
				? `linear-gradient(to right, var(--${typeArr[0]}1), var(--${typeArr[1]}1)`
				: `linear-gradient(var(--${typeArr[0]}1), var(--${typeArr[0]}1)`
		);
	}, [types]);

	return (
		<div className={`pokemon`}>
			{/* provide a link to bulbapedia, a pokemon wiki, to be replaced with my own pages */}
			<a
				href={`https://bulbapedia.bulbagarden.net/wiki/${name}_(Pok%C3%A9mon)`}
				className="pokemon__link"
				target="_blank"
				rel="noreferrer"
			>
				{/* displays the pokemon card */}
				<div
					className={`pokemon__card pokemon--${id}`}
					style={{ backgroundImage: background }}
				>
					<img src={sprite} className={`pokemon__sprite`} alt={name} />
					<div className="pokemon__data">
						<div className="pokemon__id">{`${id}`}</div>
						<hr className="pokemon__hr" />
						<div className="pokemon__name">{`${name.split("-")[0]}`}</div>
					</div>
				</div>
			</a>
		</div>
	);
};
