import React, { useEffect } from "react";
import "../styles/component_styles/Pokemon.css";

export const Pokemon = ({ name, types, id, sprite }) => {
	// get the pokemon from the document

	useEffect(() => {
		// make an array of the types passed from props
		const typeArr = [];
		for (const type of types) {
			if (type.type.name != null) {
				typeArr.push(type.type.name);
			}
		}
		const pokemon = document.querySelector(`.pokemon--${id}`);
		// set a gradient background for the types of the pokemon
		pokemon.style.backgroundImage =
			typeArr.length > 1
				? `linear-gradient(to right, var(--${typeArr[0]}1), var(--${typeArr[1]}1)`
				: `linear-gradient(var(--${typeArr[0]}1), var(--${typeArr[0]}1)`;

		pokemon.addEventListener("mouseover", () => {
			pokemon.classList.add("pokemon__card--active");
		});
		pokemon.addEventListener("mouseout", () => {
			pokemon.classList.remove("pokemon__card--active");
		});
	}, [id, types]);

	return (
		<div className={`pokemon`}>
			<a
				href={`https://bulbapedia.bulbagarden.net/wiki/${name}_(Pok%C3%A9mon)`}
				className="pokemon__link"
				target="_blank"
				rel="noreferrer"
			>
				<div className={`pokemon__card pokemon--${id}`}>
					<img src={sprite} className={`pokemon__sprite`} alt={name} />
					<div className="pokemon__data">
						<div className="pokemon__id">{`${id}`}</div>
						<hr class="pokemon__hr" />
						<div className="pokemon__name">{`${name.split("-")[0]}`}</div>
					</div>
				</div>
			</a>
		</div>
	);
};
