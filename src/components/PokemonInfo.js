import React from "react";

export const PokemonInfo = ({ match }) => {
	return <div>post {match.params.dexNumber}</div>;
};
