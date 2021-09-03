const initialState = {
	breakTime: 5,
	sessionTime: 25,
}
const reducer = (state=initialState, action) => {
	switch(action.type) {
		case 'INCREMENT_BREAK':
			return {
				...state,
				breakTime: state.breakTime+1,
			}
		case 'DECREMENT_BREAK':
			return {
				...state,
				breakTime: state.breakTime-1,
			}
		default:
			return state;
	}
}

export default reducer;