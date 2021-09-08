const initialState = {
	breakTime: 5,
	sessionTime: 1,
	seconds: 0,
	isClockRunnin: false,
	isBreakRunning: false,
}
const reducer = (state=initialState, action) => {
	switch(action.type) {
		case 'CHANGE_BREAK_TIME':
			return {
				...state,
				breakTime:  {
					up: state.breakTime+1,
					down: state.breakTime <= 0 ? state.breakTime : state.breakTime-1,
				}[action.payload],
			}
		case 'CHANGE_SESSION_TIME':
			return {
				...state,
				sessionTime:  {
					up: state.sessionTime >= 60 ? 0 : state.sessionTime+1,
					down: state.sessionTime <=0 ? 60 : state.sessionTime-1,
				}[action.payload],
			}
		case 'RESET_POMODORO':
			return {
				...state,
				breakTime: 5,
				sessionTime: 25,
				seconds: 0,
				isClockRunnin: false,
			}
		case 'TOGGLE_PLAY':
			return {
				...state,
				isClockRunnin: !state.isClockRunnin,
			}
		case 'START_COUNTDOWN':
			return {
				...state,
				sessionTime: state.seconds <= 1 ? state.sessionTime-1 : state.sessionTime,
				seconds: state.seconds === 0 ? 59 : state.seconds-1,
				breakTime: state.seconds === 1 ? state.breakTime-1 : state.breakTime,
			}
		case 'START_COUNTDOWN2':
			return {
				...state,
				breakTime: state.seconds <= 1 ? state.breakTime-3 : state.breakTime,
				seconds: state.seconds === 0 ? 59 : state.seconds-1
			}
		case 'TOGGLE_BREAK':
			return {
				...state,
				isBreakRunning: !state.isBreakRunning,
			}
		default:
			return state;
	}
}

export default reducer;