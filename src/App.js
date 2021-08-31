import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";

import "./assets/scss/style.scss";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/properties/:id" component={DetailsPage} />
					<Route exact path="/checkout" component={Checkout} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
