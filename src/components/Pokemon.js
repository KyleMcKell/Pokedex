import React, { useEffect } from "react";
import "../styles/component_styles/Pokemon.css";

export const Pokemon = ({ name, types, id, sprite }) => {
	useEffect(() => {
		const typeArr = [];
		for (const type of types) {
			if (type.type.name != null) {
				typeArr.push(type.type.name);
			}
		}
		const pokemon = document.querySelector(`.pokemon--${id}`);
		pokemon.style.backgroundImage =
			typeArr.length > 1
				? `linear-gradient(to right, var(--${typeArr[0]}1), var(--${typeArr[1]}1)`
				: `linear-gradient(var(--${typeArr[0]}1), var(--${typeArr[0]}1)`;
	});

	return (
		<div className={`pokemon`}>
			<a
				href={`https://bulbapedia.bulbagarden.net/wiki/${name}_(Pok%C3%A9mon)`}
				className="pokemon__link"
				target="_blank"
				rel="noreferrer"
			>
				<div
					className={`pokemon__card pokemon--${types["0"].type.name} pokemon--${id}`}
				>
					<img src={sprite} className={`pokemon__sprite`} alt={name} />
					<div className="pokemon__data">
						<div className="pokemon__id">{`${id}`}</div>
						<hr class="pokemon__hr" />
						<div className="pokemon__name">{`${name}`}</div>
					</div>
				</div>
			</a>
		</div>
	);
};
