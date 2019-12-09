import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';

const App = () => {
	const [ savedList, setSavedList ] = useState([]);

	const addToSavedList = (movie) => {
		setSavedList([ ...savedList, movie ]);
	};

	return (
		<div>
			<SavedList list={savedList} />
			<Switch>
				<Route path='/' component={MovieList} />
				<Route path='/movies/:id' component={Movie} />
			</Switch>
		</div>
	);
};

export default App;
