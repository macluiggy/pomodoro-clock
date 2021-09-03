const initialState = {
	value: 'hello madafaka'
}
const reducer = (state=initialState, action) => {
	switch(action.type) {
		case 'DOO':
			return {
				...state,
			}
		default:
			return state;
	}
}

export default reducer;