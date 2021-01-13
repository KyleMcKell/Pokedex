import React from "react";
import "../styles/component_styles/LoadMore.css";

export const LoadMore = ({
	loadMoreOnClick,
	pokemonToLoad,
	showMorePokemon,
}) => {
	const clickHandler = () => {
		loadMoreOnClick();
		showMorePokemon();
	};

	return (
		<div className="loadmore">
			<button className="loadmore__btn" onClick={() => clickHandler()}>
				Show {pokemonToLoad} More
			</button>
		</div>
	);
};
