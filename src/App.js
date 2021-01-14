import { Pokedex } from "./components/Pokedex";
import "./styles/App.css";
import { useEffect, useState } from "react";
import { LoadMore } from "./components/LoadMore";

const App = () => {
	const [pokedex, setPokedex] = useState([]);
	const [maxPokemon] = useState(25);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			for (let i = 1; i <= maxPokemon; i++) {
				const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
				const response = await fetch(url);
				const pokemon = await response.json();
				if (pokedex.indexOf(pokemon) === -1) {
					setPokedex((pokemons) => pokemons.concat(pokemon));
				}
			}
			setIsLoading(false);
		};
		fetchData();
	}, [maxPokemon]);

	// const loadMorePokemon = () => {
	// 	fetchData();
	// };

	return (
		<div className="container">
			<h1 className="title">Pokedex</h1>
			<Pokedex pokedex={pokedex} />
			<LoadMore
				// loadMoreOnClick={loadMorePokemon}
				pokemonToLoad={maxPokemon}
				isLoading={isLoading}
			/>
		</div>
	);
};

export default App;
