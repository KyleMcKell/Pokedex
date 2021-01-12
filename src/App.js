import { Pokedex } from "./components/Pokedex";
import "./styles/App.css";
import { useEffect, useState } from "react";

const App = () => {
	const [pokedex, setPokedex] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(10);
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

	return (
		<div className="container">
			<h1 className="title">Pokedex</h1>
			<Pokedex pokedex={pokedex} loading={loading} />
		</div>
	);
};

export default App;
