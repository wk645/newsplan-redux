import React from 'react';
import { connect } from 'react-redux';
import * as SpaceActions from '../actions/spaces';
import { bindActionCreators } from 'redux';
import SpacesList from './SpacesList';

class SpacesContainer extends React.Component {

	render() {

		console.log(this.props);
		
		return (
			<div>
				<SpacesList spaces={this.props.spaces}/>
			</div>
		)
	}

}
	
function mapStateToProps(state) {
	console.log("spacesC", state)
	return {
		spaces: state.spaces.spacesList
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(SpaceActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SpacesContainer)