import { Pokedex } from "./components/Pokedex";
import "./styles/App.css";
import { useEffect, useState } from "react";
import { Pagination } from "./components/Pagination";

const App = () => {
	const [pokedex, setPokedex] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonPerPage] = useState(9);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			for (let i = 1; i <= 151; i++) {
				const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
				const response = await fetch(url);
				const pokemon = await response.json();
				setPokedex((pokedex) => pokedex.concat(pokemon));
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	// Get current pokemon
	const indexOfLastPokemon = currentPage * pokemonPerPage;
	const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
	const currentPokemons = pokedex.slice(
		indexOfFirstPokemon,
		indexOfLastPokemon
	);

	// Change page
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<div className="container">
			<h1 className="title">Pokedex</h1>
			<Pokedex pokedex={currentPokemons} loading={loading} />
			<Pagination
				pokemonPerPage={pokemonPerPage}
				totalPokemon={pokedex.length}
				paginate={paginate}
			/>
		</div>
	);
};

export default App;
