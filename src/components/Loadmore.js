import React from "react";
import "../styles/component_styles/LoadMore.css";

export const LoadMore = ({ loadMoreOnClick }) => {
	return (
		<div className="loadmore">
			<button className="loadmore__btn" onClick={() => loadMoreOnClick()}>
				Load More
			</button>
		</div>
	);
};
