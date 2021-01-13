import React from "react";
import "../styles/component_styles/LoadMore.css";

export const LoadMore = ({ loadMoreOnClick, pokemonToLoad }) => {
	return (
		<div className="loadmore">
			<button className="loadmore__btn" onClick={() => loadMoreOnClick()}>
				Load {pokemonToLoad} More
			</button>
		</div>
	);
};
