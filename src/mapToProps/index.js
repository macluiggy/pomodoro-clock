export const mapStateToProps = statexxx => {
	return statexxx
}

export const mapDispatchToProps = dispatch => {
	return {
		incrementBreak: () => dispatch({
			type: 'INCREMENT_BREAK',
		}),
		decrementBreak: () => dispatch({
			type: 'DECREMENT_BREAK',
		})
	}
}