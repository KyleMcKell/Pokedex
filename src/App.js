import { Pokedex } from "./components/Pokedex";
import "./styles/App.css";
import { useEffect, useState } from "react";
import { LoadMore } from "./components/LoadMore";

const App = () => {
	const [pokedex, setPokedex] = useState([]);
	const [pokemonPerPage] = useState(25);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		fetchData(1, pokemonPerPage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const fetchData = async (firstPokemonToLoad, amountOfPokemonOnPage) => {
		setIsLoading(true);
		for (let i = firstPokemonToLoad; i <= amountOfPokemonOnPage; i++) {
			const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
			const response = await fetch(url);
			const pokemon = await response.json();
			if (pokedex.indexOf(pokemon) === -1) {
				setPokedex((pokemons) => pokemons.concat(pokemon));
			}
		}
		setIsLoading(false);
	};

	const loadMorePokemon = () => {
		fetchData(
			pokemonPerPage - pokemonPerPage + 1 + pokedex.length,
			pokedex.length + pokemonPerPage
		);
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
