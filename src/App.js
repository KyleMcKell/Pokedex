import { Pokedex } from "./components/Pokedex";
import "./styles/App.css";
import { useEffect, useState, useCallback } from "react";
import { Pagination } from "./components/Pagination";
import { Loadmore } from "./components/Loadmore";

const App = () => {
	const [pokedex, setPokedex] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonPerPage] = useState(5);
	const [loading, setLoading] = useState(false);
	const [loadedPokemon, setLoadedPokemon] = useState(
		pokedex.slice(0, pokemonPerPage + 1)
	);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			for (let i = 1; i <= 151; i++) {
				const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
				const response = await fetch(url);
				const pokemon = await response.json();
				setPokedex((pokedex) => pokedex.concat(pokemon));
				if (i === pokemonPerPage) {
					setLoading(false);
				}
			}
		};
		fetchData();
	}, [pokemonPerPage]);

	const loadMore = useCallback(() => {
		const indexOfFirstPokemon = currentPage * pokemonPerPage;
		const indexOfLastPokemon = loadedPokemon.length * pokemonPerPage;
		const currentPokemons = pokedex.slice(
			indexOfFirstPokemon - 1,
			indexOfLastPokemon
		);
		setLoadedPokemon(currentPokemons);
	}, [loadedPokemon.length, pokedex, pokemonPerPage, currentPage]);

	useEffect(() => {
		loadMore();
	}, [loadMore]);

	// Get current pokemon

	// Change page
	// const paginate = (pageNumber) => {
	// 	setCurrentPage(pageNumber);
	// };

	return (
		<div className="container">
			<h1 className="title">Pokedex</h1>
			<Pokedex pokedex={loadedPokemon} loading={loading} />
			<Loadmore indexOfLastPokemon={loadedPokemon} loadMore={loadMore} />
			{/* <Pagination
				pokemonPerPage={pokemonPerPage}
				totalPokemon={pokedex.length}
				paginate={paginate}
				currentPage={currentPage}
			/> */}
		</div>
	);
};

export default App;
