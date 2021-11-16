import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogInfo from './HogInfo'

function App() {
	return (
		<div className="App">
			<Nav />
			<HogInfo hogs = {hogs}/>
		</div>
	);
}

export default App;
