import React, { useState, useEffect } from "react";
import { PokemonDexCard } from "./PokemonDexCard";
import { Link } from "react-router-dom";
import "../styles/component_styles/PokemonInfo.css";

export const PokemonInfo = ({ match }) => {
	const [pokemon, setPokemon] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${match.params.dexNumber}`
			);
			const json = await response.json();
			setPokemon(json);
		};
		fetchData();
	}, [match.params.dexNumber]);

	if (pokemon) {
		return (
			<div class="">
				<PokemonDexCard
					dexNumber={pokemon.id} // pokemon's dex number
					types={pokemon.types} // pokemon's types, an object
					name={pokemon.name} // name of the pokemon
					sprite={pokemon.sprites.front_default} // image of pokemon
				/>
				<Link to={`/`} className="pokemon-info--link">
					Go home
				</Link>
			</div>
		);
	} else {
		return "";
	}
};
