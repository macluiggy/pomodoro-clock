import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../mapToProps/'
import '../sass/main.scss'

const Main = ({ stateReducer }) => {
	//const { value } = state.stateReducer;
	const { value } = stateReducer;
	//console.log(props)
	return (
		<div className='container'>
			<div className='pomodoro_title'></div>
			<div className='pomodoro_container'>
				<div id='break-label'>
					<p>Break Length</p>
				</div>
				<div id='session-label'>
					<p>Session Length</p>
				</div>
			</div>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);