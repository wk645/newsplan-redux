import React from 'react';
import CustomArticle from './CustomArticle';
import newsOptions from './newsOptions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ArticleActions from '../actions/articles';
import { Dropdown, Grid } from 'semantic-ui-react';

class Custom extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			custom: []
		}
	}

	handleSelect = (event, data) => {
		this.props.fetchAPI(data.value)
	}

	render() {

		let news = this.props.articles.length === 0 ? null : this.props.articles.articles.map((a, index) => <CustomArticle articles={a} key={index} />)


		return (
			<div>
				<center>
					<Dropdown className="dropdown" placeholder="Select a Source" search selection options={newsOptions} onChange={this.handleSelect} scrolling={true} />
				</center>
				<Grid relaxed columns={2}>
					{news}
				</Grid>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ArticleActions, dispatch);
}

function mapStateToProps(state) {
	return {
		articles: state.articles.articlesList
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Custom)
