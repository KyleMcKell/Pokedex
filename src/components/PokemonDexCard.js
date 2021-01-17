import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/component_styles/PokemonDexCard.css";

// returns a pokemon card with identifiers for each pokemon
export const PokemonDexCard = ({ name, types, dexNumber, sprite }) => {
	const [background, setBackground] = useState("");

	//sets the background to a gradient of the two types that the pokemon has
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
			{/* Routes to  */}
			<Link to={`/pokemon/${dexNumber}`} className="pokemon__link">
				<div
					className={`pokemon__card pokemon--${dexNumber}`}
					style={{ backgroundImage: background }}
				>
					<img src={sprite} className={`pokemon__sprite`} alt={name} />
					<div className="pokemon__data">
						<div className="pokemon__id">{`${dexNumber}`}</div>
						<hr className="pokemon__hr" />
						<div className="pokemon__name">{`${name.split("-")[0]}`}</div>
					</div>
				</div>
			</Link>
		</div>
	);
};
