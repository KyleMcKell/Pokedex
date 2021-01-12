import { Pokedex } from "./components/Pokedex";
import "./styles/App.css";
import { useEffect, useState } from "react";

const App = () => {
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
		<div className="container">
			<h1 className="title">Pokedex</h1>
			<Pokedex pokedex={pokedex} />
		</div>
	);
};

export default App;
