import React, { Component } from 'react'

import './styles.css'

export default class Admin extends Component {
	render() {
		return (
			<div>
				<div className='section'>Раздел будет показан, если пользователь ввел верно пароль. 
				Если пользователь ввел пароль неверно - необходимо обдумать. </div>
			</div>
		)
	}
}
