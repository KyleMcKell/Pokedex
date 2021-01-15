import { Pokedex } from "./components/Pokedex";
import "./styles/App.css";
import { useEffect, useState } from "react";
import { Loading } from "./components/Loading";

const App = () => {
	// holds pokemon data
	const [pokedex, setPokedex] = useState([]);
	// if true, instead of pokedex showing, shows a loading message
	const [isLoading, setIsLoading] = useState(false);

	// amount of pokemon that will be loaded in
	// total created pokemon is 898, 151 is the Kanto region, which is typically what I end up fetching
	const POKEMON_IN_DEX = 151;

	// fetches pokemon from api
	useEffect(() => {
		const fetchData = async () => {
			// sets the loading screen
			setIsLoading(true);
			// makes POKEMON_IN_DEX length array filled with urls that have each pokemon associated
			const pokeArr = new Array(POKEMON_IN_DEX).fill("").map((_, index) => {
				return `https://pokeapi.co/api/v2/pokemon/${index + 1}`;
			});
			try {
				// fetches a response for each pokemon url
				const response = await Promise.all(pokeArr.map((url) => fetch(url)));
				// changes all responses to json
				const data = await Promise.all(
					response.map((pokemonRes) => pokemonRes.json())
				);
				// sets the pokedex to the data
				setPokedex((pokedex) => pokedex.concat(data));
				// removes loading screen
				setIsLoading(false);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="container">
			<h1 className="title">Pokedex</h1>
			<Pokedex pokedex={pokedex} />
			<Loading isLoading={isLoading} />
		</div>
	);
};

export default App;
