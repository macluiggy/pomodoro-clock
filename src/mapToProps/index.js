export const mapStateToProps = statexxx => {
	return statexxx
}

export const mapDispatchToProps = dispatch => {
	return {
		fn: () => dispatch({
			type: 'DO',
		})
	}
}