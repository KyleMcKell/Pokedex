import { Pokedex } from "./components/Pokedex";
import "./styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Pokedex} />
				<Route path="/" render={() => <div>404 Page Not Found</div>} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
