const initialState = {
	breakTime: 5,
	sessionTime: 25,
	showPlay: true,
}
const reducer = (state=initialState, action) => {
	switch(action.type) {
		case 'CHANGE_BREAK_TIME':
			return {
				...state,
				breakTime:  {
					up: state.breakTime+1,
					down: state.breakTime-1,
				}[action.payload],
			}
		case 'CHANGE_SESSION_TIME':
			return {
				...state,
				sessionTime:  {
					up: state.sessionTime+1,
					down: state.sessionTime-1,
				}[action.payload],
			}
		case 'RESET_POMODORO':
			return {
				...state,
				breakTime: 5,
				sessionTime: 25,
			}
		case 'TOGGLE_PLAY':
			return {
				...state,
				showPlay: !state.showPlay,
			}
		default:
			return state;
	}
}

export default reducer;