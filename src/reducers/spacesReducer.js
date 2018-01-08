export function spacesReducer(state = {spacesList: []}, action) {
	
	switch(action.type) {
		case "ADD_SPACE":
			return Object.assign({}, state, {spacesList: action.payload})
		default:
			return state;
	}
}


export default spacesReducer