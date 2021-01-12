import React from "react";
import "../styles/component_styles/Pokemon.css";

export const Pokemon = ({ pokemon }) => {
	return <div className="pokemon">{pokemon.name}</div>;
};
