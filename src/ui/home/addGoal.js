import React from 'react';
import {connect} from 'react-redux'
import {addGoal} from 'api/api'
import GoalList from 'ui/home/goalList'

//Submit new Goal
const GoalForm = React.createClass({
  getInitialState: function(){
  	return{
  		goal:0,
  		name:""
  	}
  },
  handleChange:function(e){
  	var newState = Object.assign({},this.state)
  	newState[e.target.name] = e.target.value
  	this.setState(newState)
  },
  handleSubmit:function(e){
  	e.preventDefault()
  	addGoal(this.state.name, this.state.goal)
  	this.setState({goal:0, name:""})
  	
  },
  render: function () {
    return (
    <div>
    	<h2>Create Goal</h2>
      <form onSubmit={this.handleSubmit}>
      	<input onChange={this.handleChange} type="text" name="name" value={this.state.name} placeholder="Goal Name" />
      	<input onChange={this.handleChange} type="number" name="goal" value={this.state.goal} placeholder="End Goal" />
      	<button type="submit">Create</button>
      </form>
    <GoalList goals={this.props.goals} />


    </div>
    )
  }
})


const stateToProps = function(state){
	return{
		goals: state.goalReducer.goals
	}
}

export default connect(stateToProps)(GoalForm)