export function addArticle(article) {
	return {
		type: "ADD_ARTICLE",
		payload: article
	}
}

export function removeArticle(title) {
	return {
		type: "REMOVE_ARTICLE",
		payload: title
	}
}

export function fetchAPI(data) {
	return function(dispatch) {
		fetch(`https://newsapi.org/v2/top-headlines?sources=${data}&apiKey=6c3c0586700d42f186c867bfd45f05e1`, {
			method: 'get',
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			}
		})
		.then(res => res.json())
		.then(data => dispatch({ type: "FETCHED_SOURCE", payload: data}));
	}
}