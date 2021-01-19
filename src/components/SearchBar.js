import React from "react";

export const SearchBar = ({ searchOnChange }) => {
	return (
		<input
			type="text"
			name=""
			placeholder="Search..."
			id=""
			onChange={(e) => searchOnChange(e.target.value)}
		/>
	);
};
