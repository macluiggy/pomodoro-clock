export const mapStateToProps = statexxx => {
	return statexxx
}

export const mapDispatchToProps = dispatch => {
	return {
		incrementBreak: () => dispatch({
			type: 'INCREMENT_BREAK',
		}),
		changeBreakTime: (upOrDown) => dispatch({
			type: 'DECREMENT_BREAK',
			payload: upOrDown,
		})
	}
}