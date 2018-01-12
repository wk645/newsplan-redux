import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ArticleActions from '../actions/articles';

class Profile extends React.Component {

	state = {

	}

	handleDelete = (event) => {
		event.preventDefault();
		// this.props.removeArticle(props.article);
	}

	render() {

		console.log(this.props);

		return (
			<div>

			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ArticleActions, dispatch);
}

export default connect(null, mapDispatchToProps)(Profile)