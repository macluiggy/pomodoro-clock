import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../mapToProps/'
import '../sass/main.scss';
import { Icon } from '@iconify/react';

const Main = ({
	stateReducer,
	changeBreakTime,
	changeSessionTime,
	resetPomodoro,
	togglePlay,
	startCountdown,
}) => {
	//const { value } = state.stateReducer;
	const { breakTime, sessionTime, isClockRunnin, seconds } = stateReducer;
	//let interval;
	//console.log(props)
	let startCount = () => {
		togglePlay()
		/*interval = setInterval(() => {
			if (!isClockRunnin) {
				startCountdown()
			}
		}, 1000)*/
	}
	let stopCount = () => {
		togglePlay()
		console.log('log message')
		/*clearInterval(interval)*/
	}
	useEffect(() => {
		if (!isClockRunnin) return
		let interval = setInterval(() => {
			startCountdown()
		}, 1000);

		return () => clearInterval(interval)
	}, [isClockRunnin])
	return (
		<div className='container'>
			<div className='pomodoro_title'></div>
			<div className='pomodoro_container'>
				<div className='break_container'>
					<div id='break-label'>
						<p>Break Length</p>
						<BreakOrSession
								changeTime={changeBreakTime}
								decrementId="break-decrement"
								incrementId="break-increment"	
								breakOrSessionTime={breakTime}
								breakOrSessionLength="break-length"
						/>
					</div>
					<div id='session-label'>
						<p>Session Length</p>
						<BreakOrSession
							changeTime={changeSessionTime}
							decrementId="session-decrement"
							incrementId="session-increment"
							breakOrSessionTime={sessionTime}
							breakOrSessionLength="session-length"
							isClockRunnin={isClockRunnin}
						/>
					</div>
				</div>

				<div className='timer_container'>
					<div id='timer-label'>
						Session
					</div>
					<div id='time-left'>
						{`${sessionTime}:${seconds}`}
					</div>
					<div className='btns'>
						<button
							onClick={() => {
								isClockRunnin ? stopCount() : startCount()
							}}
						>
							<Icon
							 icon={isClockRunnin ? 'fa-solid:pause' : 'el:play'}
							 id="start_stop" />
						</button>
						<button onClick={() => resetPomodoro()} >
							<Icon
							 icon='grommet-icons:power-reset'
							 id='reset'
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

const BreakOrSession = ({
	decrementId,
	changeTime,
	incrementId,
	incrementFunction,
	breakOrSessionTime,
	isClockRunnin,
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
					{isClockRunnin ? breakOrSessionTime : [breakOrSessionTime].join('')}
				</time>
				<button 
				  id={incrementId}
				  onClick={() => changeTime('up')}
			    >
					<Icon
					 icon='akar-icons:arrow-up'
					/>
				</button>
			</div>
		)
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);