export function newsReducer(state = {articlesList: []}, action) {
	
	switch(action.type) {
		case "ADD_ARTICLE":
			return Object.assign({}, state, {articlesList: action.payload})
		case "FETCHED_SOURCE":
			// console.log("in newsReducer", action.payload.articles)
			return Object.assign({}, state, {articlesList: action.payload})
		default:
			return state;
	}
}


export default newsReducer