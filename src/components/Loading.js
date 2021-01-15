import React from "react";
import "../styles/component_styles/Loading.css";

// returns loading text when setLoading is true on App
export const Loading = ({ isLoading }) => {
	if (isLoading) {
		return (
			<div className="loading">
				<h2 className="loading__loadingText">Fetching Pokemon Data</h2>
			</div>
		);
	} else {
		return <></>;
	}
};
