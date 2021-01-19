import React from "react";
import "../styles/component_styles/SearchBar.css";

export const SearchBar = ({ searchOnChange }) => {
	return (
		<input
			type="text"
			name=""
			placeholder="Search..."
			id=""
			onChange={(e) => searchOnChange(e.target.value)}
			className="search-bar"
		/>
	);
};
