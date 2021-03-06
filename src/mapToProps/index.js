export const mapStateToProps = statexxx => {
	return statexxx
}

export const mapDispatchToProps = dispatch => {
	return {
		changeSessionTime: (upOrDown) => dispatch({
			type: 'CHANGE_SESSION_TIME',
			payload: upOrDown,
		}),
		changeBreakTime: (upOrDown) => dispatch({
			type: 'CHANGE_BREAK_TIME',
			payload: upOrDown,
		}),
		resetPomodoro: () => dispatch({
			type: 'RESET_POMODORO',
		}),
		togglePlay: () => dispatch({
			type: 'TOGGLE_PLAY',
		}),
		startCountdown: () => dispatch({
			type: 'START_COUNTDOWN',
		}),
		toggleBreak: () => dispatch({
			type: 'TOGGLE_BREAK',
		}),
		startCountdown2: () => dispatch({
			type: 'START_COUNTDOWN2',
		})
	}
}