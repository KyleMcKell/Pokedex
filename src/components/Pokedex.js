import "../styles/component_styles/Pokedex.css";
import { Pokemon } from "./Pokemon";

export const Pokedex = ({ pokedex, loading }) => {
	if (loading) {
		return <h2 className="pokedex__loadingText">Fetching Pokemon Data</h2>;
	}

	return (
		<div className="pokedex">
			{pokedex.map((pokemon) => (
				<Pokemon pokemon={pokemon} id={pokemon.id} />
			))}
		</div>
	);
};
