import { Pokedex } from "./components/Pokedex";
import "./styles/App.css";
import { useEffect, useState } from "react";
import { LoadMore } from "./components/LoadMore";
import { Loading } from "./components/Loading";

const App = () => {
	const [pokedex, setPokedex] = useState([]);
	const [pokemonPerPage] = useState(25);
	const [loading, setLoading] = useState(false);
	const [numLoadedPokemon, setNumLoadedPokemon] = useState(pokemonPerPage);
	const [loadedPokemon, setLoadedPokemon] = useState([]);

	useEffect(() => {
		fetchData(1, pokemonPerPage);
	}, []);

	const fetchData = async (firstPokemonToLoad, amountOfPokemonOnPage) => {
		for (let i = firstPokemonToLoad; i <= amountOfPokemonOnPage; i++) {
			const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
			const response = await fetch(url);
			const pokemon = await response.json();
			setLoading(true);
			if (loadedPokemon.indexOf(pokemon) === -1) {
				setLoadedPokemon((pokemons) => pokemons.concat(pokemon));
			}
			setLoading(false);
		}
	};

	const loadMorePokemon = () => {
		setNumLoadedPokemon(numLoadedPokemon + pokemonPerPage * 2);
		fetchData(
			pokemonPerPage - pokemonPerPage + 1 + numLoadedPokemon,
			numLoadedPokemon + pokemonPerPage * 2
		);
	};

	const showMorePokemon = () => {
		const pokedexFragment = loadedPokemon.slice(
			pokedex.length,
			pokedex.length + pokemonPerPage
		);
		pokedexFragment.forEach((pokemon) =>
			setPokedex((pokedex) => pokedex.concat(pokemon))
		);
	};

	if (loading) {
		return (
			<div className="container">
				<h1 className="title">Pokedex</h1>;
				<Loading />
			</div>
		);
	} else {
		return (
			<div className="container">
				<h1 className="title">Pokedex</h1>
				<Pokedex pokedex={pokedex} />
				<LoadMore
					loadMoreOnClick={loadMorePokemon}
					showMorePokemon={showMorePokemon}
					pokemonToLoad={pokemonPerPage}
				/>
			</div>
		);
	}
};

export default App;
