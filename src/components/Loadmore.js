import React from "react";

export const Loadmore = ({ loadMoreOnClick }) => {
	return <button onClick={() => loadMoreOnClick()}>Load More</button>;
};
