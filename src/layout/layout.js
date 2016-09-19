import React from 'react'
import {Link } from 'react-router'

export default class Layout extends React.Component{
	render(){
		return(
			<div>
				<Link to="/">Home</Link>
				<Link to="/groupView">Group View</Link>
				{this.props.children}
			</div>

		)


	}
}

