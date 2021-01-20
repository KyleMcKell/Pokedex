import React, { useState, useEffect } from "react";
import { PokemonInfoCard } from "./PokemonInfoCard";
import { Link } from "react-router-dom";
import "../styles/component_styles/PokemonInfo.css";

export const PokemonInfo = ({ match }) => {
	const [pokemon, setPokemon] = useState();

	// fetch the specific pokemon
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				match.params.dexNumber
					? `https://pokeapi.co/api/v2/pokemon/${match.params.dexNumber}`
					: `https://pokeapi.co/api/v2/pokemon/${match.params.name}`
			);
			const json = await response.json();
			setPokemon(json);
		};
		fetchData();
	}, [match.params.dexNumber, match.params.name]);

	if (pokemon) {
		return (
			<div className="pokemon-info">
				<div className="pokemon-info__container">
					<PokemonInfoCard
						dexNumber={pokemon.id} // pokemon's dex number
						pokemon={pokemon} // pokemon's types, an object
						name={pokemon.name} // name of the pokemon
						sprite={pokemon.sprites.other["official-artwork"].front_default} // image of pokemon
						stats={pokemon.stats} // pokemon stats
					/>
				</div>
				<Link to={`/`} className="pokemon-info__go-home">
					Go home
				</Link>
			</div>
		);
	} else {
		return "";
	}
};
