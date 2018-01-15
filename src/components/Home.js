import React from 'react';
import { Message } from 'semantic-ui-react';

export default class Home extends React.Component {

	render() {
		return (
			<div>
				<h1 className="title">Newsplan</h1>
				<center><Message className="description" compact={true}>
					Welcome to Newsplan!
					<br />
				 	You can browse through up to 30 different sources to read your news on the go.
				 	<br />
				 	Navigate to the News tab to get started!
				</Message></center>
			</div>
		)
	}
}