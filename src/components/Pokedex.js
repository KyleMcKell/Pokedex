import React, { useEffect, useState } from "react";
import "../styles/component_styles/Pokedex.css";
import { Pokemon } from "./Pokemon";

export const Pokedex = ({ pokedex }) => {
	return pokedex.map((pokemon) => (
		<Pokemon pokemon={pokemon} id={pokemon.id} />
	));
};
