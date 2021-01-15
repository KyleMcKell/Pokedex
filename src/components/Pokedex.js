import "../styles/component_styles/Pokedex.css";
import { Pokemon } from "./Pokemon";

// maps an array of pokemon
export const Pokedex = ({ pokedex }) => {
	return (
		<div className="pokedex">
			{pokedex.map((pokemon) => (
				<Pokemon
					id={pokemon.id} // pokemon's dex number
					key={pokemon.id} // key for React, each dex number is unique
					types={pokemon.types} // pokemon's types, an object
					name={pokemon.name} // name of the pokemon
					sprite={pokemon.sprites.front_default} // image of pokemon
				/>
			))}
		</div>
	);
};
