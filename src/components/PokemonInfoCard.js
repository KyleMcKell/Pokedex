import React, { useState, useEffect } from "react";
import "../styles/component_styles/PokemonInfoCard.css";
import { StatChart } from "./StatChart";

export const PokemonInfoCard = ({
	pokemon,
	dexNumber,
	name,
	sprite,
	stats,
}) => {
	const [background, setBackground] = useState("");
	const [types, setTypes] = useState([]);
	const [baseStats, setBaseStats] = useState([]);

	//sets types to have the pokemon's types
	useEffect(() => {
		for (const typeNum of pokemon.types) {
			if (
				typeNum.type.name != null &&
				types.indexOf(typeNum.type.name) === -1
			) {
				setTypes((types) => types.concat(typeNum.type.name));
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// sets baseStats to hold pokemon's base stats
	useEffect(() => {
		const statObj = ["HP", "Attack", "Defense", "SpAtk", "SpDef", "Speed"];
		for (let i = 0; i < statObj.length; i++) {
			setBaseStats((baseStats) =>
				baseStats.concat({
					baseStatName: statObj[i],
					value: stats[i].base_stat,
				})
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// sets the background
	useEffect(() => {
		setBackground(
			types.length > 1
				? `linear-gradient(to right, var(--${types[0]}1), var(--${types[1]}1)`
				: `linear-gradient(var(--${types[0]}1), var(--${types[0]}1)`
		);
	}, [types]);

	return (
		<div className={`pokemon-info-card`}>
			{/* Background of card, contains whole card */}
			<div
				className={`pokemon-info-card__card`}
				style={{ backgroundImage: background }}
			>
				{/* sprite of pokemon */}
				<div className="pokemon-info-card__sprite-container">
					<img
						src={sprite}
						className={`pokemon-info-card__sprite`}
						alt={name}
					/>
				</div>

				{/* all info of pokemon aside from sprite */}
				<div className="pokemon-info-card__info">
					{/* dex number and name */}
					<div className="pokemon-info-card__id">{`${dexNumber}: ${name}`}</div>
					{/* pokemon's types */}
					<div className="pokemon-info-card__types">
						{types.map((type) => (
							<div
								key={type}
								className="pokemon-info-card__type-card"
								style={{
									backgroundImage: `linear-gradient(var(--${type}1), var(--${type}2))`,
									border: `2px solid var(--${type}3)`,
								}}
								// `linear-gradient(to right, var(--${types[0]}1), var(--${types[1]}1)`
							>
								{type}
							</div>
						))}
					</div>
					{/* pokemon's base stats */}
					<StatChart baseStats={baseStats} types={types} />
				</div>
			</div>
		</div>
	);
};
