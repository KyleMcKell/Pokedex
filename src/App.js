import { Pokedex } from "./components/Pokedex";
import "./styles/App.css";
import { useEffect, useState } from "react";
import { Loading } from "./components/Loading";

const App = () => {
	const [pokedex, setPokedex] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const POKEMON_IN_DEX = 151;

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const pokeArr = new Array(POKEMON_IN_DEX)
				.fill("")
				.map((pokemon, index) => {
					return `https://pokeapi.co/api/v2/pokemon/${index + 1}`;
				});
			try {
				const resolvedFetch = await Promise.all(
					pokeArr.map((url) => fetch(url))
				);
				const response = await Promise.all(
					resolvedFetch.map((pokemonRes) => pokemonRes.json())
				);
				setPokedex((pokedex) => pokedex.concat(response));
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
