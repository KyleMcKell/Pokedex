import React from "react";

export const Loadmore = ({ indexOfLastPokemon, loadMore }) => {
	return <button onClick={() => loadMore()}>Load More</button>;
};
