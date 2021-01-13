import { Pokedex } from "./components/Pokedex";
import "./styles/App.css";
import { useEffect, useState } from "react";
// import { Pagination } from "./components/Pagination";
import { LoadMore } from "./components/LoadMore";
import { Loading } from "./components/Loading";

const App = () => {
	const [pokedex, setPokedex] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonPerPage] = useState(25);
	const [loading, setLoading] = useState(false);
	const [loadedPokemon, setLoadedPokemon] = useState(pokemonPerPage);
	// const [maxPokemon] = useState(898);
	const [loadedPokemonIDs, setLoadedPokemonIDs] = useState([]);

	const fetchData = async (firstPokemonOnPage, amountOfPokemonOnPage) => {
		for (let i = firstPokemonOnPage; i <= amountOfPokemonOnPage; i++) {
			const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
			const response = await fetch(url);
			const pokemon = await response.json();
			if (loadedPokemonIDs.indexOf(pokemon.id) === -1) {
				setLoadedPokemonIDs((ids) => ids.concat(pokemon.id));
				setPokedex((pokedex) => pokedex.concat(pokemon));
			}
		}
	};

	useEffect(() => {
		fetchData(1, pokemonPerPage);
	}, [pokemonPerPage]);

	const loadMoreOnClick = () => {
		setLoadedPokemon(loadedPokemon + pokemonPerPage);
		fetchData(
			currentPage * pokemonPerPage - pokemonPerPage + 1 + loadedPokemon,
			loadedPokemon + pokemonPerPage
		);
	};

	// // Change page
	// const paginate = (pageNumber) => {
	// 	setLoadedPokemon(pokemonPerPage);
	// 	setCurrentPage(pageNumber);
	// 	fetchData(
	// 		currentPage * pokemonPerPage - pokemonPerPage + 1,
	// 		currentPage * pokemonPerPage
	// 	);
	// };

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
				<h2 className="title">{`Page ${currentPage}`}</h2>
				<Pokedex
					pokedex={pokedex.slice(
						currentPage * pokemonPerPage - pokemonPerPage,
						currentPage * pokemonPerPage - pokemonPerPage + loadedPokemon
					)}
				/>
				<LoadMore
					indexOfLastPokemon={loadedPokemon}
					loadMoreOnClick={loadMoreOnClick}
					pokemonToLoad={pokemonPerPage}
				/>
				{/* <Pagination
					pokemonPerPage={pokemonPerPage}
					totalPokemon={maxPokemon}
					paginate={paginate}
					currentPage={currentPage}
				/> */}
			</div>
		);
	}
};

export default App;
