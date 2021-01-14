import "../styles/component_styles/Pokedex.css";
import { Pokemon } from "./Pokemon";

export const Pokedex = ({ pokedex }) => {
	return (
		<div className="pokedex">
			{pokedex.map((pokemon) => (
				<Pokemon
					id={pokemon.id}
					key={pokemon.id}
					types={pokemon.types}
					name={pokemon.name}
					sprite={pokemon.sprites.front_default}
				/>
			))}
		</div>
	);
};
