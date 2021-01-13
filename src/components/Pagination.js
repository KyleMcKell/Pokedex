// Removed from project, added code originally from App.js to bottom of page

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

// import { Pagination } from "./components/Pagination";
// Removed Pagination from project
// // Change page
// const paginate = (pageNumber) => {
// 	setLoadedPokemon(pokemonPerPage);
// 	setCurrentPage(pageNumber);
// 	fetchData(
// 		currentPage * pokemonPerPage - pokemonPerPage + 1,
// 		currentPage * pokemonPerPage
// 	);
// };
/* 
Removed Pagination from project, keeping here in case if want to reimplement later */
/* 
<Pagination
	pokemonPerPage={pokemonPerPage}
	totalPokemon={maxPokemon}
	paginate={paginate}
	currentPage={currentPage}
/> 
*/

/* Removed Pagination from project
const [maxPokemon] = useState(898);
const [currentPage, setCurrentPage] = useState(1);*/

/* <h2 className="title">{`Page ${currentPage}`}</h2> 
				Removed Pagination
				*/
