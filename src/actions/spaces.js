export function addSpace(space) {
	return {
		type: "ADD_SPACE",
		payload: space
	}
}

export function removeSpace(name) {
	return {
		type: "REMOVE_SPACE",
		payload: name
	}
}