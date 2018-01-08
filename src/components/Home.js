import React from 'react';
// import { Card } from 'semantic-ui-react';
import SpacesContainer from './SpacesContainer';

export default class Home extends React.Component {

	render() {
		return (
			<div>
				<h1 className="title">Convene</h1>
				<SpacesContainer />
			</div>
		)
	}
}