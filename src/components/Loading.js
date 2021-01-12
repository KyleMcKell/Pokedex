import React from "react";
import "../styles/component_styles/Loading.css";

export const Loading = () => {
	return (
		<div className="loading">
			<h2 className="loading__loadingText">Fetching Pokemon Data</h2>
		</div>
	);
};
