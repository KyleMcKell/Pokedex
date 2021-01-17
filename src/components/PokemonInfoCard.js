import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/component_styles/PokemonTypeColors.css";
import "../styles/component_styles/PokemonInfoCard.css";

export const PokemonInfoCard = ({
	pokemon,
	dexNumber,
	name,
	sprite,
	stats,
}) => {
	const [background, setBackground] = useState("");
	const [types, setTypes] = useState([]);

	//sets the background to a gradient of the two types that the pokemon has
	useEffect(() => {
		for (const typeNum of pokemon.types) {
			if (typeNum.type.name != null && types.length < 2) {
				setTypes((types) => types.concat(typeNum.type.name));
			}
		}
		setBackground(
			types.length > 1
				? `linear-gradient(to right, var(--${types[0]}1), var(--${types[1]}1)`
				: `linear-gradient(var(--${types[0]}1), var(--${types[0]}1)`
		);
	}, [types, pokemon.types]);

	if (types.length > 0) {
		return (
			<div className={`pokemon-info-card__container`}>
				{/* Routes to  */}
				<div
					className={`pokemon-info-card__card`}
					style={{ backgroundImage: background }}
				>
					<img
						src={sprite}
						className={`pokemon-info-card__sprite`}
						alt={name}
					/>
					<div className="pokemon-info-card__info">
						<div className="pokemon-info-card__id">
							<h1 className="pokemon-info-card__name">{name}</h1>
							<h2>{dexNumber}</h2>
						</div>
						<div className="pokemon-info-card__types">
							{types.map((type) => (
								<div key={type} className="pokemon-info-card__type-card">
									{type}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<Link to={`/pokemon/${dexNumber}`} className="pokemon-info-card__link" />
		);
	}
};
