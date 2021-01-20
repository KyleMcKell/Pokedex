import "../styles/component_styles/Pokedex.css";
import { PokemonDexCard } from "./PokemonDexCard";
import { Loading } from "./Loading";
import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";

// maps an array of pokemon
export const Pokedex = () => {
	// holds pokemon data
	const [pokedex, setPokedex] = useState([]);
	const [fulldex, setFulldex] = useState([]);
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
				setFulldex((fulldex) => fulldex.concat(data));
				// removes loading screen
				setIsLoading(false);
			} catch (err) {
				console.log(err);
				alert(
					`There was an error with the database, please try again later.
					\nYou may search a specific pokemon by adding /pokemon/# where # is their dex number to the url
					\nYou may also search by using their name in place of the dex number
					\ni.e. https://kylemckell.github.io/Pokedex/pokemon/1 or https://kylemckell.github.io/Pokedex/pokemon/bulbasaur to get bulbasaur`
				);
			}
		};
		if (pokedex.length < POKEMON_IN_DEX) {
			fetchData();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const searchOnChange = (searchTerm) => {
		const pokeArr = fulldex.filter((pokemon) => {
			if (searchTerm === "") {
				return pokemon;
			} else if (
				pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
			) {
				return pokemon;
			} else if (pokemon.id.toString().includes(searchTerm)) {
				return pokemon;
			} else {
				return null;
			}
		});
		setPokedex(pokeArr);
	};

	if (fulldex.length === 0) {
		return (
			<div className="container">
				<h1 className="title">Pokedex</h1>
				<Loading isLoading={isLoading} />
			</div>
		);
	} else {
		return (
			<div className="container">
				<h1 className="title">Pokedex</h1>
				<SearchBar searchOnChange={searchOnChange} />
				<div className="pokedex">
					{pokedex.map((pokemon) => (
						<PokemonDexCard
							dexNumber={pokemon.id} // pokemon's dex number
							key={pokemon.id} // key for React, each dex number is unique
							types={pokemon.types} // pokemon's types, an object
							name={pokemon.name} // name of the pokemon
							sprite={pokemon.sprites.front_default} // image of pokemon
						/>
					))}
				</div>
			</div>
		);
	}
};
