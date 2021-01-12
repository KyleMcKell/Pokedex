import { Pokedex } from "./components/Pokedex";
import "./styles/App.css";
import { useEffect, useState } from "react";
import { Pagination } from "./components/Pagination";
import { LoadMore } from "./components/LoadMore";
import { Loading } from "./components/Loading";

const App = () => {
	const [pokedex, setPokedex] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonPerPage] = useState(25);
	const [loading, setLoading] = useState(false);
	const [loadedPokemon, setLoadedPokemon] = useState(pokemonPerPage);

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
	}, [pokemonPerPage]);

	const loadMoreOnClick = () => {
		setLoadedPokemon(loadedPokemon + pokemonPerPage);
	};

	// Get current pokemon

	// Change page
	const paginate = (pageNumber) => {
		setLoadedPokemon(pokemonPerPage);
		setCurrentPage(pageNumber);
	};

	if (loading) {
		return (
			<div className="container">
				<h1 className="title">Pokedex</h1>
				<Loading />
			</div>
		);
	} else {
		return (
			<div className="container">
				<h1 className="title">Pokedex</h1>
				<Pokedex
					pokedex={pokedex.slice(
						currentPage * pokemonPerPage - pokemonPerPage,
						currentPage * pokemonPerPage - pokemonPerPage + loadedPokemon
					)}
				/>
				<LoadMore
					indexOfLastPokemon={loadedPokemon}
					loadMoreOnClick={loadMoreOnClick}
				/>
				<Pagination
					pokemonPerPage={pokemonPerPage}
					totalPokemon={pokedex.length}
					paginate={paginate}
					currentPage={currentPage}
				/>
			</div>
		);
	}
};

export default App;
