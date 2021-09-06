import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../mapToProps/'
import '../sass/main.scss';
import { Icon } from '@iconify/react';


const BreakOrSession = ({
	decrementId,
	changeTime,
	incrementId,
	incrementFunction,
	breakOrSessionTime,
}) => {
	return (
			<div>
				<button
			      id={decrementId}
			      onClick={() => changeTime('down')}
			    >
					<Icon
					 icon='akar-icons:arrow-down'
					/>
				</button>
				<time id="break-length">
					{breakOrSessionTime}
				</time>
				<button 
				  id="break-increment"
				  onClick={() => changeTime('up')}
			    >
					<Icon
					 icon='akar-icons:arrow-up'
					/>
				</button>
			</div>
		)
}
const Main = ({
	stateReducer,
	incrementBreak,
	decrementBreak,
	changeBreakTime,
}) => {
	//const { value } = state.stateReducer;
	const { breakTime, sessionTime } = stateReducer;
	//console.log(props)
	return (
		<div className='container'>
			<div className='pomodoro_title'></div>
			<div className='pomodoro_container'>
				<div className='break_container'>
					<div id='break-label'>
						<p>Break Length</p>
						<BreakOrSession
								decrementId="break-decrement"
								changeTime={changeBreakTime}
								incrementId="break-increment"
								incrementFunction={incrementBreak}
								breakOrSessionTime={breakTime}
						/>
					</div>
					<div id='session-label'>
						<p>Session Length</p>
						<BreakOrSession
							decrementId="session-decrement"

						/>
						<div>
							<Icon
							 icon='akar-icons:arrow-down'
							 id="session-decrement" />
							<time id="session-length">
								{sessionTime}
							</time>
							<Icon
							 icon='akar-icons:arrow-up'
							 id="session-increment"
							  />
						</div>
					</div>
				</div>

				<div className='timer_container'>
					<div id='timer-label'>
						Session
					</div>
					<div id='time-left'>
						{`${25}:${'00'}`}
					</div>
					<div className='btns'>
						<button>
							<Icon
							 icon={true ? 'el:play' : 'fa-solid:pause'}
							 id="start_stop" />
						</button>
						<button>
							<Icon
							 icon='grommet-icons:power-reset'
							 id='reset' />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);