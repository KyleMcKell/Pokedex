import React from "react";
import "../styles/component_styles/SearchBar.css";

export const SearchBar = ({ searchOnChange }) => {
	return (
		<input
			type="text"
			name=""
			placeholder="Dex Number or Name"
			id=""
			onChange={(e) => searchOnChange(e.target.value)}
			className="search-bar"
		/>
	);
};
