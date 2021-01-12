import React from "react";
import "../styles/component_styles/Pagination.css";

export const Pagination = ({ pokemonPerPage, totalPokemon, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
		pageNumbers.push(i);
	}

	const handleClick = (num) => {
		paginate(num);
	};

	return (
		<nav className="pagination">
			<ul className="pagination__list">
				{pageNumbers.map((num) => {
					return (
						<li key={num} className="pagination__item">
							<a
								onClick={() => handleClick(num)}
								href="!#"
								className="pagination__link"
							>
								{num}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
