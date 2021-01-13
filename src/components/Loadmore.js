import React from "react";
import "../styles/component_styles/LoadMore.css";
import { Loading } from "./Loading";

export const LoadMore = ({ loadMoreOnClick, pokemonToLoad, isLoading }) => {
	const clickHandler = () => {
		loadMoreOnClick();
	};

	const displayLoadMore = () => {
		if (isLoading) {
			return <Loading />;
		} else {
			return (
				<button className="loadmore__btn" onClick={() => clickHandler()}>
					{`Show ${pokemonToLoad} More`}
				</button>
			);
		}
	};

	return <div className="loadmore">{displayLoadMore()}</div>;
};
