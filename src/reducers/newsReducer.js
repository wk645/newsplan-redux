export function newsReducer(state = {articlesList: []}, action) {
	
	switch(action.type) {
		case "ADD_ARTICLE":
			return Object.assign({}, state, {articlesList: action.payload})
		case "FETCHED_SOURCE":
			return Object.assign({}, state, {articlesList: action.payload})
		default:
			return state;
	}
}


export default newsReducer