import React from "react";

export const LoadMore = ({ loadMoreOnClick }) => {
	return <button onClick={() => loadMoreOnClick()}>Load More</button>;
};
