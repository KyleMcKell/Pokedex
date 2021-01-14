import "../styles/component_styles/Pokedex.css";
import { Pokemon } from "./Pokemon";

export const Pokedex = ({ pokedex }) => {
	return (
		<div className="pokedex">
			{pokedex.map((pokemon) => (
				<Pokemon pokemon={pokemon} id={pokemon.id} key={pokemon.id} />
			))}
		</div>
	);
};
