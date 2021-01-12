import React, { useEffect, useState } from "react";
import "../styles/component_styles/Pokedex.css";
import { Pokemon } from "./Pokemon";

export const Pokedex = () => {
	const [pokedex, setPokedex] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			for (let i = 1; i <= 151; i++) {
				const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
				const response = await fetch(url);
				const pokemon = await response.json();
				setPokedex((pokedex) => pokedex.concat(pokemon));
			}
		};
		fetchData();
	}, []);

	return (
		<div className="pokedex">
			{pokedex.map((pokemon) => (
				<Pokemon pokemon={pokemon} id={pokemon.id} />
			))}
		</div>
	);
};
