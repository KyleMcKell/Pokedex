import { Pokedex } from "./components/Pokedex";
import { PokemonInfo } from "./components/PokemonInfo";
import "./styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter basename="/Pokedex">
			<Switch>
				<Route path="/" exact component={Pokedex} />
				<Route path="/pokemon/:dexNumber" exact component={PokemonInfo} />
				<Route path="/pokemon/:name" exact component={PokemonInfo} />
				<Route
					path="/"
					render={() => (
						<div style={{ color: "var(--nord6)" }}>404 Page Not Found</div>
					)}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
