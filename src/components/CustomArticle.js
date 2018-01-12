import React from 'react';
import { connect } from 'react-redux';
import * as ArticleActions from '../actions/articles';
import { bindActionCreators } from 'redux';
import { Grid, Segment, Button } from 'semantic-ui-react'; 

const CustomArticle = (props) => {

	// console.log("article", props.articles.author);

	const handleClick = () => {
		window.open(`${props.article.url}`)
	}

	const handleSave = (event) => {
		event.preventDefault();
		this.props.addArticle(props.article);
	}

	return (
		<Grid.Column>
			<Segment color='black'>
			<h2 className='newsTitle' onClick={handleClick}>{props.articles.title}</h2>
						<p className='description'>{props.articles.description}</p>
						<img alt="" />
						<br />
			<Button className="articleButton" onClick={handleSave}>Save</Button>
			</Segment>
		</Grid.Column>
	)
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ArticleActions, dispatch)
}



export default connect(null, mapDispatchToProps)(CustomArticle)