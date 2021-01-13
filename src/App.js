import { Pokedex } from "./components/Pokedex";
import "./styles/App.css";
import { useEffect, useState } from "react";
import { LoadMore } from "./components/LoadMore";

const App = () => {
	const [pokedex, setPokedex] = useState([]);
	const [pokemonPerPage] = useState(25);
	const [isLoading, setIsLoading] = useState(false);
	const [numLoadedPokemon, setNumLoadedPokemon] = useState(pokemonPerPage);
	const [loadedPokemon, setLoadedPokemon] = useState([]);

	useEffect(() => {
		fetchData(1, pokemonPerPage);
	}, []);

	const fetchData = async (firstPokemonToLoad, amountOfPokemonOnPage) => {
		setIsLoading(true);
		for (let i = firstPokemonToLoad; i <= amountOfPokemonOnPage; i++) {
			const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
			const response = await fetch(url);
			const pokemon = await response.json();
			if (loadedPokemon.indexOf(pokemon) === -1) {
				setLoadedPokemon((pokemons) => pokemons.concat(pokemon));
			}
		}
		setIsLoading(false);
		addToPokedex();
	};

	const loadMorePokemon = () => {
		setNumLoadedPokemon(numLoadedPokemon + pokemonPerPage);
		fetchData(
			pokemonPerPage - pokemonPerPage + 1 + numLoadedPokemon,
			numLoadedPokemon + pokemonPerPage
		);
	};

	const addToPokedex = () => {
		const pokedexFragment = loadedPokemon.slice(
			pokedex.length,
			pokedex.length + pokemonPerPage
		);
		pokedexFragment.forEach((pokemon) => {
			if (pokedex.indexOf(pokemon) === -1) {
				setPokedex((pokedex) => pokedex.concat(pokemon));
			}
		});
	};

	return (
		<div className="container">
			<h1 className="title">Pokedex</h1>
			<Pokedex pokedex={pokedex} />
			<LoadMore
				loadMoreOnClick={loadMorePokemon}
				pokemonToLoad={pokemonPerPage}
				isLoading={isLoading}
			/>
		</div>
	);
};

export default App;
