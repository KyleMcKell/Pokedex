import { Pokedex } from "./components/Pokedex";
import "./styles/App.css";
import { useEffect, useState } from "react";
// import { Pagination } from "./components/Pagination";
import { LoadMore } from "./components/LoadMore";
import { Loading } from "./components/Loading";

const App = () => {
	const [pokedex, setPokedex] = useState([]);
	const [pokemonPerPage] = useState(25);
	const [loading, setLoading] = useState(false);
	const [numLoadedPokemon, setNumLoadedPokemon] = useState(pokemonPerPage);
	const [loadedPokemon, setLoadedPokemon] = useState([]);
	/* Removed Pagination from project
	const [maxPokemon] = useState(898);
	const [currentPage, setCurrentPage] = useState(1);*/

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

	useEffect(() => {
		fetchData(1, pokemonPerPage);
	}, [pokemonPerPage]);

	const loadMorePokemon = () => {
		setNumLoadedPokemon(numLoadedPokemon + pokemonPerPage * 2);
		fetchData(
			pokemonPerPage - pokemonPerPage + 1 + numLoadedPokemon,
			numLoadedPokemon + pokemonPerPage * 2
		);
	};

	const addToPokedex = (pokedexFragment) => {
		pokedexFragment.forEach((pokemon) =>
			setPokedex((pokedex) => pokedex.concat(pokemon))
		);
	};

	const showMorePokemon = () => {
		addToPokedex(
			loadedPokemon.slice(
				pokedex.length - 1,
				pokedex.length - 1 + pokemonPerPage
			)
		);
	};

	useEffect(() => {
		showMorePokemon();
	}, [pokedex]);

	// Removed Pagination from project
	// // Change page
	// const paginate = (pageNumber) => {
	// 	setLoadedPokemon(pokemonPerPage);
	// 	setCurrentPage(pageNumber);
	// 	fetchData(
	// 		currentPage * pokemonPerPage - pokemonPerPage + 1,
	// 		currentPage * pokemonPerPage
	// 	);
	// };
	return (
		<div className="container">
			<h1 className="title">Pokedex</h1>
			{/* <h2 className="title">{`Page ${currentPage}`}</h2> 
				Removed Pagination
				*/}
			<Pokedex pokedex={pokedex} />
			<LoadMore
				loadMoreOnClick={loadMorePokemon}
				showMorePokemon={showMorePokemon}
				pokemonToLoad={pokemonPerPage}
			/>
			{/* Removed Pagination from project, keeping here in case if want to reimplement later */}
			{/* <Pagination
					pokemonPerPage={pokemonPerPage}
					totalPokemon={maxPokemon}
					paginate={paginate}
					currentPage={currentPage}
				/> */}
		</div>
	);
};

export default App;
