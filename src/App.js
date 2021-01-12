import { Pokedex } from "./components/Pokedex";
import "./styles/App.css";
import { useEffect, useState } from "react";

const App = () => {
	return (
		<div className="container">
			<h1 className="title">Pokedex</h1>
			<Pokedex />
		</div>
	);
};

export default App;
